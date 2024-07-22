// ================================================================>> Third Party Library
import { Model, Column, Table, BelongsTo, ForeignKey, DataType, HasMany } from 'sequelize-typescript';

// ================================================================>> Custom Library
import UsersType from './Type.model';
import Department from './Department.model';
import Position from './Position.model';
import UsersJob from './Job.model';
import UsersTitle from './Title.model';
import UserLogs from './Log.model';
import UserVerifiedCodes from './Code.model';
import { UsersActiveEnum } from '../../app/enums/user/active.enum';

@Table({ tableName: 'user', createdAt: 'created_at', updatedAt: 'updated_at' })
class User extends Model<User> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => UsersType)
    @Column({ type: DataType.INTEGER, allowNull: false, onDelete: 'CASCADE' })
    type_id: number;

    @BelongsTo(() => UsersType)
    type: UsersType;

    @ForeignKey(() => UsersTitle)
    @Column({ type: DataType.INTEGER, allowNull: true, onDelete: 'CASCADE' })
    title_id?: number;

    @BelongsTo(() => UsersTitle)
    title: UsersTitle;

    @ForeignKey(() => Department)
    @Column({ type: DataType.INTEGER, allowNull: true, onDelete: 'CASCADE' })
    department_id?: number;

    @BelongsTo(() => Department)
    department: Department;

    @ForeignKey(() => Position)
    @Column({ type: DataType.INTEGER, allowNull: true, onDelete: 'CASCADE' })
    position_id?: number;

    @BelongsTo(() => Position)
    position: Position;

    @ForeignKey(() => UsersJob)
    @Column({ type: DataType.INTEGER, allowNull: true, onDelete: 'CASCADE' })
    job_id?: number;

    @BelongsTo(() => UsersJob)
    job: UsersJob;

    @Column({ type: DataType.INTEGER, allowNull: true })
    sex_id?: number;

    @Column({ type: DataType.STRING(50), allowNull: true })
    username?: string;

    @Column({ type: DataType.STRING(100), allowNull: false, defaultValue: 'file/serve/f0c86c3a-4529-4fd1-98aa-694f62fbccb4' })
    avatar: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    phone?: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    email?: string;

    @Column({ type: DataType.TINYINT, allowNull: false, defaultValue: 0 })
    is_email_verified: number;

    @Column({ type: DataType.DATE, allowNull: true })
    email_verified_at?: Date;

    @Column({ type: DataType.STRING(50), allowNull: true })
    email_verified_code?: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    en_name?: string;

    @Column({ type: DataType.STRING(50), allowNull: true })
    kh_name?: string;

    @Column({ type: DataType.STRING(191), allowNull: false })
    password: string;

    @Column({ type: DataType.DATE, allowNull: true })
    password_last_updated_at?: Date;

    @Column({ type: DataType.INTEGER, allowNull: true })
    password_last_updater?: number;

    @Column({ allowNull: false, type: DataType.INTEGER, defaultValue: UsersActiveEnum.Active })
    is_active: UsersActiveEnum;

    @Column({ type: DataType.TINYINT, allowNull: false, defaultValue: 0 })
    is_approved: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: true, onDelete: 'CASCADE' })
    creator_id?: number;

    @BelongsTo(() => User, 'creator_id')
    creator: User;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: true, onDelete: 'CASCADE' })
    updater_id?: number;

    @BelongsTo(() => User, 'updater_id')
    updater: User;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: true, onDelete: 'CASCADE' })
    deleter_id?: number;

    @BelongsTo(() => User, 'deleter_id')
    deleter: User;

    @HasMany(() => UserLogs)
    userLogs: UserLogs[];

    @HasMany(() => UserVerifiedCodes)
    userVerifiedCodes: UserVerifiedCodes[];
}

export default User;
