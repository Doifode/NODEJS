const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const sendData = new user(req.body);
        // here we ae storing the requested  data from body to this variable
        const saveData = await sendData.save();
        // here we are actually storing the data in 
        // to database sendData.save() this  is  the data base function
        res.send(saveData)
        //this is the response that  we  are  sending to user to know  the user what hrouteren  
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

router.get("/users", async (req, res) => {
    try {
        const getData = await user.find({});
        res.send(getData)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})
router.get("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getByID = await user.findById({ _id });
        res.send(getByID)

    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})
router.patch('/userUpdate/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await user.findByIdAndUpdate({ _id }, req.body, { new: true });
        res.send(updateData)
    } catch (e) { res.status(404).send(e) }
})

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await user.findByIdAndDelete({ _id });
        res.send(deleteData);
    } catch (error) {
        res.status(500).send(error)

    }
})

router.post('/userLogin', async (req, res) => {
    try {
        const getEmail = req.body.email;
        const checkEmail = await user.findOne({ email: getEmail });
        res.send(checkEmail)
    } catch (error) {
        res.status(500).send(error)

    }
})
module.exports = router;