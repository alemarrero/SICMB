'use strict';
module.exports = (sequelize, DataTypes) => {
  const planes_contraloria_general = sequelize.define('planes_contraloria_general', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    periodo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    fichero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    enlace: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
  planes_contraloria_general.associate = function(models) {
    // associations can be defined here
  };
  return planes_contraloria_general;
};