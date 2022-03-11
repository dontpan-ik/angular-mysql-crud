import {Request, Response} from 'express';

import pool from '../database';

class ProductController{
    public async product_list (req: Request, res: Response){
        const products = await pool.query('SELECT * FROM products')
        res.json(products);
    }

    public async get_product (req: Request, res: Response): Promise<any>{
        const {product_id} = req.params;
        const product = await pool.query('SELECT * FROM products WHERE product_id = ?',[product_id]);
        if(product.length > 0){
            return res.json(product[0]);
        };
        res.status(404).json({message:"The product doesn't exist"});
    }

    public async create_product (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO products SET ?', [req.body]);
        res.json({message: 'Product created'});
    }

    public async delete_product (req: Request, res: Response): Promise<void>{
        const { product_id } = req.params;  
        await pool.query( 'DELETE FROM products WHERE product_id = ?', [product_id]);
        res.json({message: 'The Product was deleted'});
    }

    public async update_product (req: Request, res: Response): Promise<void> {
        const { product_id } = req.params;
        await pool.query( 'UPDATE products set ? WHERE product_id = ?', [req.body, product_id]);
        res.json({message: 'The Product was updated'});            
    }
}

const productController = new ProductController();
export default productController;