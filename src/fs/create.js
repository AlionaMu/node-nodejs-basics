import fs from 'fs/promises';
import path from 'path';

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = async () => {
     fs.access('src/fs/files/fresh.txt')
      .then(() => console.log(new Error('FS operation failed')))
      .catch(() => {
        fs.writeFile(path.join(__dirname, 'files/fresh.txt'),'I am fresh and young')
      })  
};

create();
