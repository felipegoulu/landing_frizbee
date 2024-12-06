import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    // Actually use the email variable
    console.log(`Received waitlist signup for: ${email}`)
    
    // Here you would typically:
    // 1. Validate the email
    // 2. Store it in your database
    // 3. Or integrate with a service like Mailchimp
    
    return NextResponse.json({ 
      success: true, 
      message: `Successfully added ${email} to waitlist` 
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}