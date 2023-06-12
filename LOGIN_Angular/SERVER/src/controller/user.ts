import { Request, Response} from 'express';
import  bcrypt  from 'bcrypt'; //libreria para incriptar infromacion password 
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res:Response) => {

    const { username, password } = req.body;

    //validamos si el Usuario ya existe en la base de Datos 
    const user = await User.findOne({ where: { username: username}})

    if (user){
        return res.status(400).json({  // return para que no sigua 
            msg: `Ya Existe un Usuario con el Nombre ${username}`,
        })
    }
    
    const hashedPassword =  await bcrypt.hash(password, 10 );

    try {
        //guardamos usuario creado en la base de datos 
        await User.create({
            username: username,
            password: hashedPassword,
        })
    
        res.json({
            msg:'Usuario ' + username +' creado Exitosamente',      
        })
    } catch (error) {
        res.status(400).json({
            msg: 'uups Ocurrio un Eroor ',
            error
        })
    }    
}

export const loginUser = async (req: Request, res:Response) => {

    const { username, password } = req.body;
    
    // Validamos si el Usuario Existe en la base de Datos 
    const user: any = await User.findOne({ where: { username: username}});

    if(!user) {
        return res.status(400).json ({
            msg: `No Exite Un Usuario con el Nombre ${username} en la base de datos`,
        })
    }

    // Validamos password 
    const passwordValid =  await bcrypt.compare(password, user.password)
    
    if(!passwordValid) {
        return res.status(400).json({
            msg:  `Password Incorrecto `
        })
    }
    
    //Generamos Token 
    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'kamch25',{
        /* expiresIn: '10000'  tiempo de expiracion de token 10s en este caso  */
    });

    res.json(token);

}