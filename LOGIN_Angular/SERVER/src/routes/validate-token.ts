import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { loginUser } from "../controller/user";

const validateToken = (req: Request,  res: Response,  next: NextFunction ) => {
    const headerToken = req.headers['authorization']    

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        //Tiene Token
        try {
            const bearerToken = headerToken.slice(7);   
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'kamch25')
            next()

        } catch (error) {
            res.status(401).json({
                msg: 'Token No Valido'
            })
        }
         
    }else {
        res.status(401).json ({
            msg: 'Acceso Denegado'
        })
    }   
   
    
}

export default validateToken;