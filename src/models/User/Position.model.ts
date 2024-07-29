// ================================================================>> Third Party Library
import { Model, Column, Table, HasMany, DataType } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User     from './User.model';

@Table({ tableName: 'position', createdAt: 'created_at', updatedAt: 'updated_at' })
class Position extends Model<Position> {

    @Column({ allowNull: false, type: DataType.STRING(150) })
    en_name: string

    @Column({ allowNull: false, type: DataType.STRING(150) })
    kh_name: string;

    @HasMany(() => User)
    users: User[];
}

export default Position;