<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Anishelf</title>
</svelte:head>

<!-- Mobile Blocker -->
<div
	class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/60 p-6 text-center backdrop-blur-md md:hidden"
>
	<div
		class="max-w-xs rounded-2xl bg-background p-8 shadow-2xl border border-primary"
	>
		<h1 class="text-2xl font-bold text-white">Desktop Only</h1>
		<p class="mt-2 text-secondary-text">
			Anishelf is currently not optimized for mobile devices. Please visit us on
			a laptop or desktop.
		</p>
	</div>
</div>

<!-- Main Body -->
<div class="md:block overflow-hidden md:overflow-auto h-screen md:h-auto">
	<Navbar />
	{@render children()}
	<Footer />
</div>

<style>
	/* Disable scrolling on mobile by targeting the html/body when screen is small */
	@media (max-width: 767px) {
		:global(body) {
			overflow: hidden;
		}
	}
</style>
