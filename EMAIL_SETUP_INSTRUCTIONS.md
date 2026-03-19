# Email Setup Instructions for Arponnar Website

All reservation forms on your website have been configured to send emails to **admin@arponnar.com** using EmailJS.

## Step 1: Install EmailJS Package

Run the following command in your project directory:

```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 3: Add Email Service

1. After logging in, click "Add New Service" on the dashboard
2. Choose your email provider (e.g., Gmail, Outlook, etc.)
3. Follow the instructions to connect your email account
4. **Copy the Service ID** - you'll need this later

## Step 4: Create Email Template

You need to create ONE email template for reservations:

### Reservation Form Template

1. Click "Create New Template" again
2. Name it "Reservation Request"
3. Use this template content:

**Subject:**
```
New Reservation Request from {{from_name}}
```

**Body:**
```
You have received a new reservation request:

Name: {{from_name}}
Phone: {{phone}}
Number of Guests: {{guests}}
Date: {{date}}
Time: {{time}}

Special Requests:
{{message}}

---
This reservation was submitted through the Arponnar booking form.
Please contact the customer to confirm their reservation.
```

4. Click "Save"
5. **Copy the Template ID**

## Step 5: Get Your Public Key

1. Click "Account" in the sidebar
2. Find your "Public Key" (also called API Key)
3. **Copy the Public Key**

## Step 6: Update Configuration File

Open the file `src/services/emailService.js` and replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',              // Replace with your Service ID from Step 3
  TEMPLATE_ID_RESERVATION: 'YOUR_RESERVATION_TEMPLATE_ID', // Replace with Reservation Template ID from Step 4
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',              // Replace with your Public Key from Step 5
};
```

### Example:
```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',
  TEMPLATE_ID_RESERVATION: 'template_rst456',
  PUBLIC_KEY: 'mJ8kL9pQ7rS5tU3v',
};
```

## Step 7: Test Your Forms

1. Start your development server:
   ```bash
   npm start
   ```

2. Test the reservation forms:
   - **Reservation Forms**: Visit any page with a reservation form and submit a test booking

3. Check your email inbox (admin@arponnar.com) for the test emails

## Forms That Have Been Updated

The following reservation forms now send emails to admin@arponnar.com:

1. ✅ Home Page Reservation (`/src/components/Menhome/Contact.js`)
2. ✅ Book a Table Page (`/src/components/Menhome/Book.js`)
3. ✅ Menu Reservation 1 (`/src/components/Allmenus/FirstMenu/Reservation.js`)
4. ✅ Menu Reservation 2 (`/src/components/Allmenus/Menmenu/Secreservation.js`)

Note: The contact form on the Contact page does NOT send emails via EmailJS.

## Features

- ✅ All reservation forms send emails to admin@arponnar.com
- ✅ Success/error messages displayed to users
- ✅ Forms reset after successful submission
- ✅ Includes all reservation data (name, phone, guests, date, time, special requests)
- ✅ Professional error handling with fallback phone number

## Troubleshooting

### Form not sending emails?

1. **Check browser console** for error messages
2. **Verify credentials** in `src/services/emailService.js` are correct
3. **Check EmailJS dashboard** to see if emails are being sent
4. **Verify email service** is properly connected in EmailJS dashboard

### Getting "Failed to send" errors?

1. Make sure you've run `npm install @emailjs/browser`
2. Check that your EmailJS Public Key is correct
3. Verify your email service is active in the EmailJS dashboard
4. Check if you've exceeded the free tier limit (200 emails/month)

## EmailJS Free Tier Limits

- **200 emails per month** (free)
- For more emails, you can upgrade to a paid plan

## Support

If you need help with EmailJS setup, visit their documentation:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS FAQ](https://www.emailjs.com/docs/faq/)

---

**Important:** After completing the setup, commit your changes but make sure to add `src/services/emailService.js` to `.gitignore` if you want to keep your API keys private (though EmailJS public keys are designed to be public).
