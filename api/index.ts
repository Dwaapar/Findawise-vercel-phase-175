// Vercel serverless function entry point
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // For Vercel deployment, we need to handle the Express app as a serverless function
  try {
    // Set CORS headers for API requests
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    // Dynamic import of the built server application
    const serverApp = await import('../server/index.js').catch(err => {
      console.error('Failed to import server app:', err);
      return null;
    });
    
    // Get the Express app from the import
    const app = serverApp?.default || serverApp;
    
    // Check if it's an Express app with the listen method (not handle)
    if (app && (typeof app.listen === 'function' || typeof app === 'function')) {
      // For Express apps in serverless, we need to use it as middleware
      return new Promise((resolve) => {
        app(req, res, resolve);
      });
    }
    
    // Fallback API response for health checks
    res.status(200).json({ 
      message: 'Findawise Empire API',
      status: 'operational',
      timestamp: new Date().toISOString(),
      environment: 'vercel',
      version: '1.0.0'
    });
  } catch (error) {
    console.error('Error in Vercel handler:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Empire systems temporarily unavailable',
      details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
    });
  }
}