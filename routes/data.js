var express = require('express');
var router = express.Router();

var data = [
  {
    "id": 1,
    "forename": "Petri",
    "surname": "Laitinen"
  },
  {
    "id": 1,
    "forename": "Jyri",
    "surname": "Kemppainen"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status(200).json(data);
});

module.exports = router;
