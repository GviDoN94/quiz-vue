<script setup>
  import QuizHeader from '@/components/QuizHeader.vue';
  import QuizItem from '@/components/QuizQuestions.vue';
  import QuizResults from '../components/QuizResults.vue';
  import { useRoute } from 'vue-router';
  import quizesData from '@/data/data.json';
  import { ref, computed } from 'vue';

  const route = useRoute();
  const quizId = +route.params.id;
  const questions = quizesData.find((quiz) => quiz.id === quizId).questions;
  const currentQuestionIndex = ref(0);
  const rightAnswers = ref(0);
  const showResults = ref(false);
  const questionStatus = computed(
    () => `${currentQuestionIndex.value}/${questions.length}`,
  );
  const barPrecentage = computed(
    () => `${(currentQuestionIndex.value / questions.length) * 100}%`,
  );

  const onSelectedOption = (value) => {
    if (value) {
      rightAnswers.value++;
    }

    if (questions.length - 1 === currentQuestionIndex.value) {
      showResults.value = true;
    }

    currentQuestionIndex.value++;
  };
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPrecentage="barPrecentage"
    />
    <div>
      <QuizItem
        v-if="!showResults"
        :question="questions[currentQuestionIndex]"
        @selectedOption="onSelectedOption"
      />
      <QuizResults
        v-else
        :amountQuestions="questions.length"
        :rightAnswers="rightAnswers"
      />
    </div>
  </div>
</template>
