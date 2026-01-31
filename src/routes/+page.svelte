<script lang="ts">
  import { onMount } from "svelte";
  import { fetch_trending_animes } from "$lib/api";
  import type { Anime } from "$lib/api";

  import BannerCarousel from "$lib/components/BannerCarousel.svelte";
  import AnimeSection from "$lib/components/AnimeSection.svelte";
  import Spinner from "$lib/components/Spinner.svelte";

  let trending_animes: Anime[];

  onMount(async () => {
    trending_animes = await fetch_trending_animes();
  });
</script>

{#if trending_animes}
  <BannerCarousel initial_animes={trending_animes} />
  <AnimeSection title="Trending Right now" animes={trending_animes}
  ></AnimeSection>
{:else}
  <Spinner></Spinner>
{/if}
