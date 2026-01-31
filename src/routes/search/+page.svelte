<script lang="ts">
  import { search_anime, type Anime } from "$lib/api";
  import AnimeSection from "$lib/components/AnimeSection.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { onMount } from "svelte";

  let search_term = $state("");
  let search_results = $state<Anime[]>([]);

  $effect(() => {
    if (search_term.length < 3) {
      search_results = [];
      return;
    }

    const handler = setTimeout(async () => {
      search_results = await search_anime(search_term, 1, 5);
    }, 300); // Wait 300ms after last keystroke

    return () => clearTimeout(handler);
  });
</script>

<div class="w-full p-4 pl-32 pr-32 bg-surface-2 flex flex-row gap-3">
  <input
    type="text"
    class="w-full text-secondary-text text-2xl outline-none border-b-2 border-surface focus:border-primary p-2"
    placeholder="Search"
    bind:value={search_term}
  />
</div>

{#if search_results.length > 0}
  <AnimeSection title="Results" animes={search_results}></AnimeSection>
{:else if search_term.length > 3}
  <!-- else if content here -->
  <Spinner></Spinner>
{/if}
