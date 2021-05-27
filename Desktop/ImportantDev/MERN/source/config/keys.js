dbPassword =
  "mongodb+srv://admin:" +
  encodeURIComponent("admin") +
  "@cluster0.m5gxz.mongodb.net/loginapp?retryWrites=true";

module.exports = {
  mongoURI: dbPassword,
};
