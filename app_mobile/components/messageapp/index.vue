<template>
    <v-snackbar
    :timeout="2000"
    v-model="useApp().message.show"
    :color="useApp().message.color"
    location="bottom end"
  >
     <span>{{ useApp().message.text}}</span>
  </v-snackbar>

</template>

<script setup>

import { useApp } from '../../stores/app';

</script>