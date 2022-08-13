import { Connection, createConnection, getConnectionOptions } from 'typeorm';

  export default async (host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  
  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test'
      ? "warehouse_test" 
      : defaultOptions.database, 
    })
  );
};