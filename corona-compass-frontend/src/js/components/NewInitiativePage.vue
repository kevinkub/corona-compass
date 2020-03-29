<template>
  <div class="container mt-5">
    <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shroD98L9SlzVKFPG?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="2048" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
</template>

<script>
export default {
    created: function () {
        var embedderScript = document.createElement('script');
        embedderScript.setAttribute('src','https://static.airtable.com/js/embed/embed_snippet_v1.js');
        document.head.appendChild(embedderScript);
    }
};
</script>

<style scoped>
</style>
