// ================================================================>> Third Party Library
import { Model, Column, Table, HasMany, DataType } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User     from './User.model';

@Table({ tableName: 'users_title', createdAt: 'created_at', updatedAt: 'updated_at' })
class UsersTitle extends Model<UsersTitle> {

    @Column({ allowNull: false, type: DataType.STRING(150) })
    abbre: string;

    @Column({ allowNull: false, type: DataType.STRING(150) })
    name: string

    @HasMany(() => User)
    users: User[];
}

export default UsersTitle;