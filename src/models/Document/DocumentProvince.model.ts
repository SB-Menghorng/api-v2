// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";

// ================================================================>> Costom Library
import Document                                                  from "./Document.model";
import Province                                                  from "../Province/Province.model";


@Table({ tableName: 'document_province', createdAt: 'created_at', updatedAt: 'updated_at' })
class DocumentProvince extends Model<DocumentProvince> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => Document)
    @Column({ type: DataType.INTEGER, allowNull: false })
    document_id: number;

    @ForeignKey(() => Province)
    @Column({ type: DataType.INTEGER, allowNull: false })
    province_id: number;

    @BelongsTo(() => Document)
    document: Document;

    @BelongsTo(() => Province)
    province: Province;
}

export default DocumentProvince;
