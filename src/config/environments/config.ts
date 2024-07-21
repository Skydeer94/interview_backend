import dotenv from 'dotenv'
import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, `.env.${process.env.NODE_ENV || 'development'}`) });
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });


export default {
    SERVER: {
        PORT: process.env.PORT || '3000',
        API_VERSION: process.env.API_VERSION || 'V1',
    },
    DATABASE: {
        DB_NAME: process.env.DB_NAME || 'CLIENTSDB',
        DB_USERNAME: process.env.DB_USERNAME || 'sa',
        DB_PASSWORD: process.env.DB_PASSWORD || '',
        DB_HOST: process.env.DB_HOST || '',
        DB_PORT: process.env.DB_PORT || '1433'
    }
}