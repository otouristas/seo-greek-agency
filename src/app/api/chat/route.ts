import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: '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'
})

async function getGroqChatCompletion(messages: any[]) {
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
    const formattedMessages = messages.map((msg: any) => ({
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
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
