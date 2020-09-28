<template>
	<div>
		<h1>Login</h1>
		<form @submit.prevent="handleSubmit">
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
				<button type="submit">LogIn</button>
			</div>
		</form>
	</div>
</template>

<script>
	// @ is an alias to /src

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
				localStorage.setItem('formData', this.formData);
				this.$router.push('about');
			},
		},
	};
</script>
