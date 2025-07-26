# Sorry Message with Real Email Sending

A beautiful, animated sorry message page with real email functionality using EmailJS.

## Features
- ✨ Beautiful animations (floating hearts, sparkles)
- 💝 Rotating love quotes
- 📧 Real email sending when buttons are clicked
- 💕 Heartfelt sorry message

## Setup Instructions for Real Email Sending

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (moneshwar2005@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** `{{subject}}`

**Content:**
```
From: {{from_name}}
To: {{to_email}}

{{message}}

---
Sent from your Sorry Message page
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update the Code
Replace the placeholders in `script.js`:

```javascript
// Line 3: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 115: Replace YOUR_SERVICE_ID
emailjs.send('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', templateParams)
```

### Step 6: Test
1. Open `index.html` in your browser
2. Click either button
3. Check your email (moneshwar2005@gmail.com) for the message

## File Structure
```
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization
- **Quotes**: Edit the `quotesArr` array in `script.js`
- **Email messages**: Edit `acceptQuotes` and `rejectQuotes` arrays
- **Colors**: Modify CSS variables in `styles.css`
- **Animations**: Adjust timing in `script.js`

## Troubleshooting
- **Email not sending**: Check your EmailJS configuration
- **Service ID error**: Verify your email service is connected
- **Template error**: Ensure template variables match the code

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Perfect for personal use!

## Support
If you need help setting up EmailJS, visit their [documentation](https://www.emailjs.com/docs/) or contact their support. 