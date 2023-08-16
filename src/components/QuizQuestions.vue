<script setup>
  const { question } = defineProps(['question']);
  const emit = defineEmits(['selectedOption']);

  const selectedOption = (value) => emit('selectedOption', value);
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="selectedOption(option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .question-container {
    margin-top: 20px;
  }

  .question {
    font-size: 40px;
  }

  .option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .option-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 30px;
    background-color: bisque;
  }

  .option-value {
    padding: 0 20px;
    width: 100%;
    font-size: 30px;
    background-color: rgb(244, 239, 239);
  }
</style>
