import database from "../../config/database/connection";

export default {
    async findAllTypesDocuments() {
        const db = database.getInstance();
        const connection = await db.connect();
        try {
            return await connection.request()
                .query(`SELECT * FROM TYPES_DOCUMENTS`);
        } 
        catch (error: any) {
            throw error;
        }
        finally {
            await connection.close();
        }
    }

}