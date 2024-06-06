const db = require("../prisma/database");
const bcrypt = require('bcrypt')
const Student = db.students;
const Event = db.events;
const Event_attendance = db.event_attendances;
const User = db.users;
const saltRounds = 8;

exports.create = async (req, res) => {
  try {
    const data = req.body;

    // Hash the password
    const hashedPass = await bcrypt.hash(data.password, saltRounds);

    // Check if the email exists
    const userExists = await User.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      return res.status(400).send({ message: 'Email Already in Use' });
    }

    // Create the user
    const createdUser = await User.create({
      data: {
        email: data.email,
        password: hashedPass,
        first_name: data.first_name,
        last_name: data.last_name,
        role: 'student',
      },
    });

    // Assuming Admin is a separate model/entity, create Admin or Student accordingly
    const createdStudent = await Student.create({
      data: {
        user_id: createdUser.user_id,
        program: data.program, 
        year: Number(data.year)
      },
    });

    res.status(201).send({ createdUser, createdStudent });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.sortByID = (req, res) => {
  Student.findAll({
    include: [{
      model: User,
    }],
    order: [["student_id", "DESC"]]
  })
    .then((data) => {
      console.log(data);
      res.send(data);
      console.log("why");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
      console.log("also why");
    });
};

exports.sortByLastName = (req, res) => {
  Student.findAll({
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
    order: [[{ model: User }, "last_name", "ASC"]],
  })
    .then((sortedStudents) => {
      res.status(200).send({
        message: "Sorted successfully",
        results: sortedStudents,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findAll = (req, res) => {
  Student.findMany({
    include: {
      user: true,
    }
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOne = (req, res) => {
  //options
  let student_id = req.params.id;

  //the .findByPk method refers to finding somehting by it's primary key
  Student.findUnique({
    where: {
      student_id: parseInt(student_id)
    }
  })
    .then((student) => {
      User.findUnique({
        where: {
            user_id: parseInt(student.user_id)
        }
      })
      .then((user) => {
        res.status(200).send({
          status: user && student ? "found" : "not found",
          student: student ? student : null,
          user: user ? user : null,
        });
      })
      
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findByProgram = (req, res) => {
  //conditional
  let program = req.body.program;

  if (!program) {
    return res.status(400).send({ message: "No program was filled out" });
  }

  Student.findAll({
    where: {
      program: program,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findByYear = (req, res) => {
  //conditional
  let year = req.body.year;

  if (!year) {
    return res.status(400).send({ message: "No year was filled out" });
  }

  Student.findAll({
    where: {
      year: year,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.findOneID = (req, res) => {
  //options
  let student_id = req.body.student_id;

  //the .findByPk method refers to finding somehting by it's primary key
  Student.findByPk(student_id)
    .then((data) => {
      res.status(200).send({
        status: data ? "found" : "not found",
        data: data ? data : null,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  let id = req.params.id
  let data = req.body;
  Student.update({ where: { student_id: id}, data: data.student })
    .then(() => {
      res.status(200).send({
        message: "student record updated successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.addPoint = (req, res) => {
  const id = req.params.id;
  Student.update({ 
    where: { 
      student_id: Number(id) 
    },
    data: {
      points: {
        increment: 1
      }
    }
  
  })
    .then(() => {
      res.status(200).send({
        message: "Student points incremented successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.minusPoint = (req, res) => {
  const id = req.params.id; 
  Student.findUnique({
    where: {
      student_id: Number(id)
    }
  }).then((data) => {
    if (data.points <= 0){
      return res.status(400).send({ message: "Points Cannot be Negative" });
    }
  Student.update({ 
    where: { 
      student_id: Number(id) 
    },
    data: {
      points: {
        decrement: 1
      }
    }
  })
    .then(() => {
      res.status(200).send({
        message: "Student points decremented successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  })
};


exports.deleteOne = (req, res) => {
  let id = req.params.id;
  Student.findUnique({
    where: {
      student_id: Number(id)
    }
  })
  .then((data) => {
    if (!data) {
      return res.status(404).send({ message: "Student not found" });
    }
    const userID = data.user_id;
    Student.delete({ where: { student_id: Number(id) } })
      .then(() => {
        User.delete({ where: { user_id: Number(userID) } })
          .then(() => {
            res.status(200).send({ message: "Student record deleted successfully" });
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

exports.getEventsByID = (req, res) => {
  let id = req.params.id;
  Event_attendance.findMany({
    where: {
      student_id: Number(id),
    },
  })
    .then((event_att) => {

      const eventIds = event_att.map((event) => event.event_id);

      Event.findMany({
        where: {
        event_id: {
            in: eventIds,
          },
        }
      })
       .then((data) => {
        const formattedData = data.map((event) => ({
          ...event,
          ...event_att.find((item) => item.event_id === event.event_id),
        }));

        res.send({ data: formattedData });
      })
        .catch((error) => {
          console.error("Error fetching Event records: ", error);
          res.status(500).send({ message: error.message });
        });
    })
    .catch((error) => {
      console.error("Error fetching Event_attendance records: ", error);
      res.status(500).send({ message: error.message });
    });
};

exports.sortByLastName = (req, res) => {
  Student.findMany({
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
    order: [[User, "last_name", "ASC"]],
  })
    .then((sortedStudents) => {
      res.status(200).send({
        message: "sorted successfully",
        results: sortedStudents,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.sortByIDEvent = (req, res) => {
  const id = req.params.id;

  Event_attendance.findMany({
    where: {
      event_id: id,
    },
    include: [
      {
        model: Student,
        attributes: ["year", "program", "student_id"],
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name"],
          },
        ],
      },
    ],
    order: [["student_id", "ASC"]],
  })
    .then(() => {
      res.status(200).send({
        message: "sorted successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.sortByFirstNameEvent = (req, res) => {
  const id = req.body.id;

  Event_attendance.findAll({
    where: {
      event_id: id,
    },
    include: [
      {
        model: Student,
        attributes: ["year", "program", "student_id"],
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name"],
          },
        ],
      },
    ],
    order: [[{ model: User }, "last_name", "ASC"]],
  })
    .then((sortedResults) => {
      res.status(200).send({
        message: "sorted successfully",
        results: sortedResults,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.sortByID = (req, res) => {
  Student.findMany({
    include: [
      {
        model: User,
      }
    ],
    order: [["student_id", "ASC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};