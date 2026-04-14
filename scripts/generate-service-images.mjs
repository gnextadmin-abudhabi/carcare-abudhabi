import https from 'https';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = './public/images/services';

const services = [
  {
    slug: 'car-accessories',
    prompt: 'professional auto parts and car accessories retail shop interior, premium seat covers steering wheel covers dash cameras floor mats parking sensors neatly displayed on shelves, modern bright showroom lighting, high-end retail store atmosphere, sharp focus, professional photography, 8k ultra realistic',
  },
  {
    slug: 'tyre-services',
    prompt: 'professional automotive technician fitting and balancing new car tyres on a lifted vehicle in a clean modern tyre workshop, tyre change equipment, wheel balancing machine in background, uniform-wearing mechanic, sharp focus, professional commercial photography, 8k ultra realistic',
  },
  {
    slug: 'car-ac-repair',
    prompt: 'professional auto mechanic repairing car air conditioning system, technician connecting AC refrigerant recharge equipment to car engine bay, modern workshop, clean garage environment, uniform-wearing technician, sharp focus, professional commercial photography, 8k ultra realistic',
  },
  {
    slug: 'mechanical-repairs',
    prompt: 'professional certified mechanic performing engine repair and maintenance on a modern car lifted on hydraulic ramp, clean organised workshop garage, professional tools laid out, uniform-wearing technician inspecting engine bay, sharp focus, professional commercial photography, 8k ultra realistic',
  },
  {
    slug: 'auto-electrical-works',
    prompt: 'professional auto electrician using OBD2 diagnostic scanner on a car electrical system, laptop showing diagnostic data, modern workshop garage, technician in uniform connecting diagnostic equipment, dashboard warning lights, sharp focus, professional commercial photography, 8k ultra realistic',
  },
  {
    slug: 'car-wash-detailing',
    prompt: 'professional car detailing service, luxury car being hand washed and polished in a premium detailing studio, foam wash, microfibre cloth buffing, gleaming paintwork, clean professional facility, sharp focus, professional commercial photography, 8k ultra realistic',
  },
  {
    slug: 'home-service',
    prompt: 'professional mobile car mechanic providing roadside or home car service, service technician in uniform working on a car parked outside a modern residential building, mobile service van in background with tools, sharp focus, professional commercial photography, 8k ultra realistic',
  },
  {
    slug: 'battery-replacement',
    prompt: 'professional mechanic installing a brand new car battery under the hood of a vehicle, gloved hands securing battery terminals, modern car engine bay, clean workshop or driveway setting, uniform-wearing technician, sharp focus, professional commercial photography, 8k ultra realistic',
  },
];

function download(url, dest, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 10) return reject(new Error('Too many redirects'));
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(dest);
        download(res.headers.location, dest, redirectCount + 1).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode === 429) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error('Rate limited (429)'));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
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
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1280&height=853&nologo=true&model=flux-realism&enhance=true`;

    let success = false;
    let attempts = 0;

    while (!success && attempts < 3) {
      try {
        console.log(`Generating: ${service.slug} (attempt ${attempts + 1})...`);
        await download(url, dest);
        const size = fs.statSync(dest).size;
        if (size < 10000) throw new Error(`File too small: ${size} bytes`);
        console.log(`  ✓ Saved (${Math.round(size/1024)}KB): ${dest}`);
        success = true;
      } catch (err) {
        attempts++;
        console.error(`  ✗ Error: ${err.message}`);
        if (attempts < 3) {
          console.log(`  Retrying in 15s...`);
          await new Promise((r) => setTimeout(r, 15000));
        }
      }
    }

    // Delay between images to avoid rate limiting
    await new Promise((r) => setTimeout(r, 5000));
  }

  console.log('\nDone!');
}

generateImages();
