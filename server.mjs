import { createServer } from 'node:http';
import { createServerAdapter } from '@whatwg-node/server';
import sirv from 'sirv';
import app from './dist/server/server.js';

const port = process.env.PORT || 3000;

// Serve static assets from dist/client
const assets = sirv('dist/client', {
  maxAge: 31536000, // 1Y
  immutable: true
});

// The TanStack Start SSR handler (adapted for Node HTTP)
const ssrHandler = createServerAdapter(app.fetch);

const server = createServer((req, res) => {
  const host = req.headers.host || '';
  
  // 301 Redirect for the secondary domain
  if (host.includes('2s1mrentcar.com')) {
    res.writeHead(301, {
      Location: `https://tetouanrentcar.ma${req.url}`
    });
    res.end();
    return;
  }

  // First try serving static files
  assets(req, res, () => {
    // If not found, fallback to SSR handler
    ssrHandler(req, res);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
