import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    Model.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        underscored: true,
        tableName: 'users',
      },
    );
  }
}

export default User;
