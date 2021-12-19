const Joi = require('joi');

const subscription = Joi.object({
  userId: Joi.number().integer().required(),
  subscriptionId: Joi.number().integer().required()
});
const getSubscription = Joi.object({
  userId: Joi.number().integer().required()
});

module.exports = {
  subscription,
  getSubscription
};
