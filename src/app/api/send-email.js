import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Received email request:', req.body);

  const { to, name, amount, course, mode, whatsappLink } = req.body;

  // Validate required fields
  if (!to || !name || !amount || !course) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email credentials in environment variables');
    return res.status(500).json({ error: 'Email configuration error' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    debug: true // Enable debug logging
  });

  const mailOptions = {
    from: `"Phantomire Training" <${process.env.EMAIL_USER}>`,
    to: to,
    subject: '✅ Training Registration Confirmed - Phantomire Technologies',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #4A235A;">🎉 Welcome ${name}!</h1>
            <p style="font-size: 18px;">Your registration is confirmed</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #4A235A; margin-top: 0;">Payment Details</h2>
            <p><strong>Course:</strong> ${course}</p>
            <p><strong>Mode:</strong> ${mode === 'online' ? 'Online Training' : 'Onsite (Physical)'}</p>
            <p><strong>Amount Paid:</strong> <span style="font-size: 20px; color: #27ae60;">₦${amount.toLocaleString()}</span></p>
            <p><strong>Status:</strong> <span style="color: #27ae60;">✅ Payment Successful</span></p>
          </div>

          <div style="background: #e8f5e9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #4A235A; margin-top: 0;">📱 Join Your Class WhatsApp Group</h2>
            <p>Click the button below to join your training class WhatsApp group:</p>
            <div style="text-align: center;">
              <a href="${whatsappLink}" 
                 style="display: inline-block; background: #25D366; color: white; padding: 12px 30px; 
                        text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 0;">
                Join WhatsApp Group
              </a>
            </div>
            <p style="font-size: 14px; color: #666;">Or copy this link: ${whatsappLink}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h3>What's Next?</h3>
            <ul>
              <li>✅ Training schedule will be sent within 24 hours</li>
              <li>✅ Course materials will be shared in the WhatsApp group</li>
              <li>✅ Keep this email for future reference</li>
            </ul>
          </div>

          <hr style="margin: 20px 0;" />

          <div style="font-size: 12px; color: #999; text-align: center;">
            <p>Need help? Contact us on WhatsApp: +234 916 136 0898</p>
            <p>&copy; ${new Date().getFullYear()} Phantomire Technologies Professional Training. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    console.log('Attempting to send email to:', to);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed email error:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message,
      code: error.code 
    });
  }
}