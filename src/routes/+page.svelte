<script lang="ts">
  import { onMount } from "svelte";
  import { fetch_sorted_anime } from "$lib/api";
  import type { Anime } from "$lib/api";

  import BannerCarousel from "$lib/components/BannerCarousel.svelte";
  import AnimeSection from "$lib/components/AnimeSection.svelte";
  import Spinner from "$lib/components/Spinner.svelte";

  let trending_animes: Anime[];
  let popular_animes: Anime[];

  onMount(async () => {
    trending_animes = await fetch_sorted_anime("TRENDING_DESC");
    popular_animes = await fetch_sorted_anime("POPULARITY_DESC");
  });
</script>

{#if trending_animes}
  <BannerCarousel initial_animes={trending_animes} />

  <div id="new">
    <AnimeSection title="Trending Right now" animes={trending_animes}
    ></AnimeSection>
  </div>
{:else}
  <Spinner></Spinner>
{/if}

{#if popular_animes}
  <div id="popular">
    <AnimeSection title="Popular Animes" animes={popular_animes}></AnimeSection>
  </div>
{:else}
  <Spinner></Spinner>
{/if}
