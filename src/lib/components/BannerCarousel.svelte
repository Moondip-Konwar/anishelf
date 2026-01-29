<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Anime } from "$lib/api";
  function shuffleArray<T>(array: T[]): T[] {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element using array destructuring.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  // 1. Props using the $props rune
  interface Props {
    animes: Anime[];
  }
  let { animes }: Props = $props();
  animes = shuffleArray(animes);

  // 2. Reactive state and derived values
  let index = $state(0);
  let banners = $derived(animes.filter((a) => a.bannerImage));

  // Current anime helper for cleaner template code
  let currentAnime = $derived(banners[index]);

  const truncate = (text: string, len = 305) =>
    text.length > len ? text.slice(0, len) + "…" : text;

  // 3. Carousel Logic
  function next() {
    index = (index + 1) % banners.length;
  }

  function prev() {
    index = (index - 1 + banners.length) % banners.length;
  }

  // 4. Lifecycle logic inside $effect
  $effect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  });
</script>

{#if banners.length}
  <section class="relative h-screen w-full overflow-hidden bg-black">
    <div class="banner">
      {#key index}
        <img
          in:fade={{ duration: 900 }}
          src={currentAnime.bannerImage}
          alt={currentAnime.title.romaji}
          class="banner-img"
        />
      {/key}
      <div class="banner-overlay"></div>
    </div>

    <button class="nav left" onclick={prev} aria-label="Previous">
      <span class="material-symbols-outlined">chevron_left</span>
    </button>

    <button class="nav right" onclick={next} aria-label="Next">
      <span class="material-symbols-outlined">chevron_right</span>
    </button>

    <div
      class="relative z-10 flex h-full items-end md:items-center px-6 md:px-16 pb-24 md:pb-0"
    >
      <div class="max-w-xl space-y-4">
        <h1 class="text-3xl md:text-5xl font-bold text-white">
          {currentAnime.title.english ?? currentAnime.title.romaji}
        </h1>

        <p class="text-sm text-gray-300">
          {currentAnime.genres.slice(0, 3).join(" • ")}
          {#if currentAnime.episodes}
            • {currentAnime.episodes} eps
          {/if}
        </p>

        {#if currentAnime.description}
          <p class="text-sm md:text-base text-gray-300">
            {truncate(currentAnime.description.replace(/<[^>]+>/g, ""))}
          </p>
        {/if}

        <button
          class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-black hover:bg-gray-200 transition-colors"
        >
          <span class="material-symbols-outlined">play_arrow</span>
          Start Watching
        </button>
      </div>
    </div>
  </section>
{/if}

<style>
  .banner {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .banner-img {
    position: absolute; /* Needed for crossfade overlap */
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .banner-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0) 100%
      );
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 9999px;
    padding: 0.75rem;
    color: white;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .nav.left {
    left: 1rem;
  }
  .nav.right {
    right: 1rem;
  }
</style>
