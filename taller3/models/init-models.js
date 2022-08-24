var DataTypes = require("sequelize").DataTypes;
var _auto = require("./auto");

function initModels(sequelize) {
  var auto = _auto(sequelize, DataTypes);


  return {
    auto,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
