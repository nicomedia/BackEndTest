module.exports = (sequelize, DataTypes) => {
    const Milk = sequelize.define('Milks', {
        CowID: {
            type: DataTypes.INTEGER,
          },
        Productivity: DataTypes.DOUBLE,
        Date: DataTypes.STRING

    })
    return Milk
}