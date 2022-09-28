<script setup></script>

<template>
  <div class="wrapper">
    <div class="top">
      <div class="top-label">Казахстан</div>
      <div class="top-label__item">Хочу у вас работать</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: #fff;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  color: #3c9df2;
  gap: 75em;
}

@media (max-width: 1280px) {
  .top {
    justify-content: space-around;
    width: 80vw;
    padding: 0;
    gap: 50vw;
  }
}
@media (max-width: 768px) {
  .top {
    justify-content: space-around;
    padding: 0;
    gap: 54vw;
  }
}

.top-label {
  border-bottom: 1px dashed #3c9df2;
  cursor: pointer;
}

.top-label__item {
  color: #3c9df2;
  cursor: pointer;
}

.top-label__item:hover {
  color: rgb(252, 96, 96);
}
</style>
