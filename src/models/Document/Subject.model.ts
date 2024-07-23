// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, ForeignKey, HasMany } from "sequelize-typescript";
// ================================================================>> Costom Library
import Type                                                     from "./Type.model";
import DocumentFiles                                            from "./DocumentFile.model";


@Table({ tableName: 'doc_subject', createdAt: 'created_at', updatedAt: 'updated_at' })
class DocSubject extends Model<DocSubject> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => Type)
    @Column({ type: DataType.INTEGER, allowNull: false })
    type_id: number;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    en_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    kh_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    abbre: string;

    @Column({ type: DataType.STRING(100), allowNull: false, defaultValue: "" })
    icon: string;

    @HasMany(() => DocumentFiles)
    documentFiles: DocumentFiles[];
}

export default DocSubject;
