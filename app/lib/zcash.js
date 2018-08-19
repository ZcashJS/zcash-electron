// import axios from 'axios';
// import methods from './methods';

// class Zcash {
//   constructor(conf) {
//     if (conf.rpcuser && conf.rpcpassword) {
//       this.auth = `Basic ${Buffer.from(`${conf.rpcuser}:${conf.rpcpassword}`).toString('base64')}`;
//     }

//     this.user = conf.rpcuser;
//     this.password = conf.rpcpassword;
//     this.host = conf.host || '127.0.0.1';
//     this.port = conf.port || 8232;
//   }

//   static connect() {
//     return new Zcash({
//       username: this.user,
//       password: this.password,
//       host: '127.0.0.1',
//       port: 8232,
//     });
//   }
// }

// methods.forEach((method) => {
//   Zcash.prototype[method] = () => new Promise((resolve, reject) => {
//     const params = [...arguments];
//     const postData = JSON.stringify({
//       jsonrpc: '2.0',
//       id: 1,
//       method,
//       params,
//     });

//     const defaultHeaders = {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Basic ${Buffer.from(`${'hrofu'}:${'testing123456'}`).toString('base64')}`,
//     };

//     const api = axios.create({
//       baseURL: 'http://localhost:8232',
//       headers: defaultHeaders,
//     });

//     return api.post('/', postData)
//       .then((data) => {
//         // console.log(data);
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// });

// module.exports = Zcash;
