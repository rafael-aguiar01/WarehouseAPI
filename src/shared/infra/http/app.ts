import express, { NextFunction, Response, Request } from "express";

import  createConnection  from '@shared/infra/typeorm'; 

createConnection();
const app = express();

export { app }