
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {

  
  const user_id = await request.json()

  // Configura il trasportatore SMTP per l'invio dell'email
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PSW
    },
  });
  
  const mailOptions = {
    from: { name: 'Piqus.it', address: 'studiopiqus@gmail.com'},
    to: ['garofalo.digital@gmail.com'],
    subject: `Piqus - Nuovo task inserito`,
    html: `Nuovo task inserito. check url: <a href="https://piqus.it/profile/${user_id}" target="_blank">Ticket link</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({message: 'Email sent', status: '200'})
  }
  catch (error) {
    console.error("Errore: impossibile inviare l'email di conferma:", error);
    return NextResponse.json({message: 'Impossible to send email', status: '500'})    
  }
}
