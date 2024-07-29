// ================================================================>> Third Party Library
import * as bcrypt  from 'bcryptjs';

// ================================================================>> Custom Library
import UsersType    from "../../models/User/Type.model";
import User         from '../../models/User/User.model';

export class UserSeeder {

    seed = async () => {

        try {
            await UsersType.bulkCreate(userSeeder.types);
            console.log('\x1b[32m\nSeed users_type inserted successfully.');
        } catch (error) {
            console.error('Error seeding users_type:', error);
        }

        // Hash passwords before creating users
        for (const userData of userSeeder.users) {
            userData.password = await bcrypt.hash(userData.password, 10);
        }
        
        try {
            await User.bulkCreate(userSeeder.users);
            console.log('\x1b[32mSeed user inserted successfully.');
        } catch (error) {
            console.error('Error seeding users:', error);
        }
    }
}

const userSeeder = {
    types: [
        {
            kh_name: 'អភិបាល',
            en_name: 'ADMIN'
        },
        {
            kh_name: 'អ្នកបញ្ចូលទិន្ន័យ',
            en_name: 'Editor'
        },
        {
            kh_name: 'អ្នកប្រើប្រាស់ទូទៅ',
            en_name: 'Public User'
        }
    ],

    users: [
        {
            type_id: 1,
            department_id: 4,
            position_id: 8,
            is_approved: 1,
            job_id: null,
            email: 'soklay@gmail.com',
            phone: '016757337',
            password: '123456',
            is_active: 1,
            username: 'soklay',
            kh_name: 'គី សុខឡាយ',
            en_name: 'Ky SokLay',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 1,
            department_id: 4,
            position_id: 6,
            is_approved: 1,
            job_id: null,
            email: 'sineth@gmail.com',
            phone: '012207906',
            password: '123456',
            is_active: 1,
            username: 'sineth',
            kh_name: 'ខៀវ ស៊ីណែត',
            en_name: 'Kheav Sineth',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 2,
            department_id: 4,
            position_id: 5,
            is_approved: 1,
            job_id: null,
            email: 'chakrya@gmail.com',
            phone: '070916288',
            password: '123456',
            is_active: 1,
            username: 'chakrya',
            kh_name: 'ថេង សុចរិយា',
            en_name: 'Theng Sochariya',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 2,
            department_id: 4,
            position_id: 6,
            is_approved: 1,
            job_id: null,
            email: 'visoth@gmail.com',
            phone: '092770163',
            password: '123456',
            is_active: 1,
            username: 'visoth',
            kh_name: 'Koy Samrithvisoth',
            en_name: 'visoth',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 4,
            position_id: 4,
            is_approved: 1,
            job_id: null,
            email: 'sophal@gmail.com',
            phone: '011342522',
            password: '123456',
            is_active: 1,
            username: 'sophal',
            kh_name: 'អ៊ុត ស៊ាងសុផល',
            en_name: 'Ith Seang Sophal',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 4,
            position_id: 3,
            is_approved: 1,
            job_id: null,
            email: 'rathanak@gmail.com',
            phone: '017996678',
            password: '123456',
            is_active: 1,
            username: 'rathanak',
            kh_name: 'ហេង រតនៈ',
            en_name: 'Heng Rathanak',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 4,
            position_id: 5,
            is_approved: 1,
            job_id: null,
            email: 'mayura@gmail.com',
            phone: '011310851',
            password: '123456',
            is_active: 1,
            username: 'mayura',
            kh_name: 'ប៊ុន មយូរ៉ា',
            en_name: 'Bun Mayura',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 4,
            position_id: 6,
            is_approved: 1,
            job_id: null,
            email: 'kimsan@gmail.com',
            phone: '012978548',
            password: '123456',
            is_active: 1,
            username: 'kimsan',
            kh_name: 'ទូច គីមសាន',
            en_name: 'Touch Kimsan',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 4,
            position_id: 5,
            is_approved: 1,
            job_id: null,
            email: 'kolkatsay@gmail.com',
            phone: '070429248',
            password: '123456',
            is_active: 1,
            username: 'kolkatsay',
            kh_name: 'ម៉ម កុលកិត្យា',
            en_name: 'Mam Kolketya',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 4,
            position_id: 3,
            is_approved: 1,
            job_id: null,
            email: 'veasna@gmail.com',
            phone: '0964554569',
            password: '123456',
            is_active: 1,
            username: 'veasna',
            kh_name: 'យ៉ែម វាសនា',
            en_name: 'Yem Veasna',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 2,
            position_id: 4,
            is_approved: 1,
            job_id: null,
            email: 'dara@gmail.com',
            phone: '012959708',
            password: '123456',
            is_active: 1,
            username: 'dara',
            kh_name: 'យូ ដារ៉ា',
            en_name: 'Yudara',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 2,
            position_id: 4,
            is_approved: 1,
            job_id: null,
            email: 'vanna@gmail.com',
            phone: '012535359',
            password: '123456',
            is_active: 1,
            username: 'vanna',
            kh_name: 'ប្រាក់ វណ្ណា',
            en_name: 'Prak Vanna',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 2,
            position_id: 4,
            is_approved: 1,
            job_id: null,
            email: 'panhavuth@gmail.com',
            phone: '099888889',
            password: '123456',
            is_active: 1,
            username: 'panhavuth',
            kh_name: 'សិទ្ធី បញ្ញាវុធ',
            en_name: 'Sithy Panhavuth',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 2,
            position_id: 4,
            is_approved: 1,
            job_id: null,
            email: 'sreyneang@gmail.com',
            phone: '010459799',
            password: '123456',
            is_active: 1,
            username: 'sreyneang',
            kh_name: 'អ៊ុក ស្រីនាង',
            en_name: 'Ok Srey Neang',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            type_id: 3,
            department_id: 2,
            position_id: 4,
            is_approved: 1,
            job_id: null,
            email: 'sochea@gmail.com',
            phone: '012286306',
            password: '123456',
            is_active: 1,
            username: 'socheat',
            kh_name: 'កឹម សុជាតិ',
            en_name: 'Kem Socheat',
            avatar: 'static/tdms/user/avatar.png',
            created_at: new Date(),
            updated_at: new Date()
        }
    ]
}
