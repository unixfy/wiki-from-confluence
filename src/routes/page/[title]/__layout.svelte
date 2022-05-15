<script>
	import Sidenav from '$components/Sidenav.svelte';
</script>

<div class="page-wrapper">
	<div class="ct">
		<div class="grid sm:grid-cols-7 gap-8 mt-4">
			<div class="col-span-2">
				<Sidenav />
			</div>
			<div class="col-span-5">
				<slot />
			</div>
		</div>
	</div>
</div>
