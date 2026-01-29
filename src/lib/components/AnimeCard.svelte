<script lang="ts">
  import type { Anime } from "$lib/api";

  // Load props
  interface Props {
    anime: Anime;
  }
  let { anime }: Props = $props();
</script>

{#if anime}
  <a href="/{anime.id}" class="anime-card">
    <img src={anime.coverImage.large} alt={anime.title.english} />

    <p class="text-primary-text font-bold">{anime.title.english}</p>
    <p class="text-secondary-text">{anime.episodes} Episodes</p>
  </a>
{/if}

<style>
  img {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
  }

  p {
    padding: 0.25rem;
  }
  .anime-card {
    transition: transform 0.1s ease;
    cursor: pointer;
  }

  .anime-card:hover {
    transform: scale(1.05);
    z-index: 50;
  }

  .anime-card:hover > p {
    color: var(--color-primary);
  }
</style>
