const fs = require('fs');
const https = require('https');

function request(url) {
  if (!url) return;
  return new Promise((resolve, reject) => {
    https
      .get(url, resp => {
        let data = '';
        // A chunk of data has been recieved.
        resp.on('data', chunk => {
          data += chunk;
        });
        resp.on('end', () => {
          resolve(JSON.parse(data));
        });
      })
      .on('error', err => reject(err.message));
  });
}

async function writeJSON({ filename, url, fmtData }) {
  const container = [];
  const data = await request(url);
  await fmtData(data, container);
  try {
    await fs.writeFileSync(
      filename,
      JSON.stringify({ data: container }, null, 2)
    );
    console.log(`\n[${filename}]: ✨Done!`);
  } catch (err) {
    console.log(`❗Error: ${err}`);
  }
}

module.exports = {
  request,
  writeJSON,
};
