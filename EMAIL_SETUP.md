# Email Setup Guide

All inquiry forms on the website are configured to send emails to **lifesportsenquiry@gmail.com**.

## Setup Instructions

### Option 1: Using EmailJS (Recommended - Automatic Email Sending)

1. **Sign up for EmailJS** (Free tier available)
   - Go to https://www.emailjs.com/
   - Create a free account

2. **Add Email Service**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose Gmail (or your preferred email provider)
   - Connect your email account (lifesportsenquiry@gmail.com)
   - Note your **Service ID**

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template structure:
     ```
     Subject: {{subject}}
     
     From: {{from_name}} ({{from_email}})
     Phone: {{phone}}
     Studio: {{studio}}
     Activity: {{activity}}
     Coupon Code: {{coupon_code}}
     
     Message:
     {{message}}
     ```
   - Set "To Email" to: `lifesportsenquiry@gmail.com`
   - Note your **Template ID**

4. **Get Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Add Environment Variables**
   - Create a `.env.local` file in the root directory
   - Add these variables:
     ```
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
     ```

6. **Restart your development server**
   ```bash
   npm run dev
   ```

### Option 2: Using Mailto (Fallback - Opens Email Client)

If EmailJS is not configured, the forms will automatically fall back to opening the user's email client with a pre-filled email to `lifesportsenquiry@gmail.com`.

## Forms Configured

The following forms are set up to send emails:

1. **Contact Page** (`/contact`)
   - Activity enrollment form
   - Sends to: lifesportsenquiry@gmail.com

2. **Rent a Studio Page** (`/rent-a-studio`)
   - Studio rental inquiry form
   - Sends to: lifesportsenquiry@gmail.com

## Testing

1. Fill out any form on the website
2. Submit the form
3. Check your email inbox at lifesportsenquiry@gmail.com
4. You should receive the inquiry email

## Troubleshooting

- If emails aren't sending, check your EmailJS dashboard for errors
- Make sure all environment variables are set correctly
- Check browser console for any error messages
- The fallback mailto option will always work as a backup

