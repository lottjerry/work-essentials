<template>
  <div>
    <v-container class="h-screen mt-10">
      <v-card variant="outlined" height="500" width="350">
        <div class="d-flex pa-5 ga-5 bg-primary">
          <!-- Logo Begin -->

          <div class="d-flex flex-column">
            <div class="d-flex justify-center">
              <v-icon size="x-small" icon="mdi-calendar-month-outline"></v-icon>
            </div>

            <div class="d-flex ga-5 justify-center">
              <v-icon size="x-small" icon="mdi-qrcode-scan"></v-icon>

              <v-icon size="x-small" icon="mdi-barcode-scan"></v-icon>
            </div>

            <div class="d-flex justify-center">
              <v-icon size="x-small" icon="mdi-cellphone"></v-icon>
            </div>
          </div>

          <!-- Logo End -->

          <div>
            <h4>Work</h4>

            <h4>Essentials</h4>
          </div>
        </div>

        <!-- Profile Picture -->

        <div class="d-flex align-center pa-2 justify-center ma-2">
          <v-icon icon="mdi-account" size="75"></v-icon>
        </div>

        <!-- Profile End -->

        <!-- Name and Title -->

        <div
          class="d-flex flex-column align-center ga-2 pa-2 mb-5 justify-center"
        >
          <p class="text-h5">Display Name</p>

          <v-btn
            @click="toggleDisplayNameOverlay"
            density="compact"
            variant="text"
            class="text-h6"
            >{{ displayName }}</v-btn
          >
        </div>

        <!-- Name and Title End-->

        <!-- User Info Begin -->

        <div
          class="d-flex flex-column pa-10 ga-5 bg-primary justify-center border"
        >
          <div class="d-flex flex-column align-center justify-center">
            <p class="text-h6">Email</p>

            <p class="text-body-2">sandra.bullock@workeseentials.com</p>
          </div>

          <div class="d-flex flex-column align-center justify-center">
            <p class="text-h6">Organization ID</p>

            <p class="text-body-2">CM-6065</p>
          </div>
        </div>

        <!-- User Info End -->

        <!-- Display Name Overlay Begin -->

        <v-overlay
          v-model="displayNameOverlay"
          class="align-center justify-center"
          persistent
          contained
        >
          <!-- Display Name Overlay Content Begin-->

          <v-container>
            <v-confirm-edit v-model="displayName" color="primary">
              <template
                v-slot:default="{ model: proxyModel, save, cancel, isPristine }"
              >
                <v-card
                  title="Edit Display Name"
                  width="300"
                  class="d-flex flex-column"
                >
                  <template v-slot:text>
                    <v-text-field
                      base-color="primary"
                      color="primary"
                      class="mt-3"
                      v-model="proxyModel.value"
                      variant="outlined"
                      label="Display Name"
                    ></v-text-field>
                  </template>

                  <div class="d-flex ma-3 justify-end">
                    <v-btn
                      color="error"
                      variant="plain"
                      @click="
                        () => {
                          cancel()
                          toggleDisplayNameOverlay()
                        }
                      "
                      >Cancel</v-btn
                    >
                    <v-btn
                      :color="!isPristine ? 'primary' : 'gray'"
                      :disabled="isPristine"
                      variant="plain"
                      @click="
                        () => {
                          save()
                          toggleDisplayNameOverlay()
                        }
                      "
                      >Ok</v-btn
                    >
                  </div>
                </v-card>
              </template>
            </v-confirm-edit>
          </v-container>

          <!-- Display Name Overlay Content End -->
        </v-overlay>

        <!-- Display Name Overlay End -->
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { shallowRef } from 'vue'

  definePageMeta({
    layout: 'auth-layout',
  })

  const displayName = shallowRef('Sandy')

  const displayNameOverlay = ref(false)

  const toggleDisplayNameOverlay = () => {
    displayNameOverlay.value = !displayNameOverlay.value
  }
</script>
