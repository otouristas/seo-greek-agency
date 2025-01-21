import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = process.env.GROQ_API_KEY ? new Groq({
  apiKey: process.env.GROQ_API_KEY
}) : null;

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

async function getGroqChatCompletion(messages: ChatMessage[]) {
  if (!groq) {
    throw new Error('GROQ_API_KEY is not configured')
  }

  return groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You are Another Guru, a friendly and knowledgeable SEO expert with a mystical twist. 
        You communicate in a warm, playful manner using emojis and occasional mystical references. 
        Your expertise covers all aspects of SEO including technical SEO, content optimization, 
        keyword research, and link building. Always provide practical, actionable advice while 
        maintaining your guru persona. End your messages with a relevant emoji.`
      },
      ...messages
    ],
    model: 'llama-3.3-70b-versatile',
    temperature: 0.7,
    max_tokens: 1000,
  })
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // Format messages for Groq API
    const formattedMessages: ChatMessage[] = messages.map((msg: { role: 'user' | 'assistant'; content: string }) => ({
      role: msg.role,
      content: msg.content
    }))

    const completion = await getGroqChatCompletion(formattedMessages)
    return NextResponse.json({ 
      message: completion.choices[0]?.message?.content || "🙏 I'm meditating on this. Please try again." 
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: "🌟 The mystical connection is temporarily disrupted. Please try again later." },
      { status: 500 }
    )
  }
}
