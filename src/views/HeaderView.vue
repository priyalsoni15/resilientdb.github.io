<template>
	<div class="header">
		<div class="logo" style="display: flex; align-items: center">
			<img src="@/assets/resilientdb_logo_light-text-modern.svg" class="logo" alt="ResilientDB" />
		</div>
		<div class="tabs" style="display: flex">
			<horizontal-menu-bar />
		</div>
	</div>
</template>

<script>
	import HorizontalMenuBar from "@/views/menu/HorizontalMenuBar.vue";
	export default {
		name: "HeaderView",
		components: { HorizontalMenuBar },
	};
</script>

<style scoped lang="scss">
	@import "@/styles/variables.scss";

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 40px;
		// background: $secondary-color-dark;
		background: #000103;
	}
	@media (max-width: 725px) {
		.header {
			display: inline;
		}

		.header .logo {
			justify-content: center;
			width: 80px;
		}

		.header .tabs {
			justify-content: center;
			margin-top: 1rem;
		}
	}
	.header .title {
		margin-left: 10px;
		font-size: 20px;
		font-weight: bold;
		color: #fff;
	}

	.version {
		margin-top: -7px;
		display: flex;
		justify-content: flex-end;
		font-weight: 500;
		font-size: 14px;
		color: $primary-color;
	}
</style>
