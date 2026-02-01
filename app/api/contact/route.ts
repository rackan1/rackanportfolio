import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    const result = await resend.emails.send({
      from: "Contact <contact@rackan.ca>",
      to: "rackan.abughazal10@gmail.com",
      replyTo: email,
      subject: subject || "New Contact Form Message",
      text: `
Name: ${name}
Email: ${email}

${message}
      `,
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

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}
