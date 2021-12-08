const updateOrCreate = async (model, where, newItem) => {
  const foundItem = await model.findOne({ where });
  if (!foundItem) {
    const item = await model.create(newItem);
    return { success: true, message: 'subscription create', data: item };
  }
  await model.update(newItem, { where });
  return {
    success: true,
    message: 'subscription update',
    data: await model.findOne({ where })
  };
};
module.exports = updateOrCreate;
