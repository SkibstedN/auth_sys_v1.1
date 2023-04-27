<script>
  import { getContext } from "svelte";
  import { Route } from "svelte-navigator";
  import { user } from "$src/stores/userStore.js"; 
  const { component, ...routeProps } = $$props;
  const { navigate } = getContext("svelte-navigator");

  let isAuthenticated = false;
  user.subscribe((user) => {
    isAuthenticated = user !== null;
  });

  $: if (!isAuthenticated) {
    navigate("/login", { replace: true });
  }
</script>

<Route {...routeProps} component={isAuthenticated ? component : null} />
