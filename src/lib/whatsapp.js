/**
 * WhatsApp deep-link helpers.
 *
 * Kept as pure functions so inquiry formatting and URL construction stay
 * testable and out of the component layer.
 */

/**
 * Format contact form values into a compact, readable inquiry message.
 * WhatsApp renders *text* as bold.
 *
 * @param {{ name: string, email: string, businessType: string, message: string }} inquiry
 * @returns {string}
 */
export function formatInquiryMessage({ name, email, businessType, message }) {
  return [
    "*New Project Inquiry*",
    "",
    `*Name:* ${name.trim()}`,
    `*Email:* ${email.trim()}`,
    `*Project Type:* ${(businessType || "").trim() || "Not specified"}`,
    "",
    "*Message:*",
    message.trim(),
  ].join("\n");
}

/**
 * Build a wa.me deep link with a prefilled chat message.
 *
 * @param {string} phoneNumber Digits-only WhatsApp number, country code included.
 * @param {string} message Text to prefill in the chat composer.
 * @returns {string}
 */
export function buildWhatsAppUrl(phoneNumber, message) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
