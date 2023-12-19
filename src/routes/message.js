import { Router } from "express";
import {PostMessage, GetMessage} from "../controllers/chatControllers.js";

const message = Router()

message
    .post('/', PostMessage)
    .get('/', GetMessage)

export default message