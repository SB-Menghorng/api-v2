import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import Department from "../../../../../models/user/department.model";
import User from '../../../../../models/user/user.model';
import Document from '../../../../../models/Document/Document.model';
import DocumentFiles from '../../../../../models/document/documentFile.model'; // Updated path
import DocSubject from '../../../../../models/Document/Subject.model';
import DocumentType from '../../../../../models/Document/Type.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Department,
      User,
      Document,
      DocumentFiles,
      DocSubject,
      DocumentType,
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
