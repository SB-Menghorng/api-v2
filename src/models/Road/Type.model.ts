// ================================================================>> Third Party Library
import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";


import Road from "./Road.model"; 

@Table({ tableName: 'roads_type', createdAt: 'created_at', updatedAt: 'updated_at' })
class RoadType extends Model<RoadType> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    en_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: "" })
    kh_name: string;

    @HasMany(() => Road)
    roads: Road[];
}

export default RoadType;
