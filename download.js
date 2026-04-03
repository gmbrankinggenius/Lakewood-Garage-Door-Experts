const https = require('https');
const fs = require('fs');

function download(url, dest) {
  https.get(url, (res) => {
    if (res.statusCode === 302 || res.statusCode === 303) {
      download(res.headers.location, dest);
    } else {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded to ' + dest);
      });
    }
  }).on('error', (err) => {
    console.error('Error downloading:', err.message);
  });
}

download('https://drive.google.com/uc?export=download&id=14PPT44sg7et9nIt8zKMLZbOPHBBb7-6O', 'public/hero-bg.jpg');
