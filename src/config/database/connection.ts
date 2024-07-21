import { ConnectionPool } from "mssql";
import dbConfig from '../environments/config'

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = dbConfig.DATABASE;

class Database {
    private static instance: Database;
    private pool: ConnectionPool;

    private constructor() {
        this.pool = new ConnectionPool({
            database: DB_NAME,
            user:DB_USERNAME,
            password: DB_PASSWORD,
            server: DB_HOST || 'localhost',
            port: parseInt(DB_PORT, 10) || 1433,
            requestTimeout: parseInt(process.env.DBREQUESTTIMEOUT!) || 350000,
            connectionTimeout: 350000,
            options: {
                encrypt: false,
                enableArithAbort: true
              },
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async connect() {
        try {
            // console.log( 'Conexión correcta a la base de datos' )
            return await this.pool.connect();
        } catch (error) {
            console.error('Error al conectar a la base de datos:', error);
            throw error;
        }
    }
}
export default Database;