// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jwt = require('jsonwebtoken');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { existsSync, readFileSync } = require('fs');

const options = {
  clientId: 'com.eachbase.armat.service',
  teamId: 'CNAUZUZ88T',
  keyId: 'US535A4CL8',
  redirectUri: 'https://armat.eachbase.com/api/auth/apple/redirected',
  privateKeyPath: './AuthKey.p8',
};

let authResponse = {
  state: 'NOT_PROVIDED',
  code: 'cc5af90010d1146f7a3a55489c8fbe22c.0.rrrsq.qQ7fkLXBjkM2BSjpl66iyw',
  user: '{"name":{"firstName":"Harutyun","lastName":"Minasyan"},"email":"m_harut@yahoo.com"}',
};

const code = 'c19c6b801f21840979ef4d196abf6ba3c.0.rrrsq._0ZKKXfKUPi1WE5pPaOv-g';
const ENDPOINT_URL = 'https://appleid.apple.com';

/** TESTING FUNCTIONS */

/** Creates the client signature */
const getClientSecret = (keyPath) => {
  const fullPath = path.join(__dirname, keyPath);
  if (!existsSync(fullPath)) {
    throw new Error('Private key file was not found at location ' + fullPath);
  }
  const key = readFileSync(fullPath);
  const timeNow = Math.floor(Date.now() / 1000);
  const claims = {
    iss: options.teamId,
    iat: timeNow,
    exp: timeNow + 15777000,
    aud: ENDPOINT_URL,
    sub: options.clientId,
  };
  const header = { alg: 'ES256', kid: this.keyId };
  return jwt.sign(claims, key, { algorithm: 'ES256', header });
};

const getAuthorizationToken = async (code) => {
  const url = new URL(ENDPOINT_URL);
  url.pathname = '/auth/token';
  const form = {
    client_id: options.clientId,
    client_secret: getClientSecret(options.privateKeyPath),
    code,
    grant_type: 'authorization_code',
    redirect_uri: options.redirectUri,
  };

  // const axiosOptions = {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //   form,
  //   url: url.toString(),
  // };

  console.log(form);
  // const body = await request({ url: url.toString(), method: 'POST', form });
  try {
    // const body = await axios(axiosOptions);
    const body = await axios.post(url.toString(), null, { params: form });
    console.log(body.data);
    return body.data;
  } catch (err) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  }
};

getAuthorizationToken(code);
