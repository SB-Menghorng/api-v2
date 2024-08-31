// ================================================================>> Core Library
import { Dialect }          from 'sequelize';
import { SequelizeOptions } from 'sequelize-typescript';

// ================================================================>> Third Party Library
import * as dotenv          from 'dotenv';


dotenv.config();

/** @MySql and @Postgresql */
const sequelizeConfig: SequelizeOptions = {
    dialect: process.env.DB_CONNECTION as Dialect || 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306, // Default MySQL port if not specified
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    models: [__dirname + '/../models/**/*.model.{ts,js}'], // Process build and running it work with .js and local process like seeder it work with .ts
    logging: (msg) => console.log(`Sequelize: ${msg}`), // Enable logging
};

export default sequelizeConfig;
