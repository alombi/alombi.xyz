export async function get({ params }) {
   console.log(params)
   let request_geo = await fetch('http://ip-api.com/json/' + params.ip)
   let json_geo = await request_geo.json()
   let location = `${json_geo.country}, ${json_geo.regionName}, ${json_geo.city}`;
   return {
      body: {
         result: location
      }
   }
}