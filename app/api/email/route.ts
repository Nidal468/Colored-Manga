import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method !== 'POST') {
    return NextResponse.json( {error: 'Method Not Allowed'} , { status : 405});
  }

  const { toEmail, verificationCode } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.APP_GMAIL, // replace with your email
        pass: process.env.APP_PASS, // replace with your email password
      },
    });

    const mailOptions = {
      from: 'no-reply', // replace with your email
      to: toEmail,
      subject: 'Verification Code',
      text: `Your verification code is: ${verificationCode}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ' + info);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
  return NextResponse.json('email sent', {status: 200})
}
