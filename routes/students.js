import express, { Router } from 'express';
import { stuabout, stubio, stucontacs, stuhome } from '../controllers/gattstudents';
//Router init
const routes = express.routes();
routes.get("/",stuhome)
routes.get("/about",stuabout)
routes.get("/contacs",stucontacs)
routes.get("/bio",stubio)
export default routes;