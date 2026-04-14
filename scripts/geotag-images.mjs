import { exiftool } from 'exiftool-vendored';
import fs from 'fs';
import path from 'path';

// Al Sham Palace Auto Car Service coordinates
const LAT = 24.3338632;
const LNG = 54.5345258;

const images = [
  { src: '/Users/apple/Downloads/Projects - Client Details/Al Sham/tyre-services.webp', dest: 'public/images/services/tyre-services.webp' },
];

async function geotagImages() {
  for (const { src, dest } of images) {
    if (!fs.existsSync(src)) {
      console.error(`Source not found: ${src}`);
      continue;
    }

    // Copy to project
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${dest}`);

    // Write GPS metadata (use -m to ignore minor format warnings)
    await exiftool.write(dest, {
      GPSLatitude: LAT,
      GPSLatitudeRef: 'N',
      GPSLongitude: LNG,
      GPSLongitudeRef: 'E',
      GPSMapDatum: 'WGS-84',
      ImageDescription: 'Tyre service Abu Dhabi — Al Sham Palace Auto Car Service, Mohamed Bin Zayed City, UAE',
      Copyright: 'Al Sham Palace Auto Car Service Abu Dhabi',
    }, ['-overwrite_original', '-m']);

    console.log(`  ✓ Geo-tagged: lat ${LAT}, lng ${LNG}`);
  }

  await exiftool.end();
  console.log('\nDone!');
}

geotagImages().catch(console.error);
