<script lang="ts">
  import { resolve } from "$app/paths";
  import type { Anime } from "$lib/api";

  // Load props
  interface Props {
    anime: Anime;
  }
  let { anime }: Props = $props();
</script>

{#if anime}
  <a href={resolve(`/${anime.id}`)} class="anime-card">
    <img
      src={anime.coverImage.large}
      alt={anime.title.english ?? anime.title.romaji}
    />

    <p class="text-primary-text font-bold">
      {anime.title.english ?? anime.title.romaji}
    </p>
    {#if anime.episodes}
      <p class="text-secondary-text">{anime.episodes} Episodes</p>
    {/if}
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
    transform: scale(1.02);
    z-index: 50;
  }

  .anime-card:hover > p {
    color: var(--color-primary);
  }

  .anime-card:hover > img {
    /* First shadow: 0 offset, 0 blur, 4px spread (matches background color)
     Second shadow: 0 offset, 0 blur, 6px spread (the actual "border" color)
  */
    box-shadow: 0 0 0 2px var(--color-primary);

    /* Smooth out the transition */
    transition: box-shadow 0.3s ease;
  }
</style>
