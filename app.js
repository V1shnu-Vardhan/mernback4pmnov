let express = require('express');
let cors = require('cors')
let studentRouting = require('./router/studentRouting');
let signupRouting = require('./router/signupRouting');
let treatmentRouting = require('./router/treatmentRouting');
let offerRouting = require('./router/offerRouting');
let doctorRouting = require('./router/doctorRouting');
let enquiryRouting = require('./router/enquiryRouting');
let appointmentRouting = require('./router/appointmentRouting');
require('./dbconfig');
let app = express();
app.use(express.json());
app.use(cors())

 app.use("/",studentRouting);
 app.use("/",signupRouting);
 app.use("/",treatmentRouting);
 app.use("/",offerRouting);
 app.use("/",doctorRouting);
 app.use("/",enquiryRouting);
 app.use("/",appointmentRouting);

app.listen(9000) 