<template>
  <div class="wrapper">
    <router-link to="/"><div class="logo"></div></router-link>

    <div class="wrapper_title-content">
      <h1 class="title">Ошибка 404</h1>
      <div class="content">
        Что-то пошло не так. Возможно, вы ошиблись, набирая адрес в строке
        браузера — так бывает. Если вы уверены, что адрес набран верно, то
        страница, скорее всего, была удалена и ее больше нет.
      </div>
      <p>
        Но не отчаивайтесь! Смело обращайтесь за помощью в сообщество поддержки
        или перейдите на <router-link to="/">главную страницу.</router-link>
      </p>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1320px;
  padding: 0 20px;
  box-sizing: border-box;
  color: black;
}
.wrapper_title-content {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  width: 640px;
}

.content {
  display: flex;
  font-size: 16px;
  line-height: 1.5;
  color: #222324;
}

.logo {
  width: 65px;
  height: 35px;
  background-image: url('./src/assets/hh.kz__min_gray.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 25px 0px 0px 95px;
}
</style>
