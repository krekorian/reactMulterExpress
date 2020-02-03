var express = require('express');
var router = express.Router();
const multer = require('multer');
var upload = multer({ dest: 'public/images/uploads' });
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/formsub', upload.single('meme'), (req, res, next) => {
  console.log(req.file)
  const newPath = `public/images/uploads/${req.file.originalname}`
  console.log(newPath)
  fs.rename(req.file.path, newPath, () => {
    res.json("file uploaded")
  });

})

module.exports = router;
