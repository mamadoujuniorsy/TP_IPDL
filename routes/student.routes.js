const express = require('express');
const router = express.Router();
const Student = require('../models/student.model.js');
const {getStudents, getStudent, createStudent, updateStudent, deleteStudent} = require('../controllers/user.controller.js');

router.get('/', getStudents);

router.get('/:id', getStudent);

router.post('/', createStudent);
//mettre à jour utilisateur
router.put('/:id', updateStudent),
//Supprimer utilisateur
router.delete('/:id', deleteStudent);
module.exports = router;