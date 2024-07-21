// ================================================================>> Third Party Library
import { Model, Column, Table, HasMany, DataType } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User     from './user.model';

@Table({ tableName: 'users_type', createdAt: 'created_at', updatedAt: 'updated_at' })
class UsersType extends Model<UsersType> {
    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: '' })
    en_name: string;

    @Column({ type: DataType.STRING(150), allowNull: false, defaultValue: '' })
    kh_name: string;

    // @HasMany(() => User)
    // users: User[];
}

export default UsersType;