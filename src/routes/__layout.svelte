<script context="module">
   import supabase from '$lib/db'
   export async function load(){
      const { data, error } = await supabase.from('unique_visitors').select('ip_address')
      return {props:{data}}
   }
</script>

<script>
   import "$lib/style/style.css";
   import { browser } from '$app/env';
   export let data

   async function updateDB(){
      let request = await fetch('../api/unique_visitors')
      let json = await request.json()
      console.log(json)
   }

   if(browser){
      let cookie = window.localStorage.getItem('unique');
      if(!cookie){
         let alreadySent = false;
         data.forEach(address => {
            if(address.ip_address == json.ip){
               alreadySent = true
            }
         });
         if(!alreadySent){
            updateDB()
            window.localStorage.setItem('unique', 'visited')
         }
      }
   }
</script>

<slot></slot>
<br><br>
