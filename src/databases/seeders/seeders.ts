// ================================================================>> Third Party Library
import { Sequelize }     from "sequelize-typescript"
import * as readlineSync from 'readline-sync';
import "colors";

// ================================================================>> Costom Library
import sequelizeConfig              from "../../config/sequelize.config";
import { DataSetupSeeder }          from "./datasetup.seeder";
import { ProvinceSeeder }           from "./province.seeder";
import { UserSeeder }               from "./user.seeder";
import { DocumentSeeder }           from "./document.seeder";
import { RoadSeeder } from "./road.seeder";


async function seeds() {
    const sequelize = new Sequelize(sequelizeConfig);

    try {
        // Check if there are any existing tables in the database
        const tableNames = await sequelize.getQueryInterface().showAllTables();
        if (tableNames.length > 0) {
            // Ask the user for confirmation
            const message = 'This will drop and seed agian. Are you sure you want to proceed?'.yellow;
            const confirmation = readlineSync.keyInYNStrict(message);

            if (!confirmation) {
                console.log('\nSeeders has been cancelled.'.cyan);
                process.exit(0);
            }
        }

        // drop all existing UserGroup in the database and recreate it again.
        await sequelize.sync({ force: true });
        
        /** @seedDataSetup ======================================= */
        const datasetupSeeder = new DataSetupSeeder();
        await datasetupSeeder.seed()

        /** @seedProvince ======================================= */
        const provinceSeeder = new ProvinceSeeder();
        await provinceSeeder.seed()
        
        /** @seedUser ======================================= */
        const userSeeder = new UserSeeder();
        await userSeeder.seed();

        /** @seedRoad ======================================= */
        const roadSeeder = new RoadSeeder();
        await roadSeeder.seed();

        /** @seedDocument ======================================= */
        const documentSeeder = new DocumentSeeder();
        await documentSeeder.seed();


}     catch (error) {
    // Delete all if have a errors
    await sequelize.sync({ force: true });
    console.log('\x1b[31m%s\x1b[0m', error.message);
    process.exit(0);
}
}

seeds();