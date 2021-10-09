module.exports = (sequelize, DataTypes) => {
    const Cows = sequelize.define('Cows', {
        CowID: {
            type: DataTypes.INTEGER,
            unique: true
          },
        KupeNo: DataTypes.DOUBLE,
        BirthDate: DataTypes.STRING,        
        FertDate: DataTypes.STRING,
        Status: DataTypes.STRING,
        Breed: DataTypes.STRING,
        Weight: DataTypes.DOUBLE
    })
    return Cows
}