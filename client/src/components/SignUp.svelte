<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-navigator';
    import toastr from 'toastr';
  
    let email = '';
    let username = '';
    let password = '';
  
    async function signUp() {
      try {
        const response = await fetch('http://localhost:5000/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, username, password }),
        });

        console.log('Response:', response);
  
        if (response.ok) {
          toastr.success('User created successfully!');
          navigate('/login');
        } else {
          const errorData = await response.json();
          toastr.error(`Sign up failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        toastr.error(`Sign up failed: ${error.message}`);
      }
    }
  </script>
  
  <h2>Sign Up</h2>
  <form on:submit|preventDefault="{signUp}">
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value="{email}" required />
  
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value="{username}" required />
  
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value="{password}" required />
  
    <button type="submit">Sign Up</button>
  </form>