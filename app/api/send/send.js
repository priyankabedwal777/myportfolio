import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // You can use any email service
      auth: {
        user: process.env.GMAIL_USER, // Replace with your email
        pass: process.env.GMAIL_PASS, // Replace with your email password or app password
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.GMAIL_USER, // Replace with your email or recipient email
        subject: subject,
        text: message,
      });

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send message.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
