// var Tesseract = require('tesseract.js')
// var filename = 'pic.png'

// Tesseract.recognize(filename)
//   .catch(err => console.error(err))
//   .then(function (result) {
//     console.log(result.text)
//     process.exit(0)
//   })

var Tesseract = require('tesseract.js')
var filename = 'pic.png'

const config = {
  lang: "eng", // default
  oem: 3,
  psm: 3,
}

async function main() {
  try {
    const text = await Tesseract.recognize(filename)
    console.log("Result:", text)
    // console.log(JSON.stringify(text))
  } catch (error) {
    console.log(error.message)
  }
}

main()