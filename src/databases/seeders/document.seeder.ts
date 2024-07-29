// ================================================================>> Custom Library
import DocumentType     from "../../models/Document/Type.model";
import Document         from "../../models/Document/Document.model";
import DocumentFiles    from "../../models/Document/DocumentFile.model";
import DocumentSave     from "../../models/Document/DocumentSave.model";

export class DocumentSeeder {


    seed = async () => {
        await this.bulkInsert(DocumentType, documentSeeder.types, 'doc_type');
        await this.bulkInsert(Document, documentSeeder.documents, 'document');
        await this.bulkInsert(DocumentSave, documentSeeder.saves, 'document_save');


        // Retrieve documents to use their IDs
        const documentsFromDb = await Document.findAll();

        // Loop through each document and create corresponding files
        for (const doc of documentsFromDb) {
            const files = [
                {
                    document_id: doc.id,
                    extension_id: 2,
                    subject_id: 8,
                    title: 'Contract between MPWT & PI',
                    size: 0,
                    uri: 'static/tdms/doc_type/contract.png',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    document_id: doc.id,
                    extension_id: 3,
                    subject_id: 7,
                    title: 'Cost Estimation 1',
                    size: 0,
                    uri: 'static/tdms/doc_type/policy.png',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    document_id: doc.id,
                    extension_id: 4,
                    subject_id: 7,
                    title: 'Cost Estimation 2',
                    size: 0,
                    uri: 'static/tdms/doc_type/policy.png',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    document_id: doc.id,
                    extension_id: 5,
                    subject_id: 6,
                    title: 'Drawing by GDT/MPwT',
                    size: 0,
                    uri: 'static/tdms/doc_type/project.png',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    document_id: doc.id,
                    extension_id: 6,
                    subject_id: 8,
                    title: 'Drawing 2 by DRI',
                    size: 0,
                    uri: 'static/tdms/doc_type/project.png',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    document_id: doc.id,
                    extension_id: 8,
                    subject_id: 5,
                    title: 'Progress Report',
                    size: 0,
                    uri: 'static/tdms/doc_type/standard.png',
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ];

        await this.bulkInsert(DocumentFiles, files, 'document_file');

        }
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

const documentSeeder ={
    types: [
        {
            id: 1,
            en_name: "Law",
            kh_name: "ច្បាប់",
            icon: 'static/tdms/doc_type/law.png'
        },
        {
            id: 2,
            en_name: "Technical",
            kh_name: "បច្ចេកទេស",
            icon: 'static/tdms/doc_type/technical.png'
        },
        {
            id: 3,
            en_name: "Project",
            kh_name: "គម្រោង",
            icon: 'static/tdms/doc_type/project.png'
        },
        {
            id: 4,
            en_name: "Training",
            kh_name: "បណ្តុះបណ្ដាល",
            icon: 'static/tdms/doc_type/training.png'
        },
        {
            id: 5,
            en_name: "Research Paper",
            kh_name: "ស្រាវជ្រាវ",
            icon: 'static/tdms/doc_type/paper.png'
        },
        {
            id: 6,
            en_name: "Thesis",
            kh_name: "និក្ខេមបទ",
            icon: 'static/tdms/doc_type/thesis.png'
        },
        {
            id: 7,
            en_name: "Report",
            kh_name: "របាយការណ៍",
            icon: 'static/tdms/doc_type/report.png'
        },
        ],
    documents: [
                {   id: 1,
                    type_id: 3,
                    fund_source_id: 3,
                    cover: 'static/tdms/project/r38-sr/cost1.jpg',
                    title: 'Road 38 SR',
                    abstract: '',
                    completed_year: '2021',
                    completed_month: '12',
                    completed_day: '01',
                    creator_id: 1,
                    modifier_id: 1,
                    most_views: 200,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {   
                    id: 2,
                    type_id: 3,
                    fund_source_id: 2,
                    cover: 'static/tdms/project/ppshv/cover.jpeg',
                    title: 'Expressway PP-SHV',
                    abstract: '',
                    completed_year: '2022',
                    completed_month: '12',
                    completed_day: '01',
                    creator_id: 2,
                    modifier_id: 1,
                    most_views: 100,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 3,
                    type_id: 3,
                    fund_source_id: 2,
                    cover: 'static/tdms/project/ppbvt/cover.jpeg',
                    title: 'Expressway PP-BV',
                    abstract: '',
                    completed_year: '2025',
                    completed_month: '12',
                    completed_day: '',
                    creator_id: 3,
                    modifier_id: 1,
                    most_views: 150,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 4,
                    type_id: 3,
                    fund_source_id: 3,
                    cover: 'static/tdms/project/rr3/cover.jpeg',
                    title: 'Road RR3',
                    abstract: '',
                    completed_year: '2023',
                    completed_month: '07',
                    completed_day: '31',
                    creator_id: 4,
                    modifier_id: 1,
                    most_views: 300,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 5,
                    type_id: 3,
                    fund_source_id: 2,
                    cover: 'static/tdms/project/pr3kc5/cover.jpg',
                    title: 'Road 3KC5',
                    abstract: '',
                    completed_year: '2021',
                    completed_month: '11',
                    completed_day: '11',
                    creator_id: 1,
                    modifier_id: 1,
                    most_views: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 6,
                    type_id: 3,
                    fund_source_id: 1,
                    cover: 'static/tdms/project/pr382/cover.jpg',
                    title: 'Road 382',
                    abstract: '',
                    completed_year: '1011',
                    completed_month: '02',
                    completed_day: '09',
                    creator_id: 2,
                    modifier_id: 1,
                    most_views: 20,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 7,
                    type_id: 3,
                    fund_source_id: 4,
                    cover: 'static/tdms/project/r70b/cover.jpg',
                    title: 'Road 70B',
                    abstract: '',
                    completed_year: '2015',
                    completed_month: '11',
                    completed_day: '20',
                    creator_id: 3,
                    modifier_id: 1,
                    most_views: 10,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 8,
                    type_id: 3,
                    fund_source_id: 5,
                    cover: 'static/tdms/project/r261/cover.jpg',
                    title: 'Road 261',
                    abstract: '',
                    completed_year: '2023',
                    completed_month: '08',
                    completed_day: '01',
                    creator_id: 4,
                    modifier_id: 1,
                    most_views: 15,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 9,
                    type_id: 3,
                    fund_source_id: 6,
                    cover: 'static/tdms/project/r275/cover.jpg',
                    title: 'Road 275',
                    abstract: '',
                    completed_year: '2015',
                    completed_month: '12',
                    completed_day: '30',
                    creator_id: 1,
                    modifier_id: 1,
                    most_views: 30,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 10,
                    type_id: 3,
                    fund_source_id: 9,
                    cover: 'static/tdms/project/nr70/cover.jpg',
                    title: 'Road 70',
                    abstract: '',
                    completed_year: '2019',
                    completed_month: '11',
                    completed_day: '01',
                    creator_id: 2,
                    modifier_id: 1,
                    most_views: 400,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
    saves: [
        {
            document_id: 1,
            creator_id: 1,
            is_save: true,
        },
        {
            document_id: 1,
            creator_id: 2,
            is_save: true,
        },
        {
            document_id: 2,
            creator_id: 1,
            is_save: true,
        },
        ]
};
