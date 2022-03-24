/* eslint-disable @typescript-eslint/naming-convention */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_TYPE:
        | "mysql"
        | "mariadb"
        | "postgres"
        | "sqlite"
        | "mssql"
        | "oracle"
        | "mongodb";
      DB_HOST: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_DATABASE: string;
      DB_PORT: number;
    }
  }
}

export {};
