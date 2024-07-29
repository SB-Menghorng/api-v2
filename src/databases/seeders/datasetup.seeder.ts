// ================================================================>> Custom Library
import Department           from '../../models/User/Department.model';
import UsersJob             from '../../models/User/Job.model';
import UsersTitle           from '../../models/User/Title.model';
import Position             from '../../models/User/Position.model';
import FileExtension        from '../../models/Document/DocumentFileExtension.model';
import FundSource           from '../../models/Document/FundSource.model';
import DocSubject           from '../../models/Document/Subject.model';
export class DataSetupSeeder {

    seed = async () => {
        await this.bulkInsert(Department, dataSetup.department, 'departments');
        await this.bulkInsert(UsersTitle, dataSetup.users_title, 'users_title');
        await this.bulkInsert(UsersJob, dataSetup.users_job, 'users_job');
        await this.bulkInsert(Position, dataSetup.position, 'position');
        await this.bulkInsert(FileExtension, dataSetup.file_extension, 'file_extension');
        await this.bulkInsert(FundSource, dataSetup.fund_source, 'fund_source');
        await this.bulkInsert(DocSubject, dataSetup.doc_subject, 'doc_subject');


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
    ],
    file_extension: [
        { name: 'PDF', icon: 'static/tdms/file_extension/psd.png' },
        { name: 'JPG', icon: 'static/tdms/file_extension/jpg.png' },
        { name: 'PNG', icon: 'static/tdms/file_extension/png.png' },
        { name: 'DOC', icon: 'static/tdms/file_extension/doc.png' },
        { name: 'XLS', icon: 'static/tdms/file_extension/xls.png' },
        { name: 'PTT', icon: 'static/tdms/file_extension/ptt.png' },
        { name: 'ZIP', icon: 'static/tdms/file_extension/zip.png' },
        { name: 'AI', icon: 'static/tdms/file_extension/ai.png' },
    ], 
    fund_source: [
        {
            id: 1,
            abbre: "ABD",
            en_name: "Asian Development Bank",
            kh_name: "ធនាគារអភិវឌ្ឃន៍អាស៊ី",
            logo: 'static/tdms/fund_source/ABD.png'
        },
        {
            id: 2,
            abbre: "CHA",
            en_name: "China",
            kh_name: "ចិន",
            logo: "static/tdms/fund_source/CHA.png"
        },
        {
            id: 3,
            abbre: "RGC",
            en_name: "Royal Government of Cambodia",
            kh_name: "រាជរដ្ឋាភិបាលកម្ពុជា",
            logo: "static/tdms/fund_source/RGC.png"
        },
        {
            id: 4,
            abbre: "JPN",
            en_name: "Japan",
            kh_name: "ជប៉ុន",
            logo: "static/tdms/fund_source/JPN.png"
        },
        {
            id: 5,
            abbre: "KRA",
            en_name: "Korea",
            kh_name: "កូរ៉ែ",
            logo: "static/tdms/fund_source/KRA.png"
        },
        {
            id: 6,
            abbre: "THA",
            en_name: "Thailand",
            kh_name: "ថៃ",
            logo: "static/tdms/fund_source/THA.png"
        },
        {
            id: 7,
            abbre: "USA",
            en_name: "United States of America",
            kh_name: "សហរដ្ឋអាមេរិកវៀតណាម",
            logo: "static/tdms/fund_source/USA.png"
        },
        {
            id: 8,
            abbre: "VN",
            en_name: "Vietnam",
            kh_name: "វៀតណាម",
            logo: "static/tdms/fund_source/VN.png"
        },
        {
            id: 9,
            abbre: "Others",
            en_name: "Others",
            kh_name: "ផ្សេងៗ",
            logo: "static/tdms/fund_source/Others.png"
        },
    ],
    doc_subject: [
        {
            id: 1,
            type_id: 1,
            en_name:"Royal Decree",
            kh_name: "រាជក្រឹត្យ",
            abbre: "RD",
            icon: ""
        },
        {
            id: 2,
            type_id: 1,
            en_name:"Sub-Decree",
            kh_name: "អនុក្រឹត្យ",
            abbre: "SD",
            icon: ""
        },
        {
            id: 3,
            type_id: 1,
            en_name:"Decision",
            kh_name: "សេចក្ដីសម្រេច",
            abbre: "DC",
            icon: ""
        },
        {
            id: 4,
            type_id: 1,
            en_name:"Announcement",
            kh_name: "ប្រកាស",
            abbre: "AN",
            icon: ""
        },
        {
            id: 5,
            type_id: 1,
            en_name:"Regulation",
            kh_name: "បទដ្ដានគតិយុត្តិ",
            abbre: "RG",
            icon: ""
        },
        {
            id: 6,
            type_id: 2,
            en_name:"Specification Standard",
            kh_name: "បទដ្ឋានបច្ចេកទេស",
            abbre: "RD",
            icon: ""
        },
        {
            id: 7,
            type_id: 2,
            en_name:"GuideLine",
            kh_name: "សេចក្ដីណែនាំ",
            abbre: "GL",
            icon: ""
        },
        {
            id: 8,
            type_id: 3,
            en_name:"BOQ",
            kh_name: "BOQ",
            abbre: "BOQ",
            icon: ""
        },
    ]
    
}
