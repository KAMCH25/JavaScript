import {Request, Response} from 'express';
import Producto from '../models/producto';

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Producto.findAll()


    res.json(listProducts);

}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(product){
        res.json(product)
    }else{
        res.status(404).json({
            msg: `No exite un producto en el id ${id}`
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(!product){
        res.status(404).json({
            msg: `No esxite un producto con el id ${id}`
        })
    }else{
        await product.destroy();
        res.json({
            mdg: `El producto fu Eliminado con Exito`
        })
    }

}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
    
    try {

        await Producto.create(body);

        res.json({
            mdg: `El Producto fue Agregado con Exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            mdg: `Upps Ocurrio un error, Comnuniquese con Soporte`
        })
    }    
}

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const product = await Producto.findByPk(id);

    if(product){
        await product.update(body);
        res.json({
            msg: `El producto fue Actualizado con Exito`
        }) 

    }else{
        res.status(404).json({
            msg:`No Existe un producto con el id ${id}`
        })
    }

    } catch (error) {
        console.log(error);
        res.json({
            mdg: `Upps Ocurrio un error, Comnuniquese con Soporte`
        })
    }

    
}