// ================================================================>> Third Party Library
import { Model, Column, Table, DataType, ForeignKey } from 'sequelize-typescript';

// ================================================================>> Costom Library
import User from './User.model';

@Table({ tableName: 'user_verified_codes', createdAt: 'created_at', updatedAt: 'updated_at' })
class UserVerifiedCodes extends Model<UserVerifiedCodes> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: true })
    user_id?: number;

    @Column({ type: DataType.STRING(50), allowNull: true })
    type?: string;

    @Column({ type: DataType.STRING(50), allowNull: false })
    code: string;

    @Column({ type: DataType.TINYINT, allowNull: false, defaultValue: 0 })
    is_verified: number;

    @Column({ type: DataType.DATE, allowNull: true })
    verified_at?: Date;
}

export default UserVerifiedCodes;
