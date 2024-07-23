// ================================================================>> Third Party Library
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: 'fund_source', createdAt: 'created_at', updatedAt: 'updated_at' })
class FundSource extends Model<FundSource> {
    @Column({ type: DataType.STRING(150), allowNull: false })
    abbre: string;

    @Column({ type: DataType.STRING(150), allowNull: false })
    en_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false })
    kh_name: string;

    @Column({ type: DataType.STRING(100), allowNull: false })
    logo: string;
}

export default FundSource;
