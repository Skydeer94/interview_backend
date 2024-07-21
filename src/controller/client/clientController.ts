import { Request, Response } from "express";
import { ClientReqDto } from "src/dto/req/CreateClientReqDto";
import clientService from "src/services/client/clientService";

export default {
    createClient: async (req: Request, res: Response) => {
   
        const clientReqDto: ClientReqDto = {
            nameClient: req.body.nameClient,
            documentType: req.body.documentType,
            documentNumber: req.body.documentNumber,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            creationDate: req.body.creationDate
        }

        const response = await clientService.createClient(clientReqDto);
        return res.status(200).json({ response });
       
    },
    getAllClients: async (req: Request, res: Response) => {
        const response = await clientService.getAllClients();
        return res.status(200).json({ data: response });
    },
    editClient: async (req: Request, res: Response) => {

        const clientId: number = parseInt(req.params.id, 10);
   
        const clientReqDto: ClientReqDto = {
            nameClient: req.body.nameClient,
            documentType: req.body.documentType,
            documentNumber: req.body.documentNumber,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            creationDate: req.body.creationDate
        }

        const response = await clientService.editClient(clientId, clientReqDto);
        return res.status(200).json({ response });
       
    },
    deleteClient: async (req: Request, res: Response) => {

        const clientId: number = parseInt(req.params.id, 10);

        const response = await clientService.deleteClient(clientId);
        return res.status(200).json({ response });
       
    },
}