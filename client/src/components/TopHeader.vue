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
  width: 99vw;
  justify-content: center;
  background-color: #fff;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1250px;
  padding: 0 20px;
  height: 40px;
  color: #3c9df2;
}

@media (max-width: 1280px) {
  .top {
    justify-content: space-around;
    width: 1240px;
    padding: 0;
    gap: 420px;
  }
}
@media (max-width: 768px) {
  .top {
    justify-content: space-around;
    width: 768px;
    padding: 0;
    gap: 280px;
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
