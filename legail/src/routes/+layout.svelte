<script>
	import Nav from './components/Nav.svelte'
	import Footer from './components/Footer.svelte';
	import '../app.css'
</script>
<div class="main-grid">
	<div class="navigation">
		<Nav />
	</div>
	<div class="content">
		<slot></slot>
	</div>
	<Footer />
</div>