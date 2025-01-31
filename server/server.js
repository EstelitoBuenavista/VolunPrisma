var cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


require("./routes/user.routes")(app);
require("./routes/student.routes")(app);
require("./routes/event.routes")(app);
require("./routes/event_attendance.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});