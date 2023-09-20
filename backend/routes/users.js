const express = require('express')
const router = express.Router()
const Users = require("../models/Users")
const bcrypt = require('bcryptjs')

// route to create user
router.post('/create-user', async (req, res) => {

    const userAcc = await Users.findOne({ 'email': req.body.email })

    // checking if the email already exist
    if (userAcc)
        return res.status(400).send('User account already exist')

    else {
        const salt = await bcrypt.genSalt(10)

        // encrypting the password
        const hash = await bcrypt.hashSync(req.body.password, salt)
        req.body.password = hash
        await Users.create({
            ...req.body
        })

        return res.status(200).send('User created successfully')
    }
})


// fetching users details 
router.post('/get-user', async (req, res) => {
    // gets users details based on emails
    const response = await Users.findOne({ 'email': req.body.email })

    //comparing the hash values of given password and stored password
    if (response) {
        const check_pass = bcrypt.compareSync(req.body.password, response.password)
    
        if (check_pass)
            return res.status(200).json({ "username": response.username, "phone_no": response.phone_no, "email": response.email })
        else
            return res.status(401).send("Invalid credentials")
    }
    else
        return res.status(400).send("Bad Request!")
})


// delete user
router.delete('/delete-user', async (req, res) => {
    // deleting the user based on email
    await Users.findOneAndRemove({ 'email': req.body.email })

    return res.status(200).send("User data deleted successfully")
})


// updating user details
router.put('/update-user', async (req, res) => {
    const response = await Users.findOneAndUpdate({ 'email': req.body.email }, { ...req.body })
    return res.status(200).json(response)
})

module.exports = router
