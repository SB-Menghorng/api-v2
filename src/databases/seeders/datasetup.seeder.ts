// ================================================================>> Third Party Library

// ================================================================>> Custom Library
import Department from '../../models/users/Department.model';
import UsersJob from '../../models/users/Job.model';
import UsersTitle from '../../models/users/Title.model';
import Position from '../../models/users/Position.model';

export class DataSetupSeeder {

    seed = async () => {
        await this.bulkInsert(Department, dataSetup.department, 'departments');
        await this.bulkInsert(UsersTitle, dataSetup.users_title, 'users_title');
        await this.bulkInsert(UsersJob, dataSetup.users_job, 'users_job');
        await this.bulkInsert(Position, dataSetup.position, 'position');
    }

    private async bulkInsert(model: any, data: any[], modelName: string) {
        try {
            await model.bulkCreate(data);
            console.log(`\x1b[32m\nSeed ${modelName} inserted successfully.`);
        } catch (error) {
            console.error(`Error seeding ${modelName}:`, error);
        }
    }
}

const dataSetup = {
    department: [
        {
            kh_name: 'អគ្គនាយកដ្ឋានបច្ចេកទេស',
            en_name: 'General Department of Techniques',
            abbre: 'GDT'
        },
        {
            kh_name: 'នាយកដ្ឋានផ្លូវថ្នល់',
            en_name: 'Department of Road Infrastructure',
            abbre: 'DRI',
        },
        {
            kh_name: 'នាយកដ្ឋានហេដ្ឋារចនាសម្ព័ន្ធសាធារណៈ',
            en_name: 'Department of Public Infrastructure',
            abbre: 'DPI',
        },
        {
            kh_name: 'នាយកដ្ឋានបច្ចេកទេសសាធារណការ និងដឹកជញ្ជូន',
            en_name: 'Department of Techniques for Public Works and Transport',
            abbre: 'DTPWT',
        },
    ],
    users_title: [
        {
            name: 'ឯកឧត្តមសាស្រ្ដាចារ្យ',
            abbre: 'ឯឧ.សច'
        },
        {
            name: 'ឯកឧត្ដម',
            abbre: 'ឯឧ'
        },
        {
            name: 'ឯកឧត្តមរដ្ឋមន្រ្ដី',
            abbre: 'ឯឧ.រម'
        },
        {
            name: 'លោក',
            abbre: 'លោក'
        },
        {
            name: 'កញ្ញា',
            abbre: 'កញ្ញា'
        },
        {
            name: 'អ្នកនាង',
            abbre: 'អ.ន'
        },
        {
            name: 'លោកស្រី',
            abbre: 'ល.ស'
        },
        {
            name: 'លោកជំទាវ',
            abbre: 'ល.ជ'
        },
    ],
    users_job: [
        {
            kh_name: 'គណនេយ្យករ',
            en_name: 'Accountant',
        },
        {
            kh_name: 'ស្ថាបត្យករ',
            en_name: 'Architect',
        },
        {
            kh_name: 'អ្នកជំនួញ',
            en_name: 'Businessman',
        },
        {
            kh_name: 'អ្នករចនា',
            en_name: 'Designer',
        },
        {
            kh_name: 'វេជ្ជបណ្ឌិត',
            en_name: 'Doctor',
        },
        {
            kh_name: 'ជាងអគ្គីសនី',
            en_name: 'Electrician',
        },
        {
            kh_name: 'វិស្វករ',
            en_name: 'Engineer',
        },
        {
            kh_name: 'កម្មករ រោងចក្រ',
            en_name: 'Factory worker',
        },
        {
            kh_name: 'កសិករ',
            en_name: 'Farmer',
        },
        {
            kh_name: 'មន្ត្រីរដ្ឋាភិបាល',
            en_name: 'Government official',
        },
        {
            kh_name: 'អ្នកកាសែត',
            en_name: 'Journalist',
        },
        {
            kh_name: 'មេធាវី',
            en_name: 'Lawyer',
        },
        {
            kh_name: 'សាស្ត្រាចារ្យ',
            en_name: 'Lecturer',
        },
        {
            kh_name: 'បណ្ណារក្ស',
            en_name: 'Librarian',
        },
        {
            kh_name: 'មេកានិក',
            en_name: 'Mechanic',
        },
        {
            kh_name: 'គិលានុបដ្ឋាយិកា',
            en_name: 'Nurse',
        },
        {
            kh_name: 'សិស្ស',
            en_name: 'Student',
        },
        {
            kh_name: 'គ្រូបង្រៀន',
            en_name: 'Teacher',
        },
        {
            kh_name: 'ផ្សេងទៀត',
            en_name: 'Other',
        },
    ],
    position: [
        {
            kh_name: 'អគ្គនាយក',
            en_name: 'Director General'
        },
        {
            kh_name: 'អគ្គនាយករង',
            en_name: 'Deputy Director General'
        },
        {
            kh_name: 'ប្រធាននាយដ្ឋាន',
            en_name: 'Director'
        },
        {
            kh_name: 'អនុប្រធាននាយកដ្ឋាន',
            en_name: 'Deputy Director'
        },
        {
            kh_name: 'ប្រធានការិយាល័យ',
            en_name: 'Chief'
        },
        {
            kh_name: 'អនុប្រធានការិយាល័យ',
            en_name: 'Vice Chief'
        },
        {
            kh_name: 'មន្ត្រីរដ្ឋបាល',
            en_name: 'Administration Official'
        },
        {
            kh_name: 'មន្ត្រីបច្ចេកទេស',
            en_name: 'Technical Official'
        },
        {
            kh_name: 'អ្នកបច្ចេកទេស',
            en_name: 'Technical'
        },
        {
            kh_name: 'ទីព្រឹក្សា',
            en_name: 'Advisor'
        },
    ]
}
