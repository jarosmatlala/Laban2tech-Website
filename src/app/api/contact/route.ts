import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

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
      console.error('ERROR: RESEND_API_KEY is not defined in the server environment.');
      return NextResponse.json(
        { 
          error: 'Email service is not configured.', 
          details: 'The RESEND_API_KEY environment variable is missing on the server. Please copy .env.example to .env.local and add your key to run it locally.' 
        }, 
        { status: 500 }
      );
    }
    console.log('✓ RESEND_API_KEY found');
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await request.json();
    console.log('✓ Form data received:', body);
    
    const data = formSchema.parse(body);
    console.log('✓ Validation passed');

    console.log('Sending email to: matlalaj67@gmail.com');
    const result = await resend.emails.send({
      from: 'Laban2tech Contact <onboarding@resend.dev>',
      to: ['matlalaj67@gmail.com'],
      subject: `New Lead from Laban2tech: ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #2563eb 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">New Project Inquiry</h1>
            <p style="color: #bfdbfe; margin: 5px 0 0 0; font-size: 14px;">Submitted via Laban2tech Contact Form</p>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 30%;">Sender Name</td>
                <td style="padding: 8px 0; font-size: 15px; color: #0f172a; font-weight: 700;">${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</td>
                <td style="padding: 8px 0; font-size: 15px; color: #2563eb; font-weight: 600;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
              </tr>
            </table>
            
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 20px; border-radius: 8px;">
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Message Details</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${data.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">This email was automatically routed by Laban2tech Mailer.</p>
            </div>
          </div>
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
      { error: 'Failed to parse form inputs or connect to Resend API.', details: String(error) },
      { status: 500 }
    );
  }
}