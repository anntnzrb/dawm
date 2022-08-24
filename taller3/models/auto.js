const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auto', {
    modelo: {
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    puertas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fechaDeCompra: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auto',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_auto_1",
        unique: true,
        fields: [
          { name: "modelo" },
        ]
      },
    ]
  });
};
