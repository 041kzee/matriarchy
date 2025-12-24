import { NextResponse } from "next/server";

export async function POST(req) {
  const { question } = await req.json();

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: question }] }],
        }),
      }
    );

    const data = await geminiRes.json();

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Gemini could not generate a response.";

    return NextResponse.json({ answer });
  } catch (err) {
    return NextResponse.json({ answer: "Error fetching from Gemini AI." });
  }
}
