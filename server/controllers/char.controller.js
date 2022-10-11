const Char = require("../models/char.model");

//Creating a new char
module.exports.createChar = (req, res) => {
  Char.create(req.body)
    .then((newChar) => {
      res.json({ newChar });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting all chars
module.exports.getAllChars = (req, res) => {
  Char.find()
    .then((allChars) => {
      res.json(allChars);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Getting one char
module.exports.getOneChar = (req, res) => {
  Char.findOne({ _id: req.params.id })
    .then((queriedChar) => {
      res.json(queriedChar);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Updating an char
module.exports.updateChar = (req, res) => {
  Char.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedChar) => {
      res.json({ updatedChar });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}
//Deleting an char
module.exports.deleteChar = (req, res) => {
  Char.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
}