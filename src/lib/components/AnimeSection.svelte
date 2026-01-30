<script lang="ts">
  import type { Anime } from "$lib/api";
  import AnimeCard from "./AnimeCard.svelte";

  // Load props
  interface Props {
    title: string;
    animes: Anime[];
  }
  let { title, animes }: Props = $props();
</script>

<div class="m-8 md:m-16">
  <h1 class="text-3xl font-bold text-white mb-4">{title}</h1>
  {#if animes}
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      {#each animes as anime}
        <AnimeCard {anime}></AnimeCard>
      {/each}
    </div>
  {/if}
</div>
