import { Request, Response } from "express";
import typeDocumentService from "src/services/type-document/typeDocumentService";

export default {
    async getAllTypesDocuments(req: Request, res: Response) {
        const typesDocuments = await typeDocumentService.getAllTypesDocuments()
        return res.status(200).json({ data: typesDocuments })
    }
}