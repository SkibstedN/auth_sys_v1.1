<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-navigator';
    import toastr from 'toastr';
    import { user } from "../stores/userStore.js";

    user.set(null);
  
    onMount(async () => {
      try {
        const response = await fetch('http://localhost:5000/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          toastr.success('Logged out successfully!');
          localStorage.removeItem('user');
          navigate('/login');
        } else {
          const errorData = await response.json();
          toastr.error(`Logout failed: ${errorData.message}`);
        }
      } catch (error) {
        toastr.error(`Logout failed: ${error.message}`);
      }
    });
  </script>
  
  
  <p>Logging out...</p>