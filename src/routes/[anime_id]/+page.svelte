<script lang="ts">
  import { page } from "$app/state";
  import type { Anime } from "$lib/api";
  import { fetch_anime_by_id } from "$lib/api";
  import { onMount } from "svelte";
  import PrimaryButton from "$lib/components/PrimaryButton.svelte";
  import Spinner from "$lib/components/Spinner.svelte";

  let anime_id: number = Number(page.params.anime_id);
  let anime: Anime;
  onMount(async () => {
    anime = await fetch_anime_by_id(anime_id);
  });
</script>

{#if anime}
  {#if anime.bannerImage}
    <img
      src={anime.bannerImage}
      alt={anime.title.romaji}
      class="w-full h-64 object-cover"
    />
  {/if}

  <div class="p-6 md:p-16 flex flex-col md:flex-row gap-8">
    <div class="flex-1 space-y-4">
      <h1 class="text-white text-3xl md:text-5xl font-bold">
        {anime.title.english ?? anime.title.romaji}
      </h1>

      <p class="text-sm text-gray-400">
        {anime.genres.slice(0, 3).join(" • ")}
        {#if anime.episodes}
          • {anime.episodes} eps
        {/if}
      </p>

      {#if anime.description}
        <p class="text-gray-300 leading-relaxed">
          {@html anime.description}
        </p>
      {/if}
      <PrimaryButton text="Start Watching"></PrimaryButton>
    </div>

    <div class="w-48 hidden md:block md:w-64 flex-shrink-0">
      <img
        src={anime.coverImage.large}
        alt={anime.title.romaji}
        class="rounded-lg shadow-xl"
      />
    </div>
  </div>
{:else}
  <Spinner></Spinner>
{/if}
