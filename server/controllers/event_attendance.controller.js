const db = require("../prisma/database");
const Event_attendance = db.event_attendances;
const Event = db.events;
const Student = db.students;

exports.create = async (req, res) => {
  const data = req.body;
  const event_attendance = {
    att_status: 'pending',
    student_id: Number(data.student_id),
    event_id: Number(data.event_id),
  };

  try {
    const existingAttendance = await Event_attendance.findFirst({
      where: {
        AND: [
          { event_id: event_attendance.event_id },
          { student_id: event_attendance.student_id },
        ],
      },
    });

    if (existingAttendance) {
      return res.status(400).send({ message: 'Already Registered' });
    }

    if (!event_attendance.student_id) {
      return res.status(400).send({ message: 'Not Student' });
    }

    const createdAttendance = await Event_attendance.create({data:event_attendance});
    res.send(createdAttendance);
  } catch (err) {
    res.status(500).send({ data: event_attendance, message: err.message });
  }
};

exports.findAttByEvent = (req, res) => {
  //search options
  const event_id = req.body.event_id;
  Event_attendance.findMany({
    where: {
      event_id: parseInt(event_id)
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAttByStudent = (req, res) => {
  //search options
  const student_id = req.body.student_id;
  Event_attendance.findMany({
    where: {
      student_id: parseInt(student_id)
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//NOTE: PLEASE DO TELL ME IF WE SHOULD HAVE A FILTER SYSTEM THAT SHOWS STUDENT && STATUS
//EX: SHOW RECORDS OF ATTENDANCE BY A STUDENT THAT IS APPROVED yer

exports.findByAttID = (req, res) => {
  //options
  let id = req.params.id;

  Event_attendance.findUnique({
    where: {
      att_id: parseInt(id)
    }
  })
    .then((data) => {
      res.send({
        status: data ? "found" : "not found",
        data: data ? data : null,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  let data = req.body;
  Event_attendance.update(data.event_attendance, {
    where: { att_id: data.att_id },
  })
    .then(() => {
      res.status(200).send({
        message: "event attendance record updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  let data = req.params;
  Event_attendance.destroy({ where: { att_id: data.att_id } })
    .then(() => {
      res.status(200).send({
        message: "event attendance deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  //search options
  const event_id = req.body.event_id;
  Event_attendance.findUnique({
    where: {
      att_id: event_id
    }
  })
    .then((data) => {
      res.status(200).send({
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// exports.absent = (req, res) => {
//   const id = req.params.id;

//   Event_attendance.update(
//     { att_status: 'absent' },
//     { where: { att_id: id } }
//   )
//     .then((result) => {
//       console.log(result)
//       if (result > 0) {
//         res.status(200).send({ message: 'Status updated successfully' });
//       } else {
//         res.status(404).send({ message: 'Row not found' });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

// exports.pending = (req, res) => {
//   const id = req.params.id;

//   Event_attendance.update(
//     { att_status: 'pending' },
//     { where: { att_id: id } }
//   )
//     .then((result) => {
//       if (result > 0) {
//         res.status(200).send({ message: 'Status updated successfully' });
//       } else {
//         res.status(404).send({ message: 'Row not found' });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

exports.approved = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const existingAttendance = await Event_attendance.findUnique({
      where: {
        att_id: Number(id),
        OR: [
          { att_status: "absent" },
          { att_status: "pending" },
        ],
      },
    });
    if (!existingAttendance) {
      return res.status(404).send({ message: 'Attendance record not found or status not matching criteria' });
    }
    
    await Event_attendance.update({
      where: {
        att_id: Number(id),
      },
      data: {
        att_status: 'approved',
      },
    });

    const result = await Student.update({
      where: {
        student_id: Number(data.student_id),
      },
      data: {
        points: {
          increment: Number(data.CES_points),
        },
      },
    });

    if (result) {
      res.status(200).send({ message: 'Status updated successfully' });
    } else {
      res.status(404).send({ message: 'Row not found' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.pending = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const existingAttendance = await Event_attendance.findUnique({
      where: {
        att_id: Number(id),
        OR: [
          { att_status: "approved" },
          { att_status: "absent" },
        ],
      },
    });
    if (!existingAttendance) {
      return res.status(404).send({ message: 'Attendance record not found or status not matching criteria' });
    }

    const result = await Student.update({
      where: {
        student_id: Number(data.student_id),
      },
      data: {
        points: {
          decrement: existingAttendance.att_status == "approved" ?
           Number(data.CES_points) : 0,
        },
      },
    });
    
    await Event_attendance.update({
      where: {
        att_id: Number(id),
      },
      data: {
        att_status: 'pending',
      },
    });


    if (result) {
      res.status(200).send({ message: 'Status updated successfully' });
    } else {
      res.status(404).send({ message: 'Row not found' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.absent = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const existingAttendance = await Event_attendance.findUnique({
      where: {
        att_id: Number(id),
        OR: [
          { att_status: "approved" },
          { att_status: "pending" },
        ],
      },
    });
    if (!existingAttendance) {
      return res.status(404).send({ message: 'Attendance record not found or status not matching criteria' });
    }

    const result = await Student.update({
      where: {
        student_id: Number(data.student_id),
      },
      data: {
        points: {
          decrement: existingAttendance.att_status == "approved" ?
           Number(data.CES_points) : 0,
        },
      },
    });

    await Event_attendance.update({
      where: {
        att_id: Number(id),
      },
      data: {
        att_status: 'absent',
      },
    });

    if (result) {
      res.status(200).send({ message: 'Status updated successfully' });
    } else {
      res.status(404).send({ message: 'Row not found' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};