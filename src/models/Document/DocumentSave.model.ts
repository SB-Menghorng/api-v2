// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";

// ================================================================>> Custom Library
import Document                                                   from "./Document.model";
import User                                                       from "../User/User.model";


@Table({ tableName: 'document_save', createdAt: 'created_at', updatedAt: 'updated_at' })
class DocumentSave extends Model<DocumentSave> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => Document)
    @Column({ type: DataType.INTEGER, allowNull: false })
    document_id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: true })
    creator_id: number;

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    is_save: boolean;
    
    @BelongsTo(() => Document)
    document: Document;

    @BelongsTo(() => User)
    creator: User;
}

export default DocumentSave;
