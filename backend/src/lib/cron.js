import { CronJob } from 'cron'
import { error } from 'node:console';
import http from 'node:http'
import https from 'node:https'

const job = new CronJob('*/14****' , () => {
    const base = process.env.FRONTEND.URL;

    if (!base) return

    const url = new URL('ping', base).href;
    const client = url.startsWith('https:') ? https : http;

    client
        .get(url, (res) => {
            if (res.statusCode === 200) console.log('GET request sent');
            else console.log('GET request failed');
        })
        .on('error', (e) => console.error('Error while sending request', e));
})

export default job;