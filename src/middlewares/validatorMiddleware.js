const Joi = require('joi');
const logger = require('../helpers/logger');

const schema = Joi.object({
  userId: Joi.number().integer().required(),
  subscriptionId: Joi.number().integer().required(),
  id: Joi.number().integer().required()
});

const validatorMiddleware = async (ctx, next) => {
  try {
    await schema.validateAsync({
      subscriptionId: ctx.request.body.subscriptionId,
      id: ctx.request.query.id,
      userId: ctx.request.query.userId
    });
    await next();
  } catch (err) {
    logger.log({
      message: err,
      level: 'info'
    });
    ctx.throw(400, { error: err });
  }
};

module.exports = validatorMiddleware;
