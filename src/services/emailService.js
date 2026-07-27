let emailjs;

try {
  emailjs = require('@emailjs/browser');
  console.log('📧 EmailJS module loaded successfully');
} catch (error) {
  console.error('❌ Failed to load EmailJS module:', error);
}

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_0mod38i',
  TEMPLATE_ID_RESERVATION: 'template_24v6fhh',
  PUBLIC_KEY: 'GeZKrgZnIk0d1Mepf',
};

/**
 * Initialize EmailJS with your public key
 */
export const initEmailJS = () => {
  try {
    if (!emailjs) {
      throw new Error('EmailJS module not loaded');
    }
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize EmailJS:', error);
  }
};

/**
 * Send reservation form email
 * @param {Object} formData - Reservation form data
 * @returns {Promise} EmailJS promise
 */
export const sendReservationEmail = async (formData) => {
  try {
    console.log('📤 Sending email with data:', formData);

    if (!emailjs) {
      throw new Error('EmailJS module not loaded');
    }

    const templateParams = {
      to_email: 'admin@arponnar.co.uk',
      from_name: formData.name,
      phone: formData.phone,
      guests: formData.guests,
      date: formData.date,
      time: formData.time,
      message: formData.message || 'No special requests',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
      templateParams
    );

    console.log('✅ Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('❌ Failed to send reservation email:', error);
    console.error('Error details:', error.text || error.message);
    throw error;
  }
};

export default {
  initEmailJS,
  sendReservationEmail,
};
