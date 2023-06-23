import * as bcrypt from 'bcryptjs';
import { NewEntity } from '../interfaces';
import { IToken } from '../interfaces/IToken';
import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
import {
    ILogin,
    IUser,
    IUserCreate,
    IUserCreateResponse,
    IUserResponse,
} from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';
import UserModel from '../models/UserModel';
import JWT from '../utils/JWT';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwtService = JWT
  ) {}

  public async findAllUsers(): Promise<ServiceResponse<IUserResponse[]>> {
    const allUsers = await this.userModel.findAll();
    const usersReturn = allUsers.map(({ id, email }) => ({ id, email }));
    return { status: 'SUCCESSFUL', data: usersReturn };
  }

  public async findUserById(id: number): Promise<ServiceResponse<IUserResponse>> {
    const user = await this.userModel.findById(id);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    const { email } = user as IUser;

    return { status: 'SUCCESSFUL', data: { id, email } };
  }

  public async login(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
    const user = await this.userModel.findByEmail(data.email);
    if (user) {
      if (!bcrypt.compareSync(data.password, user.password)) {
        return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
      }
      const { email } = user as IUser;
      const token = this.jwtService.sign({ email });
      return { status: 'SUCCESSFUL', data: { token } };
    }
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  }

  public async registerUser(user: NewEntity<IUserCreate>): Promise<ServiceResponse<IUserCreateResponse | ServiceMessage>> {
    const userFound = await this.userModel.findByEmail(user.email);
    if (userFound) return { status: 'CONFLICT', data: { message: 'User already exists' } };

    const hashedPassword = bcrypt.hashSync(user.password, 10);
    const newUser = await this.userModel.create({ ...user, password: hashedPassword });
    const { id, email } = newUser as IUserCreate;

    return { status: 'SUCCESSFUL', data: { id, email } };
  }
}

// import * as bcrypt from 'bcryptjs';
// import { NewEntity } from '../interfaces';
// import { IToken } from '../interfaces/IToken';
// import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
// import {
//   ILogin,
//   IUser,
//   IUserCreate,
//   IUserCreateResponse,
//   IUserResponse,
// } from '../interfaces/users/IUser';
// import { IUserModel } from '../interfaces/users/IUserModel';
// import UserModel from '../models/UserModel';
// import JWT from '../utils/JWT';

// export default class UserService {
//   constructor(
//     private userModel: IUserModel = new UserModel(),
//     private jwtService = JWT,
//   ) { }

//   public async findAllUsers(): Promise<ServiceResponse<IUserResponse[]>> {
//     const allUsers = await this.userModel.findAll();
//     const usersReturn = allUsers.map(({ id, email, role }) => ({ id, email, role }));
//     return { status: 'SUCCESSFUL', data: usersReturn };
//   }

//   public async findUserById(id: number): Promise<ServiceResponse<IUserResponse>> {
//     const user = await this.userModel.findById(id);
//     if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
//     const { email, role } = user as IUser;

//     return { status: 'SUCCESSFUL', data: { id, email, role } };
//   }

//   public async login(data: ILogin): Promise<ServiceResponse<ServiceMessage | IToken>> {
//     const user = await this.userModel.findByEmail(data.email);
//     if (user) {
//       if (!bcrypt.compareSync(data.password, user.password)) {
//         return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
//       }
//       const { email, role } = user as IUser;
//       const token = this.jwtService.sign({ email, role });
//       return { status: 'SUCCESSFUL', data: { token } };
//     }
//     return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
//   }

//   public async createUser(user: NewEntity<IUserCreate>):
//   Promise<ServiceResponse<IUserCreateResponse | ServiceMessage>> {
//     const userFound = await this.userModel.findByEmail(user.email);
//     if (userFound) return { status: 'CONFLICT', data: { message: 'User already exists' } };

//     const userPassword = bcrypt.hashSync(user.password, 15);
//     const newUser = await this.userModel.create({ ...user, password: userPassword });
//     const { id, username, email, role } = newUser as IUserCreate;

//     return { status: 'SUCCESSFUL', data: { id, username, email, role } };
//   }
// }
