import "dotenv/config";
import { DataSource } from "typeorm";

export const data_source = new DataSource({
  type: process.env.DB_TYPE as "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  synchronize: true,
  logging: true,
  migrations: ["src/database/migrations/*.ts"],
  subscribers: [],
});
