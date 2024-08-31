// src/app/resources/cp/admin/dashboard/dashboard.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from '../../../../../models/user/user.model';
import Document from '../../../../../models/Document/Document.model';
import DocumentFiles from '../../../../../models/document/documentFile.model'; // Updated path
import DocSubject from '../../../../../models/Document/Subject.model';
import { Op } from 'sequelize';
import Department from 'src/models/User/Department.model';

interface StMemoryItem {
  name: string;
  total_size_gb: string;
  color?: string;
}

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Department) private readonly departmentModel: typeof Department,
    @InjectModel(User) private readonly userModel: typeof User,
    @InjectModel(Document) private readonly documentModel: typeof Document,
    @InjectModel(DocumentFiles) private readonly documentFileModel: typeof DocumentFiles,
    @InjectModel(DocSubject) private readonly subjectModel: typeof DocSubject,
  ) {}

  async getDashboardData(from?: string, to?: string) {
    const startDate = from ? new Date(from) : null;
    const endDate = to ? new Date(to) : null;



    let departments = await Department.findAll({
      attributes: ['id', ['kh_name', 'name'], 'abbre'],
      include: [{ model: User, as: 'users', attributes: [] }],
      group: ['Department.id']
    });
    console.log(departments)

    const unapprovedUsers = await this.userModel.count({
      where: { is_approved: 0 }
    });

    const totalUser = await this.userModel.count({
      where: { is_approved: 1 }
    });

    const pinnedDocuments = await this.documentModel.count({
      where: { is_pinned: 1 }
    });

    const project = await this.subjectModel.findAll({
      attributes: ['id', ['kh_name', 'name'], 'abbre'],
      where: { type_id: 3 },
      include: [{ model: DocumentFiles, as: 'files', attributes: [] }],
      group: ['Subject.id']
    });

    const totalDocs = await this.documentModel.count();

    const stDocsDept = await this.departmentModel.findAll({
      attributes: [
        ['abbre', 'abbre'],
        [this.documentModel.sequelize.fn('count', this.documentModel.sequelize.col('document.id')), 'total_docs_created'],
        [this.documentModel.sequelize.literal(`(count(document.id) / ${totalDocs}) * 100`), 'percentage']
      ],
      include: [
        { model: User, as: 'user', attributes: [], include: [{ model: Document, as: 'documents', attributes: [] }] }
      ],
      group: ['Department.abbre'],
      raw: true
    });

    const stMemoryDocuments = await this.documentFileModel.findAll({
      attributes: [
        ['file_extension.name', 'name'],
        [this.documentModel.sequelize.literal('ROUND(SUM(size) / POWER(1024, 3), 5)'), 'total_size_gb']
      ],
      include: [{ association: 'FileExtension', attributes: [] }],
      group: ['file_extension.name'],
      raw: true
    });
    console.log(stMemoryDocuments);

    let stMemory: StMemoryItem[] = stMemoryDocuments.map((item) => ({
      name: item['name'], // Correct property name
      total_size_gb: item['total_size_gb'],
    }));

    const colors = ['#872657', '#FF8C00', '#22CE83', '#CC7A8B', '#D462FF'];
    const stMemoryWithColors = stMemory.map((item, index) => ({
      ...item,
      color: colors[index % colors.length]
    }));

    if (startDate && endDate) {
      departments = departments.filter(department => department.createdAt >= startDate && department.createdAt <= endDate);
    } else if (startDate) {
      departments = departments.filter(department => department.createdAt >= startDate);
    } else if (endDate) {
      departments = departments.filter(department => department.createdAt <= endDate);
    }

    const MAX_SIZE_MEMORY = 200;
    const totalUsedGB = stMemory.reduce((sum, item) => sum + parseFloat(item.total_size_gb), 0);
    const totalUsedPercentage = Math.min((totalUsedGB / MAX_SIZE_MEMORY) * 100, 100);

    const recentDocs = await this.documentModel.count({
      where: { createdAt: { [Op.gte]: new Date(new Date().setDate(new Date().getDate() - 1)) } }
    });

    return {
      st_of_user: {
        user: { total: totalUser, recently: unapprovedUsers },
        pinned_docs: pinnedDocuments,
        docs: { total: totalDocs, recently: recentDocs },
        total_dept: departments.length
      },
      st_docs_dept: stDocsDept,
      projects: project,
      st_memory: {
        data: stMemoryWithColors,
        total_used_gb: totalUsedGB.toFixed(2),
        total_used_percentage: totalUsedPercentage.toFixed(2),
        MAX_SIZE_MEMORY
      }
    };
  }
}
