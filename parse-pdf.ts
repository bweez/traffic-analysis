// Just a test script to get used to parsing a pdf file with deno

// To run this script with Deno:
//   deno run --allow-write --allow-net https://gist.githubusercontent.com/Hopding/2d25620f0fac5cf141123129cbf0a3d8/raw/pdf-lib-deno-modify-script.ts

import { PDFDocument, rgb, degrees } from 'https://cdn.pika.dev/pdf-lib@^1.6.0';
// import { readFileStr, readFileStrSync } from "https://deno.land/std/fs/mod.ts";

// const file = await readFileStr("./annual-report-pdfs/2016.pdf", { encoding: "utf-8" });
const url = 'https://digitalarchives.wa.gov/do/6F5FB22E627538839E4DBAC41BDDF87C.pdf';
const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

// Load an existing PDFDocument
const pdfDoc = await PDFDocument.load(existingPdfBytes);

// Draw some text on the first page of the PDFDocument

const pages = pdfDoc.getPages();
console.log(pages[0].doc.context.indirectObjects);
for(const item of pages[0].doc.context.indirectObjects){
  console.log(item);
}