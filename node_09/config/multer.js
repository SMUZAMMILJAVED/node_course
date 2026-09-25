const crypto = require('crypto')
const multer = require('multer');
const path=require('path')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      if (err) return cb(err)
        const extension=path.extname(file.originalname)
      cb(null, file.fieldname + '-' + raw.toString('hex')+extension)
    })
  }
})

const upload = multer({ storage: storage })
module.exports=upload