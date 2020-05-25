// "Simpler" implementation to read a pdf, not sure what I am missing on reading a pdf in deno

const PdfReader = require('pdfreader').PdfReader;
const fs = require("fs");

function callback(err){
    console.log(err)
}

const filePath = './annual-report-pdfs/2016.pdf'

fs.readFile(filePath, (err, pdfBuffer) => {
  // pdfBuffer contains the file content
  new PdfReader().parseBuffer(pdfBuffer, function(err, item) {
    if (err) callback(err);
    else if (!item) callback();
    else if (item.text) console.log(item.text);
  });
});