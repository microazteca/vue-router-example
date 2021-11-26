<template>
	<div class="contact">
		<h1>This is a contact page</h1>
		<p>Actually, create another view was easier that I thought. But I'm gonna create a component to import here and we will see if it still being easy.</p>
		<h1>This is the component that I created:</h1>
		<SocialMedia/>
	</div>
</template>

<script>
import SocialMedia from "@/components/SocialMedia.vue"

export default {
	components: {
		SocialMedia
	},
}
</script>
