

const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();


router.post('/add-expense', expenseController.addExpense )

router.get('/get-expense',expenseController.getExpense )

router.delete('/delete-expense/:id',expenseController.deleteExpense )


module.exports = router;