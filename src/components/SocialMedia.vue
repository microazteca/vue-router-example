<template>
  <div class="social-media">
    <h2>You can contact me here:</h2>
    <div class="links">
      <a href="https://www.twitter.com/microazteca" target="_blank">
        <img src="@/assets/icon_twitter.png" alt="" />
      </a>
      <a href="https://www.linkedin.com/in/aguilarperezbetania" target="_blank">
        <img src="@/assets/icon_linkedin.png" alt="" />
      </a>
      <a href="mailto:aguilarperezbetania@gmail.com" target="_blank">
        <img src="@/assets/icon_gmail.png" alt="" />
      </a>
    </div>
  </div>
</template>

<style>
.social-media {
  display: flex;
  flex-direction: column;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

img {
  width: 50px;
}
</style>