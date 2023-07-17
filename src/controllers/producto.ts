import {Request, Response} from 'express'
import Producto from '../models/producto'


export const getProducts = async (req: Request, res: Response) => {
    const listProductos = await Producto.findAll()
    res.json(listProductos);
}

export const getProduct = async(req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe el producto con el id ${id}`
        })
    }
}

export const deleteProduct = async(req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(!product) {
        res.status(404).json({
            msg: `No existe el producto con el id ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: 'el producto fue eliminado exitosamente'
        })
    }

    
}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
    
    try {
        await Producto.create(body);

        res.json({
            msg: 'El producto fue creado con exito'
        })
    } catch (error) {
        
    }
    
}

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const product = await Producto.findByPk(id);
    
    
        if (product) {
            await product.update(body);
            res.json({
                msg: 'El producto fue acualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe el producto con el id ${id}`
            })
    
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Upss ocurrio un error, comiquese con soporte'
        })
    }
   

}

//2:00:56