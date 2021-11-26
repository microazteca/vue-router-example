<template>
  <div class="gallery">
    <h1>I collected a few memes about Vue and Vue Router...</h1>
    <p>... because people say that you should make fun of your tragedies.</p>
    <div class="grid">
      <img src="@/assets/vue-build.webp" alt="" />
      <img src="@/assets/vue-canthelp.jpg" alt="" />
      <img src="@/assets/vue-meme.png" alt="" />
      <img src="@/assets/vue-news.jpg" alt="" />
      <img src="@/assets/vue-vuex.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
		align-items: center;
		justify-items: center;
}

img{
	width: 300px;
}
</style>