/*MARY'S NOTES: btw, I dunno how the filter works in front end, so if we actually do need
to sort by name or find by amount of CES points and etc. just either (a)tell me so I could
place in the method or if you want kay (b)add one in yourself, yer just lmk ra either works
for me frfr*/
const db = require("../prisma/database");
const Event = db.events;
const Event_attendance = db.event_attendances;
const Student = db.students;
const User = db.users;

exports.create = async (req, res) => {
  const data = req.body;
  const event = {
    event_title: data.event_title,
    event_desc: data.event_desc,
    event_loc: data.event_loc,
    event_date: new Date(data.event_date).toISOString(),
    CES_points: Number(data.CES_points),
    status: data.status,
  };

  Event.create({data: event})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = (req, res) => {
  //keep findAll blank without any attributes so that the method finds all frfr
  Event.findMany()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateFields = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const event = await Event.findUnique({
      where: {
        event_id: Number(id),
      },
    });

    if (!event) {
      return res.status(404).send({ message: 'Event not found' });
    }

    const newData = {
      status: data.status !== undefined ? data.status : event.status,
      event_title: data.event_title !== undefined ? data.event_title : event.event_title,
      event_desc: data.event_desc !== undefined ? data.event_desc : event.event_desc,
      event_loc: data.event_loc !== undefined ? data.event_loc : event.event_loc,
      event_date: data.event_date !== undefined
        ? new Date(data.event_date).toISOString()
        : new Date(event.event_date).toISOString(),
      CES_points: data.CES_points !== undefined ? Number(data.CES_points) : Number(event.CES_points),
    };

    const updatedEvent = await Event.update({
      where: {
        event_id: Number(id),
      },
      data: newData,
    });

    res.send(updatedEvent);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.findEventByStatus = (req, res) => {
  //options
  let status = req.body.status;

  Event.findMany({
    where: {
      status: status,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  let data = req.body;
  Event.update({
     where: { event_id: data.event_id },
     data: data.event 
  
  })
    .then(() => {
      res.status(200).send({
        message: "event updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  let data = req.body;
  //destroy is a sequelize method to delete basically
  Event.delete({ where: { event_id: data.event_id } })
    .then(() => {
      res.status(200).send({
        message: "event deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteOne = (req, res) => {
  //options
  let id = req.params.id;

  Event.delete({ where: { event_id: Number(id) } })
    .then(() => {
      res.status(200).send({
        message: "event deleted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  //options
  let id = req.params.id;

  Event.findUnique({
    where: {
      event_id: Number(id)
    }
  })
    .then((data) => {
      res.status(200).send({
        data: data,
        idNumber: id
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateStatus = (req, res) => {
  
  Event.update({ where: { event_id: Number(req.params.id) },
    data: {
      status: "completed"
    }
})
    .then(() => {
      res.status(200).send({
        message: "event updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });

      Event_attendance.updateMany({where:{
        event_id : Number(req.params.id),
        att_status: "pending",
      },
      data: {
        att_status: "approved"
      }
    })
};

exports.updateToApproved = (req, res) => {
  const id = req.params.id;
  Event_attendance.update(
    {
      where: {
        event_id: id,
        att_status: "pending",
      },
      data: {
        att_status: "approved"
      }
    }
  )
    .then(() => {
      res.status(200).send({
        message: "event status updated successfully frfr",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateStatusToDate = async (req, res) => {
  try {
    const currentDate = new Date()
    const events = await Event.findMany()

    if (!events){
      return res.status(400).send({
        message: 'No events',
      });
    }

    const affectedRows = await Event.updateMany({
      where: {
        AND: [
          {
            OR: [
              { status: 'ongoing' },
              { status: 'upcoming' },
            ],
          },
          {
            event_date: {
              lt: currentDate,
            },
          },
        ],
      },
      data: {
        status: 'not_approved',
      },
    });

    if (affectedRows.count > 0) {
      res.status(200).send({
        message: 'Status updated successfully.',
      });
    } else {
      res.status(200).send({
        message: 'No events matched the criteria.',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: error.message });
  }
};

// exports.findSpecificEvent = (req, res) => {
//   //options
//   let status = req.body.status;

//   Event.findAll({
//     where: {
//       status: status,
//     },
//   })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };

//MARY'S NOTES: STULL HAVE TO EDIT
exports.studentInfoByEvent = (req, res) => {
  let id = req.params.id;
  Event_attendance.findMany({
    where: {
      event_id: Number(id),
    },
    include: {
      student: {
        select: {
          year: true,
          program: true,
          student_id: true,
          user: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
        },
      },
    },
  }).then((results) => {
    res.send(results);
  }).catch((error) => {
    console.error("Error: ", error);
    res.status(500).send({message: error.message});
  });
}; 

exports.updateAllPoints = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await Event_attendance.findMany({
      where: {
        event_id: Number(id),
        att_status: "pending",
      },
    });

    if (!data || data.length === 0) {
      return res.status(404).send({
        message: "No attendance record found for this event",
      });
    }

    const stud_id = data.map((event_att) => event_att.student_id);

    await Event_attendance.updateMany({
      where: {
        student_id: {
          in: stud_id,
        },
      },
      data: {
        att_status: 'approved',
      },
    });

    await Student.updateMany({
      where: {
        student_id: {
          in: stud_id,
        },
      },
      data: {
        points: {
          increment: Number(req.body.CES_points),
        },
      },
    });

    res.status(200).send({ message: "Points updated successfully" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send({ message: "Something went wrong somewhere..." });
  }
};