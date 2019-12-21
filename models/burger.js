// Import the ORM to inserte functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {

      cb(res);
    });
  },

  insertOne: function (name, cb) {
    orm.insertOne("burgers", name, cb)

  },

  updateOne: function (id, cb) {
    orm.updateOne("burgers", id, cb);

  },

  deleteOne: function (id, cb, name) {
    orm.deleteOne("burgers", id, cb, name, function (res) {
      cb(res)
    });
  }
};
module.exports = burger;
