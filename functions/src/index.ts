import {onRequest} from "firebase-functions/v2/https";
const nodemailer = require("nodemailer");

// Configure your SMTP credentials
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com", // Replace with your SMTP host
  port: 465, // Use the port appropriate for your SMTP server
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_EMAIL, // Replace with your SMTP username
    pass: process.env.SMTP_PASSWORD, // Replace with your SMTP password
  },
});

// Static email recipient
const TO_EMAIL = process.env.MAIL_TO; // Replace with the email address to send to

// Helper function to validate allowed origins
function isAllowedOrigin(origin: string | undefined): boolean {
  const allowedOrigins = ["http://localhost:3000", "https://limedevs.com"];
  return origin ? allowedOrigins.includes(origin) : false;
}

interface EmailPayload {
    subject: string;
    body: string;
  }

  export const sendEmail = onRequest({ cors: true }, (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    // Only accept POST requests
    if (req.method !== 'POST') {
      res.status(405).send({msg:'Method Not Allowed'});
      return;
    }
  
    // Validate origin
    const origin = req.headers.origin;
    
    if (!isAllowedOrigin(origin)) {
      res.status(403).send({msg:'Forbidden: Invalid origin'});
      return;
    }
  
    // Extract email payload from the request body
    const { subject, body }: EmailPayload = req.body;
  
    // Validate that subject and body are provided
    if (!subject || !body) {
      res.status(400).send({msg:'Bad Request: Missing subject or body'});
      return;
    }
  
    // Set up email options
    const mailOptions = {
      from: `"Lime devs" <${TO_EMAIL}>`, // Replace with your from email address
      to: TO_EMAIL,
      subject: subject,
      text: body,
    };
  
    // Send the email using nodemailer
    transporter.sendMail(mailOptions, (error:any, info:any) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send({msg:'Error sending email'});
        return;
      }
  
      console.log('Email sent successfully:', info.response);
      res.status(200).send({msg:'Email sent successfully'});
    });
  });