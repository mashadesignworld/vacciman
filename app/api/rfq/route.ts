// app/api/rfq/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productName, productModel, productCategory, hospital, email, phone, quantity } = body;

    const recipientEmail = process.env.RFQ_RECIPIENT_EMAIL || 'njugunak.kevin@gmail.com';

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Vacciman RFQ Desk <onboarding@resend.dev>', // Default sender during testing
      to: [recipientEmail],
      subject: `[New RFQ] ${productName} - ${hospital}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
          <h2 style="color: #0f172a; margin-top: 0;">New Product RFQ Received</h2>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 8px 0; color: #0284c7;">${productName}</h3>
            <p style="margin: 0; font-size: 14px; color: #64748b;"><strong>Model:</strong> ${productModel}</p>
            <p style="margin: 4px 0 0 0; font-size: 14px; color: #64748b;"><strong>Category:</strong> ${productCategory}</p>
          </div>

          <h3 style="color: #334155;">Client Details</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Hospital/Institution:</td>
              <td style="padding: 8px 0; color: #0f172a;">${hospital}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Contact Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Quantity Requested:</td>
              <td style="padding: 8px 0; color: #0f172a;">${quantity} units</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend RFQ Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send RFQ' }, { status: 500 });
  }
}