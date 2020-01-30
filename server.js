const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let userArr = [];

/* handle function for simple intrest
  A = P(1 + rt) 
  */
const handleCalculate = value => {
  let time = value[0].duration;
  let principal = value[0].amount;
  let rate = 0.3; //customed defined
  let total = (principal * time * rate) / 100;
  userArr[0]["installments"] = total;
};

/* post request body
    calls handleCalculate function
    response json
  */
app.post("/calculate", (req, res) => {
  userArr.length = 0;
  let user = req.body;
  console.log(user);
  userArr.push(user);
  handleCalculate(userArr);
  res.send(userArr[0]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
