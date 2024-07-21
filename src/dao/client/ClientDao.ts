import { ClientReqDto } from "src/dto/req/CreateClientReqDto";
import database from "../../config/database/connection";

export default {
    async createClient(client: ClientReqDto) {
        const db = database.getInstance();
        const connection = await db.connect();
        try {
            const query: string = `
                INSERT INTO CLIENTS (
                    name_client,
                    document_type,
                    document_number,
                    address,
                    phone,
                    email,
                    creationDate
                ) VALUES (
                    @nameClient,
                    @documentType,
                    @documentNumber,
                    @address,
                    @phone,
                    @email,
                    @creationDate
                );`;
            
            return await connection.request()
                .input("nameClient", client.nameClient)
                .input("documentType", client.documentType)
                .input("documentNumber", client.documentNumber)
                .input("address", client.address)
                .input("phone", client.phone)
                .input("email", client.email)
                .input("creationDate", client.creationDate)
                .query(query);
        } 
        catch (error: any) {
            throw error;
        }
        finally {
            await connection.close();
        }
    },
    async getAllClients() {
        const db = database.getInstance();
        const connection = await db.connect();
        try {
            return await connection.request()
                .query(`SELECT * FROM CLIENTS;`);
        } 
        catch (error: any) {
            throw error;
        }
        finally {
            await connection.close();
        }
    },
    async editClient(idClient: number, client: ClientReqDto) {
        const db = database.getInstance();
        const connection = await db.connect();
        try {
            const query: string = `
                UPDATE CLIENTS
                SET 
                    name_client = @nameClient,
                    document_type = @documentType,
                    document_number = @documentNumber,
                    address = @address,
                    phone = @phone,
                    email = @email,
                    creationDate = @creationDate
                WHERE id = @id;`;

            
            return await connection.request()
                .input("id", idClient)
                .input("nameClient", client.nameClient)
                .input("documentType", client.documentType)
                .input("documentNumber", client.documentNumber)
                .input("address", client.address)
                .input("phone", client.phone)
                .input("email", client.email)
                .input("creationDate", client.creationDate)
                .query(query);
        } 
        catch (error: any) {
            console.log( error )
            throw error;
        }
        finally {
            await connection.close();
        }
    },
    async deleteClient(idClient: number) {
        const db = database.getInstance();
        const connection = await db.connect();
        try {
            
            const query: string = `DELETE FROM CLIENTS WHERE id = @id;`;

            return await connection.request()
                .input("id", idClient)
                .query(query);
        } 
        catch (error: any) {
            console.log( error )
            throw error;
        }
        finally {
            await connection.close();
        }
    },

}