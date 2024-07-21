import { Router } from "express";
import typeDocumentController from "src/controller/type-document/typeDocumentController";

const router = Router();

router.get("/get-all-types-documents", typeDocumentController.getAllTypesDocuments);

export default router;