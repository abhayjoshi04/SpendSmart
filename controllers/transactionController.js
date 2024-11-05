const transactionModel = require('../models/transactionModel');
const moment = require('moment');
const getAllTransactions = async (req, res) => {
  try {
    const { frequency, selectedDate, type} = req.body;
    const transactions = await transactionModel.find({
      ...(frequency !== 'Custom' ? { 
        date: { 
          $gte: moment().subtract(Number(frequency), 'd').toDate(), },
      } : {
        date: {
          $gte: selectedDate[0],
          $lte: selectedDate[1],
      }
    }),
    userid: req.body.userid,
    ...(type !== 'all' && { type }),
    });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransaction = async (req, res) => {
  try {
    const newTransaction = await transactionModel.create(req.body);
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("Transaction Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getAllTransactions, addTransaction, deleteTransaction, editTransaction }; 
