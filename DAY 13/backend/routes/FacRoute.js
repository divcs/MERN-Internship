import express from "express";
const router = express.Router();
import FacController from "../controllers/FacController.js";
router.post('/register', FacController.FacRegister);
router.get('/display', FacController.FacDisplay);
router.get('/search/:id', FacController.FacSearch);
router.post('/update/:id', FacController.FacUpdate);
router.get('/delete/:id', FacController.FacDelete);
router.post('/login', FacController.FacLogin);
router.post('/logout', FacController.FacLogout);

export default router;