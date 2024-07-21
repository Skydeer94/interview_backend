import { Router } from "express";
import clientController from '../../../controller/client/clientController';

const router = Router();

router.get("/",clientController.getAllClients);
router.post("/create-client",clientController.createClient);
router.put("/edit-client/:id",clientController.editClient);
router.delete("/:id",clientController.deleteClient);

export default router;