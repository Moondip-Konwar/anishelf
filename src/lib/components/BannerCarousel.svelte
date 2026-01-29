<script lang="ts">
  import type { Anime } from "$lib/api";
  interface Props {
    animes: Anime[];
  }

  let { animes }: Props = $props();

  let anime = $derived(animes.find((a) => a.bannerImage));
  const truncate = (text: string, len = 305) =>
    text.length > len ? text.slice(0, len) + "…" : text;
</script>

{#if anime}
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Banner -->
    <div class="banner">
      <img
        src={anime.bannerImage}
        alt={anime.title.romaji}
        class="banner-img"
      />
      <div class="banner-overlay"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 flex h-full items-end md:items-center px-6 md:px-16 pb-24 md:pb-0"
    >
      <div class="max-w-xl space-y-4">
        <h1 class="text-3xl text-primary-text md:text-5xl font-bold">
          {anime.title.english ?? anime.title.romaji}
        </h1>

        <p class="text-sm text-secondary-text">
          {anime.genres.slice(0, 3).join(" • ")}
          {#if anime.episodes}
            • {anime.episodes} eps
          {/if}
        </p>

        {#if anime.description}
          <p class="text-sm md:text-base text-secondary-text">
            {truncate(anime.description.replace(/<[^>]+>/g, ""))}
          </p>
        {/if}

        <button
          class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-black hover:opacity-90"
        >
          <span class="material-symbols-outlined">play_arrow</span>
          Start Watching
        </button>
      </div>
    </div>
  </section>
{/if}

<style>
  .banner-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .banner-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;

    background:
    /* Left fade */
      linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 0) 80%
      ),
      /* Bottom fade */
        linear-gradient(
          to top,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.8) 25%,
          rgba(0, 0, 0, 0) 55%
        );
  }

  .banner {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
