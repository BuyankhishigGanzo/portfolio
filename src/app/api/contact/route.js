import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/siteContent';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, type, budget, message } = body || {};

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      siteConfig.web3FormsAccessKey;

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          fallbackMailto: true,
          message: 'No Web3Forms access key configured. Falling back to email client.',
        },
        { status: 200 }
      );
    }

    const payload = {
      access_key: accessKey,
      subject: `Шинэ төслийн хүсэлт: ${name} (${type || 'Үйлчилгээ'})`,
      from_name: `${name} (Nova Hex Website)`,
      name,
      phone,
      service: type || '—',
      budget: budget || '—',
      message: message || '—',
      botcheck: '',
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) NovaHex/1.0',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    } else {
      return NextResponse.json(
        { success: false, message: result.message || 'Failed to submit inquiry.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error.' },
      { status: 500 }
    );
  }
}
