// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";

// ================================================================>> Costom Library
import Type                                                       from "./Type.model";
import FundSource                                                 from "./FundSource.model";

@Table({ tableName: 'document', createdAt: 'created_at', updatedAt: 'updated_at' })
class Document extends Model<Document> {
    @Column({ type: DataType.STRING(100), defaultValue: "" })
    cover: string;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    searchable: number;

    @Column({ type: DataType.STRING(500), defaultValue: "" })
    title: string;

    @Column({ type: DataType.STRING(500), defaultValue: "" })
    abstract: string;

    @Column({ type: DataType.STRING(10), defaultValue: "" })
    completed_year: string;

    @Column({ type: DataType.STRING(10), defaultValue: "" })
    completed_month: string;

    @Column({ type: DataType.STRING(10), defaultValue: "" })
    completed_day: string;

    @Column({ type: DataType.BIGINT, defaultValue: 0 })
    most_views: number;

    @Column({ type: DataType.TINYINT, defaultValue: 0 })
    is_pinned: number;

    @Column({ type: DataType.DATE, defaultValue: null })
    pinned_at: Date;

    @ForeignKey(() => Type)
    @Column({ type: DataType.INTEGER, allowNull: false })
    type_id: number;

    @ForeignKey(() => FundSource)
    @Column({ type: DataType.INTEGER, allowNull: true })
    fund_source_id: number;

    @BelongsTo(() => Type)
    type: Type;

    @BelongsTo(() => FundSource)
    fundSource: FundSource;
}

export default Document;
