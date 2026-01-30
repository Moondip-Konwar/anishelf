<script lang="ts">
  let { text, symbol = "play_arrow" } = $props();
</script>

<button
  class="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-black"
>
  <span class="material-symbols-outlined">{symbol}</span>
  {text}
</button>
