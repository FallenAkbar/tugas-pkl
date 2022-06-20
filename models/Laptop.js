import { Sequelize, DataTypes } from 'sequelize';
import database from "../database.js";

const laptop = database.define("laptop",{
   kode : {
    type : DataTypes.STRING,
    allowNull : false
   },
   merk : {
    type : DataTypes.STRING,
    allowNull : false
   },
   kondisi : {
    type : DataTypes.INTEGER,
    allowNull : false
   },
   keterangan : {
    type : DataTypes.STRING,
    allowNull : false
   },
   peminjaman : {
    type : DataTypes.STRING,
    allowNull : false
   },
},{freezeTableName: true} )


export default laptop