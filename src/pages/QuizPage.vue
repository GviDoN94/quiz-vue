<script setup>
  import QuestionHeader from '@/components/QuestionHeader.vue';
  import QuestionItem from '@/components/QuestionItem.vue';
  import { useRoute } from 'vue-router';
  import quizesData from '@/data/data.json';
  import { ref } from 'vue';

  const route = useRoute();
  const quizId = +route.params.id;
  const questions = quizesData.find((quiz) => quiz.id === quizId).questions;
  const currentQuestionIndex = ref(0);
  const questionStatus = `${currentQuestionIndex.value}/${questions.length}`;
</script>

<template>
  <div>
    <QuestionHeader :questionStatus="questionStatus" />
    <div>
      <QuestionItem :question="questions[currentQuestionIndex]" />
    </div>
  </div>
</template>
