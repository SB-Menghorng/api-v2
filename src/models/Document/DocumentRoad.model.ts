// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";

// ================================================================>> Costom Library
import Document                                                   from "./Document.model";
import Road                                                       from "../Road/Road.model";


@Table({ tableName: 'document_road', createdAt: 'created_at', updatedAt: 'updated_at' })
class DocumentRoad extends Model<DocumentRoad> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => Document)
    @Column({ type: DataType.INTEGER, allowNull: false })
    document_id: number;

    @ForeignKey(() => Road)
    @Column({ type: DataType.INTEGER, allowNull: false })
    road_id: number;

    @BelongsTo(() => Document)
    document: Document;

    @BelongsTo(() => Road)
    road: Road;
}

export default DocumentRoad;
