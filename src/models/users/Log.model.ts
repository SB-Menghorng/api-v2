import { Model, Column, Table, DataType, ForeignKey } from 'sequelize-typescript';
import User from './User.model';

@Table({ tableName: 'user_logs', createdAt: 'created_at', updatedAt: 'updated_at' })
class UserLogs extends Model<UserLogs> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: true })
    user_id?: number;

    @Column({ type: DataType.STRING(50), allowNull: true })
    ip?: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    os?: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    tool?: string;

    @Column({ type: DataType.STRING(500), allowNull: true })
    description?: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    version?: string;
}

export default UserLogs;