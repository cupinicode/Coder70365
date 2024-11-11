import { Router } from "express";

const router = Router();
const products = [];

router.get("/", (req, res) => { //EndPoint que devuelve el array de productos
    res.status(200).json({ status: "success", products });
});

router.post("/", (req, res) => {//Agrego un producto
    const { name, surname } = req.body;

    const product = {//creo el objeto
        name,
        surname
    };

    users.push(product); //pusheo el objeto (usuario) al array
    res.status(200).json({ status: "success", product });
});

export default router;