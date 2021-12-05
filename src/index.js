const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./middlewares/routes/router');
require('dotenv-defaults').config();
const errorHandler = require('./middlewares/errorHandler');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const logger = require('./helpers/logger');
const validatorMiddleware = require('./middlewares/validatorMiddleware');

const app = new Koa();

app.use(bodyparser());
app.use(loggerMiddleware);
app.use(errorHandler());
app.use(validatorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  logger.log({
    message: `Server running at port ${process.env.PORT}`,
    level: 'info',
  });
});
