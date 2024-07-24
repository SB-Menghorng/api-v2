// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";

// ================================================================>> Costom Library
import Document                                     from "./Document.model";   

@Table({ tableName: 'doc_type', createdAt: 'created_at', updatedAt: 'updated_at' })
class DocumentType extends Model<DocumentType> {
    @Column({ type: DataType.STRING(150), allowNull: false })
    en_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false })
    kh_name: string;

    @Column({ type: DataType.STRING(100), allowNull: false })
    icon: string;

    @HasMany(() => Document)
    documents: Document[];
}

export default DocumentType;
