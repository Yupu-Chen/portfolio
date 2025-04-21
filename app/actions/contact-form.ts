"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.gmail.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "Portfolio Contact Form <noreply@example.com>",
      to: process.env.EMAIL_TO || "your-email@example.com",
      replyTo: validatedData.email,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${validatedData.name}</p>
  <p><strong>Email:</strong> ${validatedData.email}</p>
  <p><strong>Subject:</strong> ${validatedData.subject}</p>
  <div style="margin-top: 20px;">
    <h3 style="color: #555;">Message:</h3>
    <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${validatedData.message}</p>
  </div>
</div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error. Please check your inputs.",
        errors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      }
    }

    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}
