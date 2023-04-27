<script>
  import { navigate } from 'svelte-navigator';
  import toastr from 'toastr';
  import { user } from "../stores/userStore.js";
  import auth from "../stores/authStore.js";

  let email = '';
  let password = '';

  async function login() {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const username = data.user.username;

        // Update both stores
        user.set({ email, username });
        auth.set(true);

        toastr.success('Logged in successfully!');
        navigate('/protected');
      } else {
        const errorData = await response.json();
        toastr.error(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      toastr.error(`Login failed: ${error.message}`);
    }
  }
</script>

<h2>Login</h2>
<form on:submit|preventDefault="{login}">
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value="{email}" required />

  <label for="password">Password:</label>
  <input type="password" id="password" bind:value="{password}" required />

  <button type="submit">Login</button>
</form>