// Just a test script to get used to parsing a pdf file with deno
// Run - deno run --unstable --allow-net --allow-read ./parse-pdf.ts 

import { PDFDocument } from 'https://cdn.pika.dev/pdf-lib@^1.6.0';

// import { readFileStr, readFileStrSync } from "https://deno.land/std/fs/mod.ts";

// Reading the file this way works, but the encoding is off somehow, PDFDocument.load can't find the pdf header
// const file = await readFileStr("./annual-report-pdfs/2016.pdf", { encoding: "utf-8" });

const url = 'https://digitalarchives.wa.gov/do/6F5FB22E627538839E4DBAC41BDDF87C.pdf';
const existingPdfBytes = await fetch(url).then((res) => res.text());
console.log(existingPdfBytes)
// Load an existing PDFDocument
// const pdfDoc = await PDFDocument.load(existingPdfBytes);

// Draw some text on the first page of the PDFDocument

// const pages = pdfDoc.getPages();
// console.log(pages[10]); 
// for(const item of pages[0].doc.context.indirectObjects){
  // console.log(item);
// }