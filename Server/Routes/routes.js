const router = require('express').Router();
const Controller = require('../Controller/controller');

router.post('/Register', Controller.registerNewUser);
router.post('/Login', Controller.loginUser);


module.exports = router;

    // app.post('/api/register', Controller.checkDuplicateEmail);