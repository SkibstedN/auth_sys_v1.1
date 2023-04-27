<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
</svelte:head>

<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  //import Counter from './lib/Counter.svelte'
  import { Router, Link, Route } from 'svelte-navigator';
  import SignUp from './components/SignUp.svelte';
  import Login from './components/Login.svelte';
  import Logout from './components/Logout.svelte';
  import PrivateRoute from "./components/PrivateRoute.svelte";
  import Protected from '$src/pages/Protected.svelte';
  import AnotherProtected from '$src/pages/AnotherProtected.svelte';
</script>

<main>

  <h3>Velkommen til authapp, mandatory 2</h3>

  <Router>
    <nav>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
      <Link to="/protected">Protected</Link>
      <Link to="/another-protected">Another Protected</Link>
    </nav>
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/protected" component={Protected} />
    <Route path="/another-protected" component={AnotherProtected} />
  </Router>
  
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  

  <!--<div class="card">
    <Counter />
  </div>-->

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
