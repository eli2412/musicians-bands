const {db, DataTypes} = require('../db');

// TODO - define the Musician model
let Musician = db.define("Musician", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instrument: {
        type: DataTypes.STRING,
        allowNull: false
        }
});
module.exports = {
    Musician
};