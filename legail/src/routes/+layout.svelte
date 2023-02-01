<script>
	import Nav from './components/Nav.svelte'
	import Footer from './components/Footer.svelte';
	import '../app.css'
</script>
<div class="main-grid">
	<Nav />
	<div class="content">
		<slot></slot>
	</div>
	<Footer />
</div>