module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "127.0.0.1",
               port: 8546,
               network_id: "*" // Match any network id
          }
     }
};
