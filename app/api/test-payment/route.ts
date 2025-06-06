import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { message: 'Invalid amount provided' },
        { status: 400 }
      );
    }

    const apiKey = process.env.PAYMENT_GATEWAY_API_KEY;
    if (!apiKey) {
      console.error('Payment gateway API key is not configured');
      return NextResponse.json(
        { message: 'Payment gateway configuration error' },
        { status: 500 }
      );
    }

    // Using the correct endpoint for test payments
    const paymentGatewayUrl = 'http://localhost:8080/api/payment';

    console.log('Making request to payment gateway:', {
      url: paymentGatewayUrl,
      amount,
      hasApiKey: !!apiKey
    });

    const response = await fetch(paymentGatewayUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        amount,
        currency: 'USD',
        title: 'Test Payment', // Adding the required title field
        description: 'Test payment transaction',
        test: true, // Indicate this is a test transaction
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Payment gateway error:', {
        status: response.status,
        statusText: response.statusText,
        data
      });
      
      return NextResponse.json(
        { 
          message: 'Payment gateway error',
          error: data,
          details: {
            status: response.status,
            statusText: response.statusText
          }
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error processing test payment:', error);
    return NextResponse.json(
      { 
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 