<script>
  import { resolve } from "$app/paths";

  const currentYear = new Date().getFullYear();
</script>

<footer class="text-slate-300 py-12 border-t border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-white">
          <span class="material-symbols-outlined text-orange-500 text-3xl">
            circle_circle
          </span>
          <span class="text-2xl font-bold tracking-tight">Anishelf</span>
        </div>
        <p class="text-sm leading-relaxed max-w-xs">
          A Crunchyroll inspired anime library. Discover, track, and organize
          your favorite series.
          <br />
          <br />
          This is still in heavy development therefore, many of the features are
          currently unavailable.
        </p>
        <div
          class="inline-block px-3 py-1 text-xs font-medium bg-surface-2 rounded-full border border-secondary-text"
        >
          MIT Licensed
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8 md:col-span-2">
        <div class="space-y-4">
          <h3 class="text-white font-semibold uppercase tracking-wider text-xs">
            Library
          </h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href={resolve("/search")}
                class="hover:text-orange-500 transition-colors">Search Anime</a
              >
            </li>
            <li>
              <a
                href={resolve("/")}
                class="hover:text-orange-500 transition-colors">Trending</a
              >
            </li>
            <li>
              <a
                href={resolve("/")}
                class="hover:text-orange-500 transition-colors">Seasonal</a
              >
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h3 class="text-white font-semibold uppercase tracking-wider text-xs">
            Community
          </h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/Moondip-Konwar/anishelf"
                class="hover:text-orange-500 transition-colors">GitHub</a
              >
            </li>
            <li>
              <a
                href="https://github.com/Moondip-Konwar/anishelf/commits/main/"
                class="hover:text-orange-500 transition-colors">Changelog</a
              >
            </li>
            <li>
              <a
                href="https://github.com/Moondip-Konwar/anishelf"
                class="hover:text-orange-500 transition-colors">Contribute</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
    >
      <p>
        <span class="text-secondary-text material-symbols-outlined"
          >copyright</span
        >
        {currentYear} Anishelf. Built with Svelte 5 & Tailwind 4.
      </p>
      <div class="flex gap-6">
        <a href={resolve("/")} class="hover:text-white">Privacy Policy</a>
        <a href={resolve("/")} class="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

<style>
  /* Optional: Fine-tune Material Icon alignment if needed */
  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 1,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24;
    vertical-align: middle;
  }
</style>
