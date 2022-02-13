import supabase from '$lib/db';
import { ABSTRACT_KEY } from '$lib/env';
let apiKey;
if (process.env.NODE_ENV === 'production') {
   apiKey = process.env.ABSTRACT_KEY
} else {
   apiKey = ABSTRACT_KEY
}

export async function get({ params }) {
   const ip = params.ip
   const article_id = params.id
   let request_geo = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address=${ip}`)
   let json_geo = await request_geo.json()
   let location = `${json_geo.country}, ${json_geo.region}, ${json_geo.city}`;
   const { data, error } = await supabase.from('visits').insert([{
      article_id: article_id,
      ip_address:ip,
      location: location
   }])
   return {
      body: {
         result: 'done'
      }
   }
}