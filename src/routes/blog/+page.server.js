import { json } from "@sveltejs/kit"

export const load = async (event) => {
    let req = await event.fetch('../posts.json')
    let posts = await req.json()
    return {
        posts:posts
    }
}