import { Router } from "express";
import clientRoutes from "./api/client/clientRoutes";
import typeDocumentRoutes from "./api/type-document/typeDocumentRoutes"
const router = Router();

router.use("/clients", clientRoutes);
router.use("/type-document", typeDocumentRoutes)

export default router;