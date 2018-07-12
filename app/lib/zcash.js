import http from 'http';
import methods from './methods';

class Zcash {
  constructor(conf) {
    if (conf.username && conf.password) {
      this.auth = `Basic ${Buffer.from(`${conf.username}:${conf.password}`).toString('base64')}`;
    }

    this.host = conf.host || '127.0.0.1';
    this.port = conf.port || 8232;
  }

  static connect(rpcuser, rpcpassword) {
    // const lines = fs.readFileSync(
    //   os.homedir() + '/Library/Application\ Support/Zcash/zcash.conf',
    //   'utf8'
    // ).split('\n');

    // lines.pop();

    // const config = {};

    // lines.forEach((line) => {
    //  const split = line.split('=');
    //  const key = split.shift();
    //  const value = split.join('=');
    //  config[key] = value;
    // });

    return new Zcash({
      username: rpcuser,
      password: rpcpassword,
    });
  }
}

methods.forEach((method) => {
  Zcash.prototype[method] = () => new Promise((resolve, reject) => {
    const params = [...arguments];

    const postData = JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method,
      params,
    });

    const options = {
      hostname: this.host,
      port: this.port,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    if (this.auth) {
      options.headers.Authorization = this.auth;
    }

    const req = http.request(options, (res) => {
      let data = '';

      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk); // eslint-disable-line

      res.on('end', () => {
        let response;

        try {
          response = JSON.parse(data);
        } catch (error) {
          return reject(error);
        }

        if (response.error) {
          return reject(new Error(response.error));
        }

        resolve(response.result);
      });
    });

    req.on('error', reject);

    req.write(postData);
    req.end();
  });
});

module.exports = Zcash;
