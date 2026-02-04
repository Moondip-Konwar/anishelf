<script lang="ts">
  import type { Anime } from "$lib/api";
  import AnimeCard from "./AnimeCard.svelte";

  interface Props {
    title: string;
    animes: Anime[];
  }

  let { title, animes }: Props = $props();

  // Use $state to silence the warning and follow Svelte 5 patterns
  let carouselRef = $state<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef) return;
    const amount =
      direction === "left" ? -carouselRef.offsetWidth : carouselRef.offsetWidth;
    carouselRef.scrollBy({ left: amount, behavior: "smooth" });
  };
</script>

<div class="m-8 md:mx-16 my-12 group relative">
  <div class="flex items-center justify-between mb-4">
    <h1 class="text-3xl font-bold text-white">{title}</h1>

    <div class="flex gap-2">
      <button
        onclick={() => scroll("left")}
        class="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors flex items-center justify-center"
      >
        <span class="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        onclick={() => scroll("right")}
        class="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors flex items-center justify-center"
      >
        <span class="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  </div>

  {#if animes}
    <div
      bind:this={carouselRef}
      class="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth snap-x"
    >
      {#each animes as anime}
        <div class="min-w-[150px] md:min-w-[200px] snap-start">
          <AnimeCard {anime} />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
