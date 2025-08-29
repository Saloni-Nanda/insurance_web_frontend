import express, { Request, Response } from 'express';
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', });
    const currentTime = new Date().toLocaleTimeString('en-US');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL,
        subject: `Contact Form: Message from ${name}`,
        html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #F4A261 0%, #E76F51 100%); padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
            New Demo Request
          </h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">
            Zero Expose
          </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
          <!-- Submission Info -->
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #F4A261;">
            <h3 style="color: #2d3748; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">
              📋 Submission Details
            </h3>
            <p style="color: #4a5568; margin: 5px 0; font-size: 14px;">
              <strong>Date:</strong> ${currentDate}
            </p>
            <p style="color: #4a5568; margin: 5px 0; font-size: 14px;">
              <strong>Time:</strong> ${currentTime}
            </p>
          </div>

           <!-- Submission Info -->
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #F4A261;">
            <h3 style="color: #2d3748; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">
              👤 Contact Information
            </h3>
            <p style="color: #4a5568; margin: 5px 0; font-size: 14px;">
              <strong>Full Name: </strong> ${name}
            </p>
            <p style="color: #4a5568; margin: 5px 0; font-size: 14px;">
              <strong>Email: </strong><a href="mailto:${email}" style="color: #E76F51; text-decoration: none; "> ${email} </a>
            </p>
             <p style="color: #4a5568; margin: 5px 0; font-size: 14px;">
              <strong>Message: </strong> ${message}
            </p>
          </div>

         
          <!-- Call to Action -->
          <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 25px; border-radius: 8px; text-align: center; border: 1px solid #e2e8f0;">
            <h4 style="color: #2d3748; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
              🚀 Next Steps
            </h4>
            <p style="color: #4a5568; margin: 0; font-size: 14px; line-height: 1.5;">
              A new contact form submission is waiting for your response. Consider reaching out within 24 hours for the best customer experience.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #2d3748; padding: 20px; text-align: center;">
          <p style="color: #a0aec0; margin: 0; font-size: 12px;">
            This email was automatically generated from your website contact form.
          </p>
          <p style="color: #a0aec0; margin: 5px 0 0 0; font-size: 12px;">
            © ${new Date().getFullYear()} Shankhya.ai - All rights reserved
          </p>
        </div>
      </div>
    `,
        replyTo: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(mailOptions)
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email send error:', error);
        console.log(error)
        return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

export default router;
