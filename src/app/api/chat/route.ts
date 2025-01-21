import { NextResponse } from 'next/server'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

async function getMockChatResponse(messages: ChatMessage[]) {
  // Get the last user message
  const lastUserMessage = messages.filter(msg => msg.role === 'user').pop()
  
  // Simple responses based on keywords
  const responses = {
    default: " I am your SEO guide. How can I assist you on your journey to better rankings?",
    hello: "Greetings, seeker of digital wisdom! How may I illuminate your path today?",
    seo: "SEO is both an art and a science. Let me share some mystical insights with you!",
    keyword: "Ah, keywords - the sacred symbols of SEO. Choose them wisely, and they shall guide visitors to your digital realm.",
    content: "Content is the essence of your digital presence. Make it valuable, make it meaningful, make it magical!",
    ranking: "Rankings are like stars in the digital sky - with the right strategy, we can make yours shine brighter!"
  }

  // Find matching response or use default
  const message = lastUserMessage?.content.toLowerCase() || ''
  const response = Object.entries(responses).find(([key]) => 
    message.includes(key) && key !== 'default'
  )?.[1] || responses.default

  return {
    choices: [{
      message: {
        role: 'assistant',
        content: response
      }
    }]
  }
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // Format messages
    const formattedMessages: ChatMessage[] = messages.map((msg: { role: 'user' | 'assistant'; content: string }) => ({
      role: msg.role,
      content: msg.content
    }))

    const completion = await getMockChatResponse(formattedMessages)
    return NextResponse.json({ 
      message: completion.choices[0]?.message?.content || " I'm meditating on this. Please try again." 
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: " The mystical connection is temporarily disrupted. Please try again later." },
      { status: 500 }
    )
  }
}
