const router = require('express').Router();
const Controller = require('../Controller/controller');

router.post('/api/Register', Controller.registerNewUser);
router.post('/api/Login', Controller.loginUser);

module.exports = router;

    // app.post('/api/register', Controller.checkDuplicateEmail);