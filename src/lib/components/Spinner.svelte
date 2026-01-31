<script>
  let { size = "size-12", stroke = "border-4" } = $props();
</script>

<div class="flex items-center justify-center p-4 h-screen">
  <div
    class="{size} {stroke} animate-spin rounded-full border-surface border-t-primary"
    role="status"
    aria-label="loading"
  ></div>
</div>
