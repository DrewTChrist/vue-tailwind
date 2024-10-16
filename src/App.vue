<script setup>
import FlyoutMenu from './components/FlyoutMenu/FlyoutMenu.vue'
import FlyoutMenuItem from './components/FlyoutMenu/FlyoutMenuItem.vue'
import Navbar from './components/NavbarComponent/NavbarComponent.vue'
import NavbarLink from './components/NavbarComponent/NavbarLink.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar>
        <template #links="{ toggleDropdown }">
          <NavbarLink
            :toggle="toggleDropdown"
            linkText="Home"
            routeName="home"
            path="/"
          />
          <FlyoutMenu>
            <FlyoutMenuItem
              title="Integrations"
              description="Integrate your technologies and data"
            >
              <template #icon>
                <svg
                  class="size-6 h-6 w-6 text-gray-600 dark:text-white group-hover:text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </template>
            </FlyoutMenuItem>
          </FlyoutMenu>
          <NavbarLink
            :toggle="toggleDropdown"
            linkText="About"
            routeName="about"
            path="/about"
          />
        </template>
      </Navbar>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
