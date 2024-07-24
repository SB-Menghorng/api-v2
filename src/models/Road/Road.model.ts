// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";

// ================================================================>> Third Party Library
import RoadType                                                 from "./Type.model";
import RoadProvince                                             from "./RoadProvince.model"; 


@Table({ tableName: 'road', createdAt: 'created_at', updatedAt: 'updated_at' })
class Road extends Model<Road> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => RoadType)
    @Column({ type: DataType.INTEGER, allowNull: false })
    type_id: number;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    abbre: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    en_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    kh_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    start: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    end: string;

    @BelongsTo(() => RoadType)
    roadType: RoadType;

    @HasMany(() => RoadProvince)
    roadProvinces: RoadProvince[];
}

export default Road;
