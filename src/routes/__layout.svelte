<script context="module">
   import supabase from '$lib/db'
   export async function load(){
      const { data, error } = await supabase.from('unique_visitors').select('ip_address')

      let ip_request = await fetch('https://api.ipify.org?format=json')
      let ip_json = await ip_request.json()

      return {props:{data, ip_json}}
   }
</script>

<script>
   import "$lib/style/style.css";
   import { browser } from '$app/env';
   export let data, ip_json

   async function updateDB(){
      let request = await fetch('../api/' + ip_json.ip + '_unique_visitors')
      let res = await request.json()
   }

   if(browser){
      let cookie = window.localStorage.getItem('unique');
      if(!cookie){
         let alreadySent = false;
         data.forEach(address => {
            if(address.ip_address == ip_json.ip){
               alreadySent = true
            }
         });
         if(!alreadySent){
            //updateDB()
            window.localStorage.setItem('unique', 'visited')
         }
      }
   }
</script>

<slot></slot>
<br><br>
