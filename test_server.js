const Koa = require('koa');
const koaStatic = require('koa-static');
const app = new Koa();
const port = 3033;

app.use(koaStatic('.'));
app.listen(port, function(){
  setTimeout(function(){
    console.log(`http://localhost:${port}/markup/dist/html/index.html`);
  }, 6000)
});
