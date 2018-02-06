var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/api/users');
var gobblesCtrl = require('../controllers/api/gobbles');

/* GET users listing. */
router.get('/users', usersCtrl.getAllUsers);

router.get('/users/:id', usersCtrl.getOneUser);

router.post('/users', usersCtrl.createUser);

router.delete('/users/:id', usersCtrl.deleteUser);

router.put('/users/:id', usersCtrl.updateUser);

router.post('/gobbles', gobblesCtrl.createGobble);

module.exports = router;
//api routes