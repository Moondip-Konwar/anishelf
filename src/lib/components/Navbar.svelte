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
    <a class="nav-button" href={resolve("/#new")}>New</a>
    <a class="nav-button" href={resolve("/#popular")}>Popular</a>
    <a class="nav-button" href={resolve("/#discover")}>Discover</a>
    <a class="nav-button" href={resolve("/#continue")}>Continue</a>
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
