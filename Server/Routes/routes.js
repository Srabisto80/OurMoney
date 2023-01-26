const router = require('express').Router();
const Controller = require('../Controller/controller');

router.post('/Register', Controller.registerNewUser);
router.post('/Login', Controller.loginUser);
router.post('/Forgot', Controller.forgotPass);
router.post('/AddNewIncome', Controller.addNewIncome);
router.post('/Dash', Controller.loadDash);
router.post('/addNewBill', Controller.addNewBill)
// router.get('/Data/:email', Controller.getData);

module.exports = router;

    // app.post('/api/register', Controller.checkDuplicateEmail);

    // axios.get("http://localhost:3001/api/Data/"+email)

//req.params.email

    //query parameters