import { data_source as AppDataSource } from "./data_source";

AppDataSource.initialize()
  .then(() => console.log("Data Source has been initialized"))
  .catch((error) => console.error("Error initializing Data Source", error));

export { AppDataSource };
