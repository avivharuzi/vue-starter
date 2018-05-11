<template>
  <div class="error-page mt-5">
    <h1>404</h1>
    <h2>Sorry, the page you are looking for does not exist</h2>
    <router-link tag="span" to="/">
      <button class="btn btn-lg mt-5">BACK TO HOME</button>
    </router-link>
  </div>
</template>

<style lang="scss">
  .error-page {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    text-align: center;

    h1,
    h2 {
      margin: 0;
    }

    h1 {
      font-size: 12.5rem;
      color: #333;
    }

    h2 {
      font-size: 1.5rem;
      color: #777;
    }
  }

  @media only screen and (max-width: 768px) {
    .error-page {
      h1 {
        font-size: 7.5rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .error-page {
      h1 {
        font-size: 5rem;
      }

      h2 {
        font-size: 0.75rem;
      }
    }
  }
</style>
