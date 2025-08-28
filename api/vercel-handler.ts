// Enterprise-grade Vercel API handler for Findawise Empire
import type { VercelRequest, VercelResponse } from '@vercel/node';
import 'dotenv/config';

// Handle CORS for all requests
function setCorsHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, x-client-version');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Dynamic import of the Express app - ES module compatible
    const serverModule = await import('../server/index');
    const app = serverModule.default;
    
    if (!app) {
      throw new Error('Failed to load Express application');
    }

    // Create a promise to handle the Express app
    return new Promise<void>((resolve, reject) => {
      try {
        // Handle request with Express app
        app(req as any, res as any, () => {
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });

  } catch (error) {
    console.error('Vercel handler error:', error);
    
    // Fallback API response
    res.status(500).json({
      error: 'Empire systems temporarily unavailable',
      status: 'error',
      timestamp: new Date().toISOString(),
      message: process.env.NODE_ENV === 'development' 
        ? (error instanceof Error ? error.message : 'Unknown error')
        : 'Internal server error'
    });
  }
}