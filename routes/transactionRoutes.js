const express = require('express');
const { addTransaction, getAllTransactions, deleteTransaction, editTransaction } = require('../controllers/transactionController');

//router object
const router = express.Router();

//routes
//add transaction POST method
router.post('/add-transaction', addTransaction);

//edit transaction POST method
router.post('/edit-transaction', editTransaction);

//get all transactions
router.post('/get-transactions', getAllTransactions);

//delete transaction POST method
router.post('/delete-transaction', deleteTransaction);
//router.delete('/delete-transaction/:id', deleteTransaction);

//export router
module.exports = router;