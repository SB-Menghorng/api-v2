// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";

// ================================================================>> Third Party Library
import Road from "./Road.model";
import Province from "../Province/Province.model";
@Table({ tableName: 'road_province', createdAt: 'created_at', updatedAt: 'updated_at' })
class RoadProvince extends Model<RoadProvince> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => Road)
    @Column({ type: DataType.INTEGER, allowNull: false })
    road_id: number;

    @ForeignKey(() => Province)
    @Column({ type: DataType.INTEGER, allowNull: false })
    province_id: number;

    @BelongsTo(() => Road)
    road: Road;

    @BelongsTo(() => Province)
    province: Province;
}

export default RoadProvince;
