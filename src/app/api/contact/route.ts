import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    console.log('=== EMAIL SENDING STARTED ===');
    
    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error('ERROR: RESEND_API_KEY not found!');
      return NextResponse.json({ error: 'API key missing' }, { status: 500 });
    }
    console.log('✓ API Key found');
    
    const body = await request.json();
    console.log('✓ Form data received:', body);
    
    const data = formSchema.parse(body);
    console.log('✓ Validation passed');

    console.log('Sending email to: matlalaj67@gmail.com');
    const result = await resend.emails.send({
      from: 'Laban2tech Contact <onboarding@resend.dev>',
      to: ['matlalaj67@gmail.com'],
      subject: `New Contact from Laban2tech: ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0070B3;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 15px; border-left: 4px solid #0070B3;">${data.message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from the Laban2tech website contact form.</p>
        </div>
      `,
    });

    console.log('Resend API Response:', JSON.stringify(result, null, 2));

    if (result.error) {
      console.error('❌ Resend returned error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      );
    }

    console.log('✅ SUCCESS! Email sent with ID:', result.data?.id);
    console.log('=== EMAIL SENDING COMPLETE ===');
    return NextResponse.json({ success: true, emailId: result.data?.id });
    
  } catch (error) {
    console.error('❌ CRITICAL ERROR:', error);
    return NextResponse.json(
      { error: 'Failed to send message', details: String(error) },
      { status: 500 }
    );
  }
}