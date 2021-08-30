module.exports = (sequelize, DataTypes) => {
    const Accelerometer = sequelize.define('Accelerometers', {
        CowID: {
            type: DataTypes.INTEGER,
          },
          AccData_X: DataTypes.DOUBLE,
          AccData_Y: DataTypes.DOUBLE,
          AccData_Z: DataTypes.DOUBLE
    })
    return Accelerometer
}