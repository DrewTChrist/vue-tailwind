<script setup>
import Navbar from './components/NavbarComponent.vue'
import NavbarLink from './components/NavbarLink.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar>
        <template #links="{ toggle }">
          <NavbarLink :toggle="toggle" linkText="Home" routeName="home" path="/" />
          <NavbarLink :toggle="toggle" linkText="About" routeName="about" path="/about" />
        </template>
      </Navbar>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
