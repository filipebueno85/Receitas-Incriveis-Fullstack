import { InferCreationAttributes } from 'sequelize';
import SequelizeUser from '../database/models/SequelizeUser';
import { IUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findAll(): Promise<IUser[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, email, password }) => (
      { id, email, password }
    ));
  }

  async findById(id: IUser['id']): Promise<IUser | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;
    const { email, password } = user;
    return { id, email, password };
  }

  async findByEmail(email: IUser['email']): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    const { id, password } = user;
    return { id, email, password };
  }

  async create(user: Omit<InferCreationAttributes<SequelizeUser,
  { omit: never; }>, 'id'>): Promise<IUser> {
    const newUser = await this.model.create(user);
    const { id, email, password } = newUser;
    return { id, email, password };
  }
}
