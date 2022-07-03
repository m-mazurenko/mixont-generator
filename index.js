import { startCreating, buildSetup } from './src/main.js';

let response;
import * as fs from 'fs';

export async function handler (event, context) {
  try {
    buildSetup();
    await startCreating();
    console.log('IT WORKS!!!');
    fs.readdir('/tmp/', (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });
    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: 'hello world from lambda',
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response
}
