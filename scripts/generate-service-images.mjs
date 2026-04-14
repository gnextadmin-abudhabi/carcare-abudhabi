import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = './public/images/services';

const services = [
  {
    slug: 'car-accessories',
    prompt: 'professional car accessories shop interior Abu Dhabi UAE, seat covers dashcam floor mats window tinting parking sensors displayed on shelves, modern auto parts showroom, warm lighting, photorealistic, high quality',
  },
  {
    slug: 'tyre-services',
    prompt: 'professional mechanic fitting and balancing car tyres in modern auto workshop garage Abu Dhabi UAE, tyre change wheel alignment, professional technician, photorealistic, high quality',
  },
  {
    slug: 'car-ac-repair',
    prompt: 'car air conditioning AC repair service Abu Dhabi UAE, mechanic fixing car AC system refrigerant refill compressor repair, professional auto workshop, photorealistic, high quality',
  },
  {
    slug: 'mechanical-repairs',
    prompt: 'certified car mechanic working on car engine mechanical repair Abu Dhabi UAE, oil change brake repair engine diagnostics, professional workshop tools, photorealistic, high quality',
  },
  {
    slug: 'auto-electrical-works',
    prompt: 'auto electrician using OBD diagnostic scanner on car electrical system Abu Dhabi UAE, ECU repair wiring fault diagnosis, modern workshop, photorealistic, high quality',
  },
  {
    slug: 'car-wash-detailing',
    prompt: 'professional car wash and detailing service Abu Dhabi UAE, shiny clean luxury car foam wash interior detailing ceramic coating, modern car wash facility, photorealistic, high quality',
  },
  {
    slug: 'home-service',
    prompt: 'mobile mechanic providing home car service at residential building Abu Dhabi UAE, service van parked outside apartment, technician working on car at customer location, photorealistic, high quality',
  },
  {
    slug: 'battery-replacement',
    prompt: 'mechanic installing replacing car battery Abu Dhabi UAE, hands fitting new car battery under hood, mobile battery delivery service, professional, photorealistic, high quality',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function generateImages() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const service of services) {
    const dest = path.join(OUTPUT_DIR, `${service.slug}.webp`);
    const encodedPrompt = encodeURIComponent(service.prompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=768&nologo=true&model=flux`;

    console.log(`Generating: ${service.slug}...`);
    try {
      await download(url, dest);
      console.log(`  Saved: ${dest}`);
    } catch (err) {
      console.error(`  Error: ${err.message}`);
    }

    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 2000));
  }

  console.log('\nDone! All service images generated.');
}

generateImages();
