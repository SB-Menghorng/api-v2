// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";

// ================================================================>> Costom Library
import DocumentProvince                            from "../Document/DocumentProvince.model";


@Table({ tableName: 'province', createdAt: 'created_at', updatedAt: 'updated_at' })
class Province extends Model<Province> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    abbre: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    en_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    kh_name: string;

    @HasMany(() => DocumentProvince)
    documentProvinces: DocumentProvince[];
}

export default Province;
