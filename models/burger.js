var orm = require("../config/orm.js");

var burger = {
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },

  read: function(cb) {
    orm.read("burgers", function(res) {
      cb(res);
    });
  },
  
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;