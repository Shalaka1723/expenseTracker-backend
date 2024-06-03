const express = require("express");
const mongoose = require("mongoose");

var cors = require("cors");
const { Transaction } = require("./models/transactionModel");

const app = express();
const port = 7000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server ${port} running`);
});

const momo = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/transactionDB")
    .then(() => {
      console.log("Mongo Connection success");
    })
    .catch((error) => {
      console.log(error);
    });
};

momo();

const abc = { amount: "", note: "", date: "", radio: "" };

app.post("/transaction", async (req, res) => {
  abc.amount = req.body.inputAmount;
  abc.note = req.body.inputNote;
  abc.date = req.body.inputDate;
  abc.radio = req.body.inputRadio;

  const transaction = new Transaction(abc);

  await transaction
    .save()
    .then(() => {
      console.log("Success transaction saved");
    })
    .catch((error) => {
      console.log(error);
    });

  res.json({
    status: "Succccc",
  });
});

app.get('/list', async(req,res)=>{
  const data = await Transaction.find()
  console.log(data)

  res.json({
    status: 'Success',
    data: data
  })
})