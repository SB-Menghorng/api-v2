// ================================================================>> Custom Library
import Road     from "../../models/Road/Road.model";
import RoadType from "../../models/Road/Type.model";

export class RoadSeeder {

    seed = async () => {

        try {
            await RoadType.bulkCreate(roadSeeder.types);
            console.log('\x1b[32m\nSeed roads_type inserted successfully.');
        } catch (error) {
            console.error('Error seeding roads_type:', error);
        }
        try {
            await Road.bulkCreate(roadSeeder.roads);
            console.log('\x1b[32mSeed road inserted successfully.');
        } catch (error) {
            console.error('Error seeding road:', error);
        }
    }
}

const roadSeeder = {
    types: [
        {
            kh_name: 'ផ្លូវជាតិ',
            en_name: 'National Road',
          },
          {
            kh_name: 'ផ្លូវខេត្ត',
            en_name: 'Provincial Road',
          },
    ],

    roads: [
        {
            abbre: '76',
            kh_name: 'ផ្លូវជាតិលេខ 76',
            en_name: 'National Road 76',
            start: 'ស្នួល (ផជ៧-គ.ម ២៥៤+៩៣០)',
            end: 'តាអង្គ(រតនៈគីរី)',
            type_id: 2,
          },
          {
            abbre: '21A',
            kh_name: 'ផ្លូវជាតិលេខ 21A',
            en_name: 'National Road 21A',
            start: 'គល់ស្ពានតាខ្មៅ(ផជ២-គម)',
            end: 'វត្តឈូងលាភ',
            type_id: 2,
          },
          {
            abbre: '48-5',
            kh_name: 'ផ្លូវជាតិលេខ 48-5',
            en_name: 'National Road 48-5',
            start: 'ចំណោតអូរម្កាក់(ផ.ជ48-គ.ម55+950)',
            end: 'គីរីសាគរ (កោះស្តេច)',
            type_id: 2,
          },
          {
            abbre: '23',
            kh_name: 'ផ្លូវជាតិលេខ 23',
            en_name: 'National Road 23',
            start: 'ដើមធ្លក (ផជ២-គម៥២+២០០)',
            end: 'ពាមរាំង (ផជ១៤-គម១៨+៩១០)',
            type_id: 2,
          },
          {
            abbre: '3',
            kh_name: 'ផ្លូវជាតិលេខ 3',
            en_name: 'National Road 3',
            start: 'វត្តភ្នំ (ភ្នំពេញ)',
            end: 'វាលរិញ',
            type_id: 1,
          },
          {
            abbre: '14',
            kh_name: 'ផ្លូវជាតិលេខ 14',
            en_name: 'National Road 14',
            start: 'អ្នកលឿង (ផជ១-គម៥៩+៣០០)',
            end: 'ក្អមសំណរ (ព្រំ.វៀតណាម)',
            type_id: 2,
          },
          {
            abbre: '2',
            kh_name: 'ផ្លូវជាតិលេខ 2',
            en_name: 'National Road 2',
            start: 'គល់ស្ពានមុន្នីវង្ស',
            end: 'ភ្នំដិន (ព្រំ.វៀតណាម)',
            type_id: 1,
          },
          {
            abbre: '48',
            kh_name: 'ផ្លូវជាតិលេខ 48',
            en_name: 'National Road 48',
            start: 'ចំការលួង (ផជ៤-គម១៤០+៨០០)',
            end: 'ចាំយាម(ព្រំ ថៃ)',
            type_id: 2,
          },
          {
            abbre: '33',
            kh_name: 'ផ្លូវជាតិលេខ 33',
            en_name: 'National Road 33',
            start: 'ក្រុងកំពត(ផជ៣-គម ១៤៨+១០០)',
            end: 'លក',
            type_id: 2,
          },
          {
            abbre: '9',
            kh_name: 'ផ្លូវជាតិលេខ 9',
            en_name: 'National Road 9',
            start: 'រាជានុកូល(ស្ទឹងត្រែង)',
            end: 'ប៉ាលហាល(ព្រះវិហារ)',
            type_id: 1,
          },
          {
            abbre: '64',
            kh_name: 'ផ្លូវជាតិលេខ 64',
            en_name: 'National Road 64',
            start: 'ដំដែក (ផជ៦)(លេខ២១៤ចាស់)',
            end: 'ថ្នល់ចែក(ផជ៦២)',
            type_id: 2,
          },
          {
            abbre: '59',
            kh_name: 'ផ្លូវជាតិលេខ 59',
            en_name: 'National Road 59',
            start: 'កូនដំរី(ផជ៥-គ.ម ៣៩២+៨២០)',
            end: 'ប៉ៃលិន(ផជ៥៧)',
            type_id: 2,
          },
          {
            abbre: '57',
            kh_name: 'ផ្លូវជាតិលេខ 57',
            en_name: 'National Road 57',
            start: '(បែកចាន) (ផជ៥-គ.ម០+០)',
            end: 'ផ្សារព្រំ (ព្រំប្រទល់ថៃ)',
            type_id: 2,
          },
          {
            abbre: '88',
            kh_name: 'ផ្លូវជាតិលេខ 88',
            en_name: 'National Road 88',
            start: 'ក្របៅ',
            end: 'ហ្មឺនជ័យ',
            type_id: 2,
          },
          {
            abbre: '58',
            kh_name: 'ផ្លូវជាតិលេខ 58',
            en_name: 'National Road 58',
            start: 'អូរជ្រៅ(ផជ៥-គ.ម ៤០៥+៩៩០)',
            end: 'ថ្មដូន(ព្រំ.កជ-ថៃ)',
            type_id: 2,
          },
          {
            abbre: '1',
            kh_name: 'ផ្លូវជាតិលេខ 1',
            en_name: 'National Road 1',
            start: 'វត្តភ្នំ (ភ្នំពេញ)',
            end: 'បាវិត (ព្រំ.វៀតណាម)',
            type_id: 1,
          },
          {
            abbre: '21',
            kh_name: 'ផ្លូវជាតិលេខ 21',
            en_name: 'National Road 21',
            start: 'តាខ្មៅ (ផជ២-គម ១១+០៩០)',
            end: 'ជ្រៃធំ',
            type_id: 2,
          },
          {
            abbre: '78',
            kh_name: 'ផ្លូវជាតិលេខ 78',
            en_name: 'National Road 78',
            start: 'អូរពងមាន់(ផជ៧-គ.ម ៤៥៩+៧០០)',
            end: 'អូរយ៉ាដាវ',
            type_id: 2,
          },
          {
            abbre: '68',
            kh_name: 'ផ្លូវជាតិលេខ 68',
            en_name: 'National Road 68',
            start: 'ក្រឡាញ់(ផជ៦-គ.ម ៣៦៥+៩២៦)',
            end: 'អូរស្មាច់(ព្រំ​.ថៃ)',
            type_id: 2,
          },
          {
            abbre: '56',
            kh_name: 'ផ្លូវជាតិលេខ 56',
            en_name: 'National Road 56',
            start: 'សេរីសោភ័ណ(ផជ៥-គ.ម ៣៥៩+៧៨០)',
            end: 'សំរោង',
            type_id: 2,
          },
          {
            abbre: '51',
            kh_name: 'ផ្លូវជាតិលេខ 51',
            en_name: 'National Road 51',
            start: 'វាំងចាស់ (ផជ៥-គម ៣៨+៥៦០)',
            end: 'ផ្សារថ្នល់ទទឹង (ផជ៤)',
            type_id: 2,
          },
          {
            abbre: '7',
            kh_name: 'ផ្លូវជាតិលេខ 7',
            en_name: 'National Road 7',
            start: 'ស្គន់(គ.ម ៧៥+០០០)',
            end: 'ត្រពាំងគ្រៀល',
            type_id: 1,
          },
          {
            abbre: '44',
            kh_name: 'ផ្លូវជាតិលេខ 44',
            en_name: 'National Road 44',
            start: 'ច្បារមន (ផជ៤-គម០៤៩+០០០)',
            end: 'ឧដុង្គ (ផជ៥-គម៣៨+៩០០)',
            type_id: 2,
          },
          {
            abbre: '46',
            kh_name: 'ផ្លូវជាតិលេខ 46',
            en_name: 'National Road 46',
            start: 'ត្រែងត្រយឹង (ផជ៤-គម ៨៧+៨៧៧)',
            end: 'ឧទ្យានគីរីរម្យ',
            type_id: 2,
          },
          {
            abbre: '73',
            kh_name: 'ផ្លូវជាតិលេខ 73',
            en_name: 'National Road 73',
            start: 'ប្រាធាតុ(ផជ៧-គ.ម ១០១+២៧០)',
            end: 'ដំបូន',
            type_id: 2,
          },
          {
            abbre: '75',
            kh_name: 'ផ្លូវជាតិលេខ 75',
            en_name: 'National Road 75',
            start: 'អន្លង់វិល (ផជ៧-គម២៦០+៣៣០)',
            end: 'កាចាម៉ា',
            type_id: 2,
          },
          {
            abbre: '10',
            kh_name: 'ផ្លូវជាតិលេខ 10',
            en_name: 'National Road 10',
            start: 'ពេជ្រចិន្តា (ផជ៤-គម១៦៣+៣៦០)',
            end: 'ភូមិរមៀត(កោះកុង)',
            type_id: 2,
          },
          {
            abbre: '4',
            kh_name: 'ផ្លូវជាតិលេខ 4',
            en_name: 'National Road 4',
            start: 'ចោមចៅ (ភ្នំពេញ)',
            end: 'ព្រៃនប់ (ព្រំ.ថៃ)',
            type_id: 1,
          },
          {
            abbre: '33A',
            kh_name: 'ផ្លូវជាតិលេខ 33A',
            en_name: 'National Road 33A',
            start: 'វត្តអណ្តូងរលក (កំពត)',
            end: 'ភូមិលក',
            type_id: 2,
          },
          {
            abbre: '11',
            kh_name: 'ផ្លូវជាតិលេខ 11',
            en_name: 'National Road 11',
            start: 'វត្តចំការស(ផជ១-គម៦២+៥០)',
            end: 'គកដំរី(ផជ៧)',
            type_id: 2,
          },
          {
            abbre: '27',
            kh_name: 'ផ្លូវជាតិលេខ 27',
            en_name: 'National Road 27',
            start: 'កំពង់ស្វាយ(ផជ១-គម១២៧+២៤៦)',
            end: 'តាម៉ៅ',
            type_id: 2,
          },
    ]
}
