import { Resend } from "resend"

// Force Node runtime (important on Vercel)
export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY!)

    const result = await resend.emails.send({
      from: "Contact <contact@rackan.ca>",
      to: "rackan.abughazal10@gmail.com",
      replyTo: email,
      subject: subject || "New Contact Form Message",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    })

    if (result.error) {
      return Response.json(
        { success: false, error: result.error.message },
        { status: 500 }
      )
    }

    return Response.json({ success: true })
  } catch {
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}
