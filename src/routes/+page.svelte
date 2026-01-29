<script lang="ts">
  import { onMount } from "svelte";
  import { fetch_trending_animes } from "$lib/api";
  import BannerCarousel from "$lib/components/BannerCarousel.svelte";
  import type { Anime } from "$lib/api";

  let trending_animes: Anime[];

  onMount(async () => {
    trending_animes = await fetch_trending_animes();
  });
</script>

{#if trending_animes}
  <BannerCarousel animes={trending_animes} />
{/if}
