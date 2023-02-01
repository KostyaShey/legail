<script>
    export let content = '';
    export let position = '';
	let isHovered = false;
	let x;
	let y;
    let alignment;
	
	function mouseOver(event) {
		isHovered = true;
        if (position == 'left') {
            x = window.innerWidth - event.pageX;
            alignment = "right"
        } else {
            x = event.pageX;
            alignment = "left"
        }
		y = event.pageY - 40;
	}
	function mouseMove(event) {
		if (position == 'left') {
            x = window.innerWidth - event.pageX;
            alignment = "right"
        } else {
            x = event.pageX;
            alignment = "left"
        }
		y = event.pageY - 40;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div class="test"
	on:mouseover={mouseOver}
    on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; {alignment}: {x}px;" class="tooltip">{content}</div>
{/if}

<style>
	.tooltip {
		border: 1px solid #ddd;
		box-shadow: 1px 1px 1px #ddd;
		background: white;
		border-radius: 4px;
		padding: 4px;
		position: absolute;
        z-index: 1;
	}
</style>