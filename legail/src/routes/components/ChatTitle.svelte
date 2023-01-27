<script>
    export let title;
    export let minimizedToggle;
    export let minimizedState;
</script>

<div class="chatTitle centered">
    <p>{title}</p>
    <div class="clickableIcon" on:click={minimizedToggle}>
        {#if minimizedState}
            <i class="mi mi-chevron-down" ><span class="u-sr-only"></span></i>
        {:else}
            <i class="mi mi-chevron-up"><span class="u-sr-only"></span></i>
        {/if}
    </div>
</div>

<style>
    .chatTitle {
        box-shadow: 1px 5px 10px black;
        justify-content: space-between;
        padding: 1% 5%;

    }
</style>