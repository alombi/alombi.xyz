<script>
   export let show;
   export let lang
   export let destination;

   let back = "Back";
   if(lang == 'it'){
      back = "Indietro"
   }
</script>

<div class="header">
   {#if show}
      <a class="button" href={destination}><i class="fas fa-chevron-left"></i> {back}</a>
   {/if}
</div>