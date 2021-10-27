const IOredis = require('ioredis');
const redis_connection = new IOredis();

const KEY = "my-key";
const VALUE = "my-value";

const set_sds = async (key = "", value = "") => {
  const request = await redis_connection.set(key, value);
  return request;
}

const get_sds = async (key = "") => {
  const request = await redis_connection.get(key);
  return request
}

Promise.all([set_sds, get_sds]).then(async results => {
  
  const OK = await results[0](KEY, VALUE);
  const value = await results[1](KEY);

  console.log(OK);
  console.log(value);
  process.exit(0);

});
