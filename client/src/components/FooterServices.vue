<template>
  <div class="wrapper">
    <div class="footer-wrapper footer-wrapper__768">
      <div class="footer-wrapper__item">
        <p class="link-footer-top">Продвижение резюме</p>
      </div>
      <div class="footer-wrapper__item">
        <p class="link-footer-top">Хочу у вас работать</p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.wrapper {
  display: flex;
  /* width: 100vw; */
  justify-content: center;
  background-color: #edeff0;
  color: rgb(0, 0, 0);
  padding: 45px 0 25px 0;
  color: #303233;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

@media (max-width: 1280px) {
  .wrapper {
    width: 100vw;
  }
}

@media (max-width: 768px) {
  .wrapper {
    width: 100vw;
  }
}

.footer-wrapper {
  display: flex;
  width: 1280px;
  height: 100%;
}

@media (max-width: 1280px) {
  .footer-wrapper {
    width: 75vw;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .footer-wrapper {
    display: flex;
    width: 85vw;
    flex-wrap: wrap-reverse;
  }
}

@media (max-width: 768px) {
  .footer-wrapper__768 {
    display: flex;
    width: 80vw;
  }
}

.footer-wrapper__item {
  display: flex;
  flex-direction: column;
  width: 210px;
  padding: 0 15px;
  margin-bottom: 25px;
}

@media (max-width: 1280px) {
  .footer-wrapper__item {
    margin-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .footer-wrapper__item {
    padding: 0px;
  }
}

.footer-wrapper__item:first-child {
  margin-right: 85px;
}

.link-footer-top {
  line-height: 1.5;
  font-size: 16px;
  color: #3c9df2;
  cursor: pointer;
  margin: 0 0 10px 0;
}

.link-footer-top:hover {
  color: rgb(252, 96, 96);
}
</style>
