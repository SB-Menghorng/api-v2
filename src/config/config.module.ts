// ================================================================>> Core Library
import { Global, Module }   from '@nestjs/common';
import { MulterModule }     from '@nestjs/platform-express';
// ================================================================>> Third Party Library
import * as multer          from 'multer';
import { SequelizeModule }  from '@nestjs/sequelize';
import sequelizeConfig from './sequelize.config';


@Global()
@Module({
    imports: [
        MulterModule.register({
            storage: multer.memoryStorage(),
        }),
        SequelizeModule.forRoot({
            ...sequelizeConfig
        })
    ]
})
export class ConfigModule {}
