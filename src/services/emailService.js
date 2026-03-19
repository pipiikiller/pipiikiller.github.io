import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/
const EMAILJS_CONFIG = {
  SERVICE_ID: 'template_pztyyuu', // EmailJS service ID
  TEMPLATE_ID_RESERVATION: 'template_pztyyuu', // Template for reservation form
  PUBLIC_KEY: '8VC_wwudiMNF5hSnw', // EmailJS public key
};

/**
 * Initialize EmailJS with your public key
 */
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

/**
 * Send reservation form email
 * @param {Object} formData - Reservation form data
 * @returns {Promise} EmailJS promise
 */
export const sendReservationEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_RESERVATION,
      {
        to_email: 'admin@arponnar.com',
        from_name: formData.name,
        phone: formData.phone,
        guests: formData.guests,
        date: formData.date,
        time: formData.time,
        message: formData.message || 'No special requests',
      }
    );
    return response;
  } catch (error) {
    console.error('Failed to send reservation email:', error);
    throw error;
  }
};

export default {
  initEmailJS,
  sendReservationEmail,
};
