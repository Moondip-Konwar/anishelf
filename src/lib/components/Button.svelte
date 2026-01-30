<script lang="ts">
  let { text, symbol = "play_arrow", href = "", target = "_blank" } = $props();
</script>

<a {href} {target}>
  <button
    class="flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-black hover:bg-white transition-colors"
  >
    <span class="material-symbols-outlined">{symbol}</span>
    {text}
  </button>
</a>
