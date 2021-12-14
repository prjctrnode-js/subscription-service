const db = require('../db/models');

const deleteSubscriptions = async (ctx) => {
  const { id } = ctx.params;
  const res = await db.Subscriptions.destroy({
    where: {
      id,
      userId: ctx.request.query.userId
    }
  });
  ctx.body = {
    success: true,
    message: `${
      res ? 'subscription deleted successfully' : 'subscription not find'
    }`
  };
};

module.exports = deleteSubscriptions;
