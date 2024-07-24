// ================================================================>> Custom Library
import Province from '../../models/Province/Province.model';

export class ProvinceSeeder {

    seed = async () => {

        try {
            await Province.bulkCreate(provinces);
            console.log('\x1b[32mSeed provinces inserted successfully.');
        } catch (error) {
            console.error('Error seeding provinces:', error);
        }
    }
}
const provinces = [
    {
        kh_name: 'បន្ទាយមានជ័យ',
        en_name: 'Banteay Meanchey',
        abbre: 'BM'
    },
    {
        kh_name: 'បាត់ដំបង',
        en_name: 'Battambang',
        abbre: 'BB',
    },
    {
        en_name: 'Kampong Cham',
        kh_name: 'កំពង់ចាម',
        abbre: 'KC',
    },
    {
        en_name: 'Kampong Chhnang',
        kh_name: 'កំពង់ឆ្នាំង',
        abbre: 'KN',
    },
    {
        en_name: 'Kampong Speu',
        kh_name: 'កំពង់ស្ពឺ',
        abbre: 'KS',
    },
    {
        kh_name: 'កំពង់ធំ',
        en_name: 'Kampong Thom',
        abbre: 'KT',
    },
    {
        kh_name: 'កំពត',
        en_name: 'Kampot',
        abbre: 'KP',
    },
    {
        kh_name: 'កណ្តាល',
        en_name: 'Kandal',
        abbre: 'KD',
    },
    {
        kh_name: 'កោះកុង',
        en_name: 'Koh Kong',
        abbre: 'KK',
    },
    {
        kh_name: 'ក្រចេះ',
        en_name: 'Kratié',
        abbre: 'KR',
    },
    {
        kh_name: 'មណ្ឌលគិរី',
        en_name: 'Mondulkiri',
        abbre: 'MK',
    },
    {
        kh_name: 'ភ្នំពេញ',
        en_name: 'Phnom Penh',
        abbre: 'PP',
    },
    {
        kh_name: 'ព្រះវិហារ',
        en_name: 'Preah Vihear',
        abbre: 'PR',
    },
    {
        kh_name: 'ព្រៃវែង',
        en_name: 'Prey Veng',
        abbre: 'PV',
    },
    {
        kh_name: 'ពោធិ៍សាត់',
        en_name: 'Pursat',
        abbre: 'PS',
    },
    {
        kh_name: 'រតនគិរី',
        en_name: 'Ratanakiri',
        abbre: 'RK',
    },
    {
        kh_name: 'សៀមរាប',
        en_name: 'Siem Reap',
        abbre: 'SR',
    },
    {
        kh_name: 'ព្រះសីហនុ',
        en_name: 'Preah Sihanouk',
        abbre: 'SV',
    },
    {
        kh_name: 'ស្ទឹងត្រែង',
        en_name: 'Stung Treng',
        abbre: 'ST',
    },
    {
        kh_name: 'ស្វាយរៀង',
        en_name: 'Svay Rieng',
        abbre: 'SG',
    },
    {
        kh_name: 'តាកែវ',
        en_name: 'Takéo',
        abbre: 'TK',
    },
    {
        kh_name: 'ឧត្តរមានជ័យ',
        en_name: 'Oddar Meanchey',
        abbre: 'OM',
    },
    {
        kh_name: 'កែប',
        en_name: 'Kep',
        abbre: 'KE',
    },
    {
        kh_name: 'ប៉ៃលិន',
        en_name: 'Pailin',
        abbre: 'PL',
    },
    {
        kh_name: 'ត្បូងឃ្មុំ',
        en_name: 'Tboung Khmum',
        abbre: 'TK',
    },
];
