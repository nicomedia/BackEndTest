module.exports = (sequelize, DataTypes) => {
    const Coordinates = sequelize.define('Coordinates', {
        CowID: {
            type: DataTypes.INTEGER
          },
        Coordinate_Lat: DataTypes.DOUBLE,
        Coordinate_Long: DataTypes.DOUBLE
    })
    return Coordinates
}