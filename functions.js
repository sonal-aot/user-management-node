const UserData = [];

const loadPage = (req, res) => {
  if (req.session.user) {
    res.render("index", { users: req.session.user });
  } else {
    res.render("signUp");
  }
};

const signUp = (req, res) => {
  const { username, password, email, mobilenumber } = req.body;

  // console.log(req.body);

  if (username && password && email && mobilenumber) {
    if (
      UserData.find((user) => user.username === username) ||
      UserData.find((user) => user.email === email)
    ) {
      res.send("User already exist");
    } else {
      const user = { username, password, email, mobilenumber };
      UserData.push(user);
      req.session.user = user;
      res.redirect("/");
    }
  }
  // console.log(req.session.user);
};

const loadLoginPage = (req, res) => {
  if (req.session.user) {
    res.render("index", { user: req.session.user });
  } else {
    res.render("login");
  }
};

const login = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (username && password) {
    const user = UserData.find((user) => user.username === username);
    if (user && user.password === password) {
      req.session.user = user;
      res.redirect("/");
    } else {
      res.send("Invalid username or password");
    }
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

const loadSignUpPage = (req, res) => {
  res.render("signup");
};

module.exports = {
  loadPage,
  signUp,
  login,
  logout,
  loadLoginPage,
  loadSignUpPage,
};
