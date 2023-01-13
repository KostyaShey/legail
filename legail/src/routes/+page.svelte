<script>
    import Catimage from "./Catimage.svelte";
    let dimentions = {width:'500', height:'300'}
</script>


<h1>Welcome to Penis</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class='inputs'>
    <input type="number" id='width' name='width' bind:value="{dimentions.width}">
    <input type="number" id='width' name='width' bind:value="{dimentions.height}">
</div>
<div>
    <Catimage width={dimentions.width} height={dimentions.height}/>
</div>

<style>
    .inputs {
  padding-bottom: 1rem;
}
</style>