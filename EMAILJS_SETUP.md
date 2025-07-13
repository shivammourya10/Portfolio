# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Connect Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (recommended: Gmail, Outlook, or Yahoo)
4. Follow the instructions to connect your email account
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}} - Portfolio Contact Form

Hello Shivam,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Test the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (starts with something like `user_abc123`)

## Step 5: Update Environment Variables

Update the `.env.local` file in your project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_ENABLE_EMAIL=true
```

## Step 6: Test the Contact Form

1. Restart your development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Check your email for the test message

## Troubleshooting

- **Template variables not working**: Make sure the variable names in your template match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- **No emails received**: Check your spam folder
- **Service blocked**: Some email providers may block automated emails. Try using a different email service or check your email provider's settings

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- EmailJS branding in emails
- Basic email services

For production use, consider upgrading to a paid plan for:
- More emails per month
- Remove EmailJS branding
- Priority support

## Alternative: Fallback Mode

If EmailJS is not set up, the form will automatically open the user's default email client with a pre-filled message. This ensures the contact form always works!
