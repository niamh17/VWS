// Guard script: Ensures no React form code still uses deprecated data-netlify attributes
// (except inside the static detection file public/__forms.html) when building on Netlify.
// Run via npm prebuild (see package.json). Only active when NETLIFY === 'true'.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

if(process.env.NETLIFY !== 'true') {
  process.exit(0); // Not running on Netlify
}

const ROOT = process.cwd();
const IGNORE = new Set([
  join(ROOT, 'public', '__forms.html')
]);

const suspect = [];
const regex = /data-netlify|netlify-honeypot|netlify\s*=\s*"true"/i;

function walk(dir){
  for(const entry of readdirSync(dir)){
    const full = join(dir, entry);
    if(IGNORE.has(full)) continue;
    if(/node_modules|\.next|dist/.test(full)) continue;
    const st = statSync(full);
    if(st.isDirectory()) walk(full);
    else if(/\.(jsx?|tsx?)$/.test(entry)){
      const content = readFileSync(full, 'utf8');
      if(regex.test(content)) suspect.push(full);
    }
  }
}

walk(join(ROOT, 'app'));
walk(join(ROOT, 'components'));

if(suspect.length){
  console.error('\nNetlify Forms migration guard failed. The following files still contain data-netlify / netlify-honeypot attributes (remove them and rely on public/__forms.html):');
  for(const f of suspect) console.error(' -', f.replace(ROOT+"/", ''));
  console.error('\nDocs: https://opennext.js.org/netlify/forms');
  process.exit(1);
}

console.log('Netlify Forms guard passed: no stray data-netlify attributes found.');
