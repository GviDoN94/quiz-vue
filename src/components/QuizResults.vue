<script setup>
  import { RouterLink } from 'vue-router';

  const { amountQuestions, rightAnswers } = defineProps([
    'amountQuestions',
    'rightAnswers',
  ]);
</script>

<template>
  <div class="results">
    <p>Your results...</p>
    <h1>{{ rightAnswers }}/{{ amountQuestions }}</h1>
    <RouterLink to="/">Go Back</RouterLink>
  </div>
</template>

<style scoped>
  .results {
    text-align: center;
    padding: 100px 0;
  }

  p {
    font-size: 25px;
  }

  h1 {
    font-size: 80px;
  }
</style>
