import fs from 'fs/promises';
import path from 'path';
import { readdir } from 'fs/promises';

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const copy = async () => {
  fs.access('src/fs/files')
    .then(() => {
      fs.mkdir(path.join(__dirname, 'files_copy'))
        .then(() => {
          fs.readdir(path.join(__dirname, 'files'), (err, files) => {
            if (err) console.log(err);
            else {
              files.forEach(file => {
                fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files_copy', file), (err) => {
                  if (err) {
                    console.log("Error Found:", err);
                  }
                })
              })
            }
          })          
        })
        .catch(() => {
          console.log(new Error('FS operation failed'))
        })
      })
      .catch(() => {
        console.log(new Error('FS operation failed'))
      })
    }
copy();