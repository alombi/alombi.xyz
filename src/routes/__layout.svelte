<script>
   import "$lib/style/style.css";
   import supabase from '$lib/db';
   import { browser } from '$app/env';

   async function addUniqueVisitor(path){
      let request = await fetch('https://api.ipify.org?format=json')
      let json = await request.json()
      let request_geo = await fetch('../api/' + json.ip + '_location/')
      let location = await request_geo.json()
      location = location.result
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
   addUniqueVisitor('/')
</script>

<slot></slot>
<br><br>
