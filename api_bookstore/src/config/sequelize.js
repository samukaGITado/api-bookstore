import { Sequelize } from "sequelize";

// export const conn = new Sequelize('yngrid', 'root', '123456789', {
//   host: 'localhost',
//   dialect: "mysql",
//   port: 3306
// });

export const conn = new Sequelize({
  dialect: 'sqlite',
  storage: 'vitoria.sqlite'
});