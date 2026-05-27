import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 88,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1abc9c',
          }}
        >
          AS
        </div>
      ),
      {
        width: 32,
        height: 32,
      },
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
