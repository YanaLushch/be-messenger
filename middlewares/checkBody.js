const checkBody = (req, res, next) => {
  if (!req.body.text) {
    res.status(400).json({
        status: "fail",
        message: "Text is required"
    });
  } else {
    next();
  }
};

export default checkBody;
