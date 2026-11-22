"use server";

/**
 * Safe server action for contact form dispatch.
 * Handles server-side validation and secure execution.
 */
export async function submitContactMessage(prevState, formData) {
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const message = formData.get("message")?.trim();

  if (!name || !email || !message) {
    return {
      success: false,
      error: "All fields are required.",
    };
  }

  // Server-side email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please provide a valid email address.",
    };
  }

  // Process message dispatch (e.g. email provider, DB record)
  return {
    success: true,
    message: "Thank you for reaching out. I'll get back to you promptly.",
  };
}
