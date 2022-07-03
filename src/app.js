let response;
// import { startCreating, buildSetup } from './main.js';
import * as fs from 'fs';

exports.lambdaHandler = async (event, context) => {
    try {
        // buildSetup();
        // startCreating();
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
};
