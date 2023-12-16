import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: any) {
  try {
  const formData = await req.formData();
  const toEmail = formData.get('email')?.toString() || '';
  const verificationCode = formData.get('code')?.toString() || '';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env. NEXT_PUBLIC_APP_GMAIL, // replace with your email
      pass: process.env. NEXT_PUBLIC_APP_PASS, // replace with your email password
    },
    
  });

  
    
    const mailOptions: Mail.Options = {
      from: 'no-reply', // replace with your email
      to: toEmail,
      cc: toEmail,
      subject: 'Verification Code',
      text: `Your verification code is: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);

    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
  return NextResponse.json('email sent', { status: 200 })
}
