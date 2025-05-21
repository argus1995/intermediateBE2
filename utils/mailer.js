import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

export const sendWelcomeEmail = async (toEmail, nama, token) => {
    const verificationUrl = `http://localhost:3000/api/users/verify?token=${token}`

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: toEmail,
        subject: 'Welcome to Our App',
        html: `<H2>Hi ${nama}, </h2><p>Thanks for registering. Please verify your email by clicking the link below :</p><a href="${verificationUrl}">${verificationUrl}</a>`
    }

    await transporter.sendMail(mailOptions)
}