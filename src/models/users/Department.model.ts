// ================================================================>> Third Party Library
import { Model, Column, Table, HasMany, DataType } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User     from './User.model';

@Table({ tableName: 'department', createdAt: 'created_at', updatedAt: 'updated_at' })
class Department extends Model<Department> {
    @Column({ allowNull: false, type: DataType.STRING(150) })
    abbre: string;

    @Column({ allowNull: false, type: DataType.STRING(150) })
    en_name: string

    @Column({ allowNull: false, type: DataType.STRING(150) })
    kh_name: string;

    @HasMany(() => User)
    users: User[];
}

export default Department;