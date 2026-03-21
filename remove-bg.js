const { Jimp } = require('jimp');

async function removePink() {
  console.log('Loading image...');
  const image = await Jimp.read('./public/quote.jpg');
  
  const data = image.bitmap.data;
  // Use first pixel as background reference
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  
  console.log('Detected background color RGB:', bgR, bgG, bgB);
  
  const tolerance = 50; 
  
  // Scan all pixels
  for (let i = 0; i < data.length; i += 4) {
    const rDist = Math.abs(data[i] - bgR);
    const gDist = Math.abs(data[i+1] - bgG);
    const bDist = Math.abs(data[i+2] - bgB);
    
    // if pixel is within tolerance of background color, make it transparent
    if (rDist < tolerance && gDist < tolerance && bDist < tolerance) {
      data[i + 3] = 0; // set alpha to 0
    }
  }

  // write output
  try {
     image.write('./public/quote-transparent.png');
  } catch(e) {
     await image.writeAsync('./public/quote-transparent.png');
  }
  console.log('Saved quote-transparent.png');
}

removePink().catch(console.error);
