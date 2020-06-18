import { Application, Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import {
    get_all_films,
    get_film
} from './controllers/filmController.ts'

const app = new Application();

app.get('/films', get_all_films);
app.get('/film/:id', get_film);

app.start({port:8000});