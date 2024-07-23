// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";

// ================================================================>> Costom Library
import DocumentFiles from "./DocumentFile.model";


@Table({ tableName: 'file_extension', createdAt: 'created_at', updatedAt: 'updated_at' })
class FileExtension extends Model<FileExtension> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    name: string;

    @Column({ type: DataType.STRING(100), allowNull: false, defaultValue: "" })
    icon: string;

    @HasMany(() => DocumentFiles)
    documentFiles: DocumentFiles[];
}

export default FileExtension;
