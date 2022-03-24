import { DataSource } from "typeorm";

console.log("LE ENV", process.env.DB_TYPE);
export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

AppDataSource.initialize()
  .then(() => console.log("Data Source has been initialized"))
  .catch((error) => console.error("Error initializing Data Source", error));
