import { NextResponse } from 'next/server'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

async function getMockChatResponse(message: string): Promise<string> {
  // Simple mock responses based on keywords
  if (message.toLowerCase().includes('seo')) {
    return "I can help you with SEO! Our services include keyword research, on-page optimization, technical SEO, and content strategy. What specific aspect would you like to know more about?"
  } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
    return "Our pricing varies based on your specific needs. We offer customized packages starting from $500/month. Would you like to schedule a consultation to discuss your requirements?"
  } else if (message.toLowerCase().includes('audit')) {
    return "We offer comprehensive SEO audits that analyze your website's technical health, content quality, and competitive positioning. Would you like to learn more about our audit process?"
  } else {
    return "Thank you for your message! I'm here to help with any questions about our SEO services. Could you please provide more details about what you're looking for?"
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { messages } = body

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      )
    }

    const lastMessage = messages[messages.length - 1]
    if (!lastMessage || !lastMessage.content) {
      return NextResponse.json(
        { error: 'No message content provided' },
        { status: 400 }
      )
    }

    const response = await getMockChatResponse(lastMessage.content)

    return NextResponse.json({
      response: {
        role: 'assistant',
        content: response
      }
    })

  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
