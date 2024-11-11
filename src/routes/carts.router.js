import { Router } from "express";
import uploader from "../utils/uploader.js";

const router = Router();
const carts = [];

router.get("/", (req, res) => { // EndPoint que devuelve el array de carritos
    res.status(200).json({ status: "success", carts });
});

router.post("/", uploader.single("file"), (req, res) => { //Agrega una mascota
    const { name, specie } = req.body; //Desestructuro del body
    const { file } = req; 

    if (!file) { //Controlo que me llegue el nombre del archivo
        return res.status(400).send({ status: "error", message: "Archivo no encontrado" });
    }

    const pet = { //creo una nueva mascota
        name,
        specie,
        thumbnail: file.filename, //capturo el nombre del archivo
    };

    pets.push(pet); //pucheo la nueva mascota al array
    res.status(200).json({ status: "success", pet }); //Informo la mascota que agregué
});

export default router;