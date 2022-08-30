<template>
  <div class="wrapper">
    <router-link to="/"><div class="logo"></div></router-link>

    <div class="wrapper_content">
      <div class="wrapper_title-content">
        <h1 class="title">Ошибка 404</h1>
        <div class="content">
          Что-то пошло не так. Возможно, вы ошиблись, набирая адрес в строке
          браузера — так бывает. Если вы уверены, что адрес набран верно, то
          страница, скорее всего, была удалена и ее больше нет.
        </div>
        <p class="content">
          Но не отчаивайтесь! Смело обращайтесь за помощью в сообщество
          поддержки или перейдите на
          <router-link to="/">главную страницу.</router-link>
        </p>
        <div>
          <ul class="error-links">
            <li class="error-links__item">
              <router-link to="/">Поиск вакансий</router-link>
            </li>
            <li class="error-links__item">
              <router-link to="/about">Поиск резюме</router-link>
            </li>
            <li class="error-links__item">
              <router-link to="/contacts">Новости</router-link>
            </li>
            <li class="error-links__item">
              <router-link to="/contacts">Статьи</router-link>
            </li>
            <li class="error-links__item">
              <router-link to="/contacts">Все сервисы</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="not-found">
        <!-- <img src="../assets/man__min_.png" alt="404" class="not-found" /> -->
      </div>
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

.wrapper_content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 15px;
}
.wrapper_title-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  width: 610px;
  color: #303233;
  padding: 0 15px;
}

.title {
  /*   margin: 0;
  padding: 0; */
  font-size: 32px;
  line-height: 1.12;
  font-family: ProximaNovaCond, Arial Narrow, Roboto Condensed, Arial,
    sans-serif;
  font-weight: 700;
}

.content {
  font-size: 16px;
  line-height: 1.5;
}

.not-found {
  background: url('../assets/man__min_.png') 50%;
  height: 267px;
    width: 200px;
  
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

.error-links {
  list-style: none;
  margin: 0px;
  padding: 0px;
  /* margin-bottom: 20px; */
}

.error-links__item {
  line-height: 1.43;
  font-size: 14px;
  /* margin-left: 20px; */
  line-height: 26px;
}

.error-links__item::before {
  content: '—';
  margin-right: 5px;
}
</style>
