

const express = require('express');

const bookappController = require('../controllers/bookappointment');

const router = express.Router();


router.post('/add-user', bookappController.postUser )

router.get('/get-users',bookappController.getUser )

router.delete('/delete-user/:id',bookappController.deleteUser )


module.exports = router;