import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
// You'll need to get these from https://www.emailjs.com/
// Add them to your .env.local file:
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
// NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''

// Initialize EmailJS
if (typeof window !== 'undefined' && PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY)
}

export interface EmailData {
  name: string
  email: string
  phone?: string
  mobile?: string
  message: string
  subject?: string
  studio?: string
  activity?: string
  couponCode?: string
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // If EmailJS is not configured, fall back to mailto
    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      console.warn('EmailJS not configured. Using mailto fallback.')
      return sendEmailViaMailto(data)
    }

    const templateParams = {
      to_email: 'lifesportsenquiry@gmail.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || data.mobile || 'Not provided',
      message: data.message,
      subject: data.subject || 'New Inquiry from The Life Sports Website',
      studio: data.studio || 'N/A',
      activity: data.activity || 'N/A',
      coupon_code: data.couponCode || 'N/A',
    }

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully!' }
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Email sending error:', error)
    // Fallback to mailto if EmailJS fails
    return sendEmailViaMailto(data)
  }
}

// Fallback function using mailto
const sendEmailViaMailto = (data: EmailData): { success: boolean; message: string } => {
  const subject = encodeURIComponent(data.subject || 'New Inquiry from The Life Sports Website')
  const body = encodeURIComponent(
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone || data.mobile || 'Not provided'}\n` +
    (data.studio ? `Studio: ${data.studio}\n` : '') +
    (data.activity ? `Activity: ${data.activity}\n` : '') +
    (data.couponCode ? `Coupon Code: ${data.couponCode}\n` : '') +
    `\nMessage:\n${data.message}`
  )

  const mailtoLink = `mailto:lifesportsenquiry@gmail.com?subject=${subject}&body=${body}`
  window.location.href = mailtoLink

  return { success: true, message: 'Opening email client...' }
}

