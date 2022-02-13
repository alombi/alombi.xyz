<script context="module">
   import { ABSTRACT_KEY } from '$lib/env';
   let apiKey;
   if (process.env.NODE_ENV === 'production') {
      apiKey = process.env.ABSTRACT_KEY
   }else{
      apiKey = ABSTRACT_KEY
   }
   export async function load(){
      let request = await fetch('https://api.ipify.org?format=json')
      let json = await request.json()
      let request_geo = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address=${json.ip}`)
      let json_geo = await request_geo.json()
      let location = `${json_geo.country}, ${json_geo.region}, ${json_geo.city}`;

      return {props:{location, json}}
   }

</script>

<script>
   import "$lib/style/style.css";
   import supabase from '$lib/db';
   import { browser } from '$app/env';
   export let location, json

   async function addUniqueVisitor(path){
      const { data, error } = await supabase.from('unique_visitors').insert([{
         ip_address:json.ip,
         url_position:path,
         location: location
      }])
   }
   if(browser){
      let cookie = window.localStorage.getItem('unique');
      let path = window.location.pathname
      if(!cookie){
         addUniqueVisitor(path)
         window.localStorage.setItem('unique', 'visited')
      }
   }
</script>

<slot></slot>
<br><br>
