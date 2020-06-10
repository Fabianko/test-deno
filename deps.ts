//aqui van todas las dependencias del proyecto como en package.json en angular++ç

//OAK es la version de KOA de nodejs para deno
export { 
    Application, 
    Router, 
    RouterContext
} from 'https://deno.land/x/oak/mod.ts';
// componente para integrar con mongodb
export {
    init,
    MongoClient 
} from "https://deno.land/x/mongo@v0.6.0/mod.ts";