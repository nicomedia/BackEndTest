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
        Breed: DataTypes.STRING,
        Nick: DataTypes.STRING
    })
    return Cows
}