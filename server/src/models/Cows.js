module.exports = (sequelize, DataTypes) => {
    const Cows = sequelize.define('Cows', {
        CowID: {
            type: DataTypes.INTEGER,
            unique: true
          },
        Age: DataTypes.INTEGER,
        Height: DataTypes.DOUBLE,
        Weight: DataTypes.DOUBLE,
        Status: DataTypes.STRING,
        Productivity: DataTypes.DOUBLE,
        Coordinate_Lat: DataTypes.DOUBLE,
        Coordinate_Long: DataTypes.DOUBLE,
        AccData_X: DataTypes.DOUBLE,
        AccData_Y: DataTypes.DOUBLE,
        AccData_Z: DataTypes.DOUBLE
    })
    return Cows
}