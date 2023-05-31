const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;

  const totalRevenue = Number(numWeeks) * Number(weeklyRevenue);

  const isMillionDollarIdea = totalRevenue >= 1000000;

  if (!isMillionDollarIdea) {
    res.status(400).send();
  } else {
    next();
  }
};

module.exports = checkMillionDollarIdea;
