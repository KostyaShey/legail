<script>
    import Tooltip from "./Tooltip.svelte";
</script>

<div class="chatInput">
    <Tooltip position="right" content= "Please log in in order to ask further questions."><input class="inputText inputReadonly" type="input" readonly name="name" /></Tooltip>
    <Tooltip position= "left" content="Please log in in order to ask further questions."><button><i class="mi mi-lock" ><span class="u-sr-only"></span></i></button></Tooltip>
</div>

<style>

    .chatInput {
            display: grid;
            grid-template-columns: repeat(2, 85% 5%);
            grid-gap: 5%;
            padding: 5% 5%;
        }

    

</style>