<script>
	
    export let width;
    export let height;
    $: src = 'https://placekitten.com/';
    const alt = "Picture of a cat";

</script>

<img src='{src}{width}/{height}' {alt}>

<p>width = {width}, height = {height}</p>
<p>width type = {(typeof width)}, height = {height}</p>