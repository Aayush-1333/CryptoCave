const express = require('express')
const router = express.Router()
const Users = require("../models/Users")
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const otp_gen = require('otp-generator')
require('dotenv').config()


// CREATING A POSTMAN
const MAIL_SETTINGS = {
    service: 'gmail',
    auth: {
        user: process.env.MAIL_NAME,
        pass: process.env.MAIL_PASSWD,
    },
}

const transporter = nodemailer.createTransport(MAIL_SETTINGS);

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


router.post('/verify-otp', async (req, res) => {
    try {
        const otp = otp_gen.generate(4, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });

        let info = await transporter.sendMail({
            from: MAIL_SETTINGS.auth.user,
            to: req.body.email,
            subject: 'Hello ✔',
            html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h3>Here is the OTP: ${otp}</h3>
     </div>`
        })

        return res.status(200).json(otp)
    } catch (err) {
        return res.status(500).send(err)
    }
})

module.exports = router
