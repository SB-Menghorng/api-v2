// src/app/resources/cp/admin/dashboard/dashboard.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardController } from './dashboard/dashboard.controller';
import Document from 'src/models/Document/Document.model';
import User from '../../../../models/user/user.model';
import DocumentFiles from '../../../../models/document/documentFile.model';
import DocSubject from '../../../../models/document/Subject.model';
import DocumentType from '../../../../models/Document/Type.model';
import Department from '../../../../models/User/Department.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Department, 
      User, 
      Document, 
      DocumentFiles, 
      DocSubject, 
      DocumentType
    ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class AdminModule {}
