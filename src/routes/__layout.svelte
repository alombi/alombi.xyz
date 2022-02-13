<script>
   import "$lib/style/style.css";
   import supabase from '$lib/db';
   import { onMount } from "svelte";

   async function addUniqueVisitor(path){
      let request = await fetch('https://api.ipify.org?format=json')
      let json = await request.json()
      let request_geo = await fetch('http://ip-api.com/json/' + json.ip)
      let json_geo = await request_geo.json()
      let location = `${json_geo.country}, ${json_geo.regionName}, ${json_geo.city}`;
      const { data, error } = await supabase.from('unique_visitors').insert([{
         ip_address:json.ip,
         url_position:path,
         location: location
      }])
   }
   onMount(()=>{
      console.log('mounted')
      let cookie = window.localStorage.getItem('unique');
      console.log(cookie)
      let path = window.location.pathname
      if(!cookie){
         console.log('if cookie')
         addUniqueVisitor(path)
         window.localStorage.setItem('unique', 'visited')
      }
   })
</script>

<slot></slot>
<br><br>
