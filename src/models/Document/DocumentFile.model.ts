// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";

// ================================================================>> Costom Library
import Document                                                   from "./Document.model";
import DocSubject                                                 from "./Subject.model";
import FileExtension                                              from "./DocumentFileExtension.model";


@Table({ tableName: 'document_files', createdAt: 'created_at', updatedAt: 'updated_at' })
class DocumentFiles extends Model<DocumentFiles> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => Document)
    @Column({ type: DataType.INTEGER, allowNull: false })
    document_id: number;

    @ForeignKey(() => DocSubject)
    @Column({ type: DataType.INTEGER, allowNull: true })
    subject_id: number;

    @ForeignKey(() => FileExtension)
    @Column({ type: DataType.INTEGER, allowNull: false })
    extension_id: number;

    @Column({ type: DataType.STRING(500), allowNull: false, defaultValue: "" })
    title: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    size: number;

    @Column({ type: DataType.STRING(500), allowNull: false, defaultValue: "" })
    coerver_uri: string;

    @Column({ type: DataType.STRING(500), allowNull: false, defaultValue: "" })
    uri: string;

    @BelongsTo(() => Document)
    document: Document;

    @BelongsTo(() => DocSubject)
    subject: DocSubject;

    @BelongsTo(() => FileExtension)
    extension: FileExtension;
}

export default DocumentFiles;
