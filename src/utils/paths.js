// Módulo 'path': sirve para trabajar con rutas de archivos y directorios
import path from "path";

// Define la ruta raíz del proyecto
const ROOT_PATH = path.resolve(); // Devuelve la ruta absoluta al directorio actual
//o directorio de inicio del proyecto (es donde está el PACKAGE.JSON)

// Define la ruta 'src' del proyecto
const SRC_PATH = path.join(ROOT_PATH, "src");//concatena la ruta SRC

// Define las rutas claves del proyecto
const paths = {
    root: ROOT_PATH,                                    // Ruta de la raíz del proyecto
    src: SRC_PATH,                                      // Ruta del directorio "src"
    public: path.join(SRC_PATH, "public"),              // Ruta de la raíz del directorio de archivos estáticos
    images: path.join(SRC_PATH, "public", "images"),    // Ruta del directorio de imágenes
    //a la ruta raiz le concatena PUBLIC y a ésta IMAGES
};

export default paths;