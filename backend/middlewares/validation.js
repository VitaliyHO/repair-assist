function validation(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json(error.message);
      next(error);
    }
    next();
  };
}

module.exports = { validation };
