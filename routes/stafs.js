import express from "express";
import { stafs, stafsabout, stafscontacs } from "../controllers/gattstafe";

// routes init 
const routes = express.Router();
routes.get("/stafs",stafs)
routes.get("/stafsabout",stafsabout)
routes.get("/stafscontacs",stafscontacs)

export default routes;


