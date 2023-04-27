<script>
  import { getContext } from "svelte";
  import { Route } from "svelte-navigator";
  import auth from "../stores/authStore.js";

  const { component, ...routeProps } = $$props;
  const { navigate } = getContext("svelte-navigator");

  let isAuthenticated = false;

  $: {
    auth.subscribe((value) => {
      isAuthenticated = value;
      if (!isAuthenticated) {
        navigate("/login", { replace: true });
      }
    })();
  }
</script>

<Route {...routeProps} let:params let:location let:navigate>
  {#if isAuthenticated}
    <svelte:component
      this={component}
      params={params}
      location={location}
      navigate={navigate}
      {...$$props}
    />
  {/if}
</Route>
