import { DataTypes, Model } from 'sequelize';
import db from '.';

class SequelizeUser extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;

  static findByEmail(email: string): Promise<SequelizeUser | null> {
    return this.findOne({ where: { email } });
  }
}

SequelizeUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  }
);

export default SequelizeUser;

// import {
//   CreationOptional,
//   DataTypes,
//   InferAttributes,
//   InferCreationAttributes,
//   Model,
// } from 'sequelize';
// import db from '.';

// class SequelizeUser extends Model<InferAttributes<SequelizeUser>,
// InferCreationAttributes<SequelizeUser>> {
//   declare id: CreationOptional<number>;

//   declare username: string;

//   declare role: string;

//   declare email: string;

//   declare password: string;
// }

// SequelizeUser.init({
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING(30),
//     allowNull: false,
//   },
//   role: {
//     type: DataTypes.STRING(30),
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING(20),
//     allowNull: false,
//   },
// }, {
//   sequelize: db,
//   modelName: 'users',
//   timestamps: false,
// });

// export default SequelizeUser;
