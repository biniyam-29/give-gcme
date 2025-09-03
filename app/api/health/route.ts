import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Basic health check - you can add more sophisticated checks here
    return NextResponse.json({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      service: 'give-gcme-api'
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ 
      status: 'unhealthy', 
      error: 'Service unavailable',
      timestamp: new Date().toISOString()
    }, { status: 503 })
  }
}
