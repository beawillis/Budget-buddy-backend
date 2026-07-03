# Resend Email Setup Guide

BudgetBuddy now uses **Resend** for password reset emails. Resend is a modern, reliable email API that's easier to set up than Gmail SMTP.

## Setup Steps

### 1. Create a Resend Account
- Go to https://resend.com
- Sign up for a free account
- Verify your email address

### 2. Get Your API Key
- Log in to your Resend dashboard
- Go to **API Keys** section
- Create a new API key (keep it private!)
- Copy the API key

### 3. Configure Environment Variables
Add to your `.env` file:
```
RESEND_API_KEY=re_your_api_key_here
EMAIL_FROM=noreply@budgetbuddy.app
```

Replace `re_your_api_key_here` with your actual Resend API key.

### 4. Verify Domain (Production)
For production, you should verify your domain:
- In Resend dashboard, add your domain
- Add the DNS records provided by Resend
- This ensures emails don't go to spam

For development, the default domain works fine.

### 5. Test Password Reset
1. Start the backend: `npm run dev`
2. Go to signup page and create an account
3. Go to login page → "Forgot Password"
4. Enter your email
5. Check your email for the 6-digit reset code
6. Complete the password reset

## Key Benefits
✅ **Easy Setup** - No Gmail App Password needed  
✅ **Reliable** - Enterprise-grade email delivery  
✅ **Free** - 3,000 emails/month on free tier  
✅ **Better Formatting** - Professional HTML emails  
✅ **Spam Safety** - Built-in deliverability  

## Troubleshooting

### Email not received?
- Check spam/junk folder
- Verify RESEND_API_KEY is correct
- Check server logs for errors: `console.error("Email send failed:", ...)`

### Invalid API Key Error?
- Make sure API key starts with `re_`
- Double-check you copied the entire key
- Regenerate if needed in Resend dashboard

### For Production
- Update CLIENT_URL in .env to your production domain
- Verify your custom domain in Resend
- Add appropriate SPF/DKIM records for domain verification

## Documentation
- Resend Docs: https://resend.com/docs
- API Reference: https://resend.com/docs/api-reference
