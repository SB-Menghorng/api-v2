// ================================================================>> Third Party Library
import { Model, Column, Table, HasMany, DataType } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User     from './User.model';

@Table({ tableName: 'users_job', createdAt: 'created_at', updatedAt: 'updated_at' })
class UsersJob extends Model<UsersJob> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: '' })
    en_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: '' })
    kh_name: string;

    @HasMany(() => User)
    users: User[];
}

export default UsersJob;