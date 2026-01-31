<script>
  import { resolve } from "$app/paths";
</script>

<nav class="h-15 w-full bg-surface flex flex-row items-center">
  <!-- Menu Button  -->
  <span class="nav-item material-symbols-outlined text-primary-text">
    menu
  </span>

  <!-- Title  -->
  <a
    href={resolve("/")}
    class="nav-item text-primary flex flex-row items-center gap-2"
  >
    <span class="material-symbols-outlined"> circle_circle </span>
    <span class="text-xl font-black">Anishelf</span>
  </a>

  <!-- Nav Buttons: Desktop -->
  <div class="hidden md:flex flex-row items-center text-secondary-text">
    <button class="nav-button">New</button>
    <button class="nav-button">Popular</button>
    <button class="nav-button">Discover</button>
    <button class="nav-button">Continue</button>
  </div>

  <!-- Middle empty space -->
  <div class="w-full"></div>

  <!-- Actions -->
  <div class="flex flex-row items-center text-secondary-text">
    <a href={resolve("/search")}>
      <span class="material-symbols-outlined nav-button">search</span>
    </a>
    <span class="material-symbols-outlined nav-button">account_circle</span>
  </div>
</nav>

<style>
  .nav-item {
    margin: 0 1rem;
  }

  .nav-button {
    height: 100%;
    padding: 2rem 1rem;
  }

  .nav-button:hover {
    background-color: var(--color-background);
    color: white;
  }
</style>
