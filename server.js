const Koa = require('koa')
const bodyParser = require('koa-body');
const serve = require('koa-static');

const app = new Koa()

const router = require('./routes');

require('./db')

app.context.Models = Models;

app.use(bodyParser({
    formidable: {
        uploadDir: './uploads',
        keepExtensions: true
    },
    multipart: true,
    urlencoded: true
}));

app.use(serve(`${__dirname}/dist`));
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(4000, () => {
    console.log('listening on port 4000');
});
 