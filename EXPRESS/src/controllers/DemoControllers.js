
exports.demo = (req, res) => {
  let userName = req.params.name;
  let userAge = req.params.age;
  res.status(200).json({
    name: userName,
    age: userAge,
  });
};


exports.demo1 = (req, res) => {
  let name = req.body["name"];
  let age = req.body["age"];
  let email = req.body["email"];
  res.status(200).json({
    name: name,
    age: age,
    email: email,
  });
};


exports.demo2 = (req, res) => {
  let token = req.headers['token'];
  res.status(200).json({
"tokens":token
  })
};
