import ClientDao from "src/dao/client/ClientDao";
import { ClientReqDto } from "src/dto/req/CreateClientReqDto";

export default {
    async createClient (clientDto: ClientReqDto){
        const client = await ClientDao.createClient(clientDto);
        return client.recordset
    },
    async getAllClients (){
        const clients = await ClientDao.getAllClients();
        return clients.recordset
    },
    async editClient (idClient: number, clientDto: ClientReqDto){
        const client = await ClientDao.editClient(idClient, clientDto);
        return client.recordset
    },
    async deleteClient (idClient: number){
        const client = await ClientDao.deleteClient(idClient);
        return client.recordset
    },
}