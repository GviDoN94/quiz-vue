<script setup>
  const { questionStatus, barPrecentage } = defineProps([
    'questionStatus',
    'barPrecentage',
  ]);
</script>

<template>
  <header>
    <h4>Question {{ questionStatus }}</h4>
    <div class="bar">
      <div
        class="completion"
        :style="{ width: barPrecentage }"
      ></div>
    </div>
  </header>
</template>

<style scoped>
  header {
    margin-top: 20px;
  }

  header h4 {
    font-size: 30px;
  }

  .bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
  }

  .completion {
    width: 0;
    height: 100%;
    background-color: bisque;
  }
</style>
