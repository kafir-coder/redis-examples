const IOredis = require('ioredis');
const redis_connection = new IOredis();

const KEY = "my-key";
const VALUE = "my-value";

const set_sds = async (key = "", value = "") => {
  const request = await redis_connection.set(key, value);
  return request;
}



set_sds()
  .then(result => {
    result === "OK" && console.log(result)
    process.exit(0);
  })
  .catch(reason => {
    console.log(reason)
    process.exit(0)
  });

