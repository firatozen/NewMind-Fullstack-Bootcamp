// Import Koa and Koa Router
const Koa = require('koa');
const Router = require('koa-router');

// Create a new Koa application
const app = new Koa();
const router = new Router();

// Define routes
router.get('/', (ctx) => {
  ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
});

router.get('/hakkimda', (ctx) => {
  ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
});

router.get('/iletisim', (ctx) => {
  ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
});

// Handle 404 for unsupported routes
app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.body = '<h1>404 - Sayfa Bulunamadı</h1>';
  }
});

// Use the router middleware
app.use(router.routes()).use(router.allowedMethods());

// Set the port for the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
