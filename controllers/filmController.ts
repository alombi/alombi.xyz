import { Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import { Film } from '../models/filmModel.ts'

let films:Film[]=[
    { id : '1', title : 'test', format : 'txt'}
]

export const get_all_films = (ctx:Context) =>{
    return ctx.json(films, 200);
}
export const get_film = (ctx:Context) =>{
    const { id } = ctx.params;
    const film = films.find((f:Film) => f.id === id);
    if (film) {
        return ctx.json(film, 200);
    }
}
    
