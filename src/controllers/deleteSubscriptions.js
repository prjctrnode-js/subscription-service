const db = require('../db/models');

const deleteSubscriptions = async (id, userId) => {
  await db.Subscriptions.destroy({
    where: {
      id,
      userId
    }
  });
  return {
    status: 200,
    body: {
      success: true,
      message: 'subscription deleted successfully'
    }
  };
};

module.exports = deleteSubscriptions;
