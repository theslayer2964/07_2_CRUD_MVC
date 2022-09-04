const lowdb = require("lowdb"); // parse body-parse
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
db = lowdb(adapter);
// khai bao database
db.defaults({ users: [], sessions: [], transfers: [] }).write();

module.exports = db;
