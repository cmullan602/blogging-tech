const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

const withAuthApi = (req, res, next) => {
  if (!req.session.logged_in) {
    res.status(403).json({ message: "you are not authorized to do that"})
  } else {
    next();
  }
};

module.exports = {withAuth, withAuthApi};
