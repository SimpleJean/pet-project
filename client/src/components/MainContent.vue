<script setup></script>

<template>
  <div class="bg-main"></div>
  <div class="main">
    <div class="main-content__header">
      <div class="main-content__item">
        <div class="logo1">
          <router-link to="/"></router-link>
        </div>
        <div class="navi-link">
          <a class="navi-link__item" href="#">Работодателям</a>
        </div>
        <div class="navi-link dashed">
          <a class="navi-link__item" href="#">Помощь</a>
        </div>
      </div>
      <div class="main-button-wrapper">
        <div class="create-btn">
          <router-link to="/cv" class="delete-link-styles"
            >Создать резюме</router-link
          >
        </div>
        <div class="enter-btn">
          <router-link to="/login" class="delete-link-styles__login">Войти</router-link>
        </div>
      </div>
    </div>
    <div class="main-content__search">
      <div class="focus-input">
        <div><h3 class="main-label-content">Найди работу мечты</h3></div>
        <div class="input-wrapper">
          <input
            class="input"
            type="search"
            autocomplete="off"
            name="q"
            placeholder="Профессия, должность или компания"
          />
          <span class="dynamic-search"
            ><a class="dynamic-search-icon" href="#"></a
          ></span>
          <button class="find-btn"><span>Найти работу</span></button>
        </div>
        <div class="find-string">Я ищу сотрудника</div>
      </div>
    </div>
    <div class="main-content__footer">
      <div class="main-content__bottom">
        <div class="row-direction">
          <div class="main-content__item-data">3 508 270</div>
          <div class="main-content__item-data">35 987</div>
          <div class="main-content__item-data">73 631</div>
        </div>
        <div class="main-content__bottom">
          <div class="row-direction">
            <div class="main-content__item-label">резюме</div>
            <div class="main-content__item-label">вакансии</div>
            <div class="main-content__item-label">компании</div>
          </div>
        </div>
      </div>
      <div class="row-direction">
        <div class="app-store-btn"></div>
        <div class="google-btn"></div>
        <div class="huawei-btn"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: rgb(255, 255, 255);
}

@media (max-width: 1280px) {
  .main {
    width: 100vw;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .main {
    padding: 0;
    margin: 0;
  }
}

.bg-main {
  width: 100%;
  position: absolute;
  background-image: url('src/assets/bg-applicant.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 50%;
  height: 614px;
  z-index: -100;
  left: 0px;
}

@media (max-width: 768px) {
  .bg-main {
    width: 100vw;
  }
}

.main-content__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 89em;
  min-height: 80px;
  margin-top: 35px;
}

@media (max-width: 1280px) {
  .main-content__header {
    width: 100vw;
    justify-content: space-around;
  }
}

@media (max-width: 768px) {
  .main-content__header {
    justify-content: space-around;
    margin-top: 25px;
  }
}

.main-content__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 89em;
  min-height: 75px;
  padding: 0 15px;
}

@media (max-width: 1280px) {
  .main-content__footer {
    width: 80vw;
    padding: 0px;
    justify-content: space-around;
    gap: 20px;
  }
}
@media (max-width: 1020px) {
  .main-content__footer {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .main-content__footer {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

.focus-input {
  width: 100%;
}

.main-content__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.main-content__search {
  display: flex;
  padding: 0 0px 60px 0px;
  min-height: 239px;
  background: rgba(0, 0, 0, 0);
  margin: 106px 125px 0 0;
}

@media (max-width: 1004px) {
  .main-content__search {
    padding: 0 0px 60px 15px;
    min-height: 180px;
    margin: 106px 0px 0 0;
  }
}

@media (max-width: 768px) {
  .main-content__search {
    padding: 0 0px 60px 15px;
    min-height: 180px;
    margin: 106px 0px 0 0;
  }
}

.main-label-content {
  font-size: 44px;
  font-family: 'Proxima Nova Condensed ExtraBold', Arial Narrow,
    Roboto Condensed, Arial, sans-serif;
  line-height: 1;
  font-weight: 800;
  margin: 0;
}

@font-face {
  font-family: 'Proxima Nova Condensed ExtraBold';
  font-style: normal;
  font-weight: normal;
  src: local('Proxima Nova Condensed ExtraBold'),
    url('../assets/fonts/Mark Simonson  Proxima Nova Extra Condensed Extrabold TheFontsMaster.com.woff')
      format('woff');
}

.input-wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
}

.find-btn {
  width: 175px;
  height: 48px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #1785e5;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .find-btn {
    width: 159px;
  }
}

.find-btn:hover {
  background-color: #1476cc;
  border-color: #1476cc;
}

.find-btn > span {
  color: #fff;
  font-size: 16px;
  line-height: 48px;
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}

.input {
  width: 43vw;
  height: 48px;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: rgb(255, 255, 255);
  padding: 0 10px;
  font-size: 16px;
  color: rgb(0, 0, 0);
}

@media (max-width: 768px) {
  .input {
    width: 410px;
  }
}

input:focus {
  outline: none;
  border-top: 1px solid #1785e5;
  border-left: 1px solid #1785e5;
  border-bottom: 1px solid #1785e5;
}

input::placeholder {
  color: #babdbf;
}

.find-string {
  font-size: 16px;
  font-family: ProximaNovaCond, Arial Narrow, Roboto Condensed, Arial,
    sans-serif;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 25px;
  cursor: pointer;
  text-underline-offset: 3px;
  text-decoration: underline;
  width: 140px;
}

.find-string:hover {
  color: red;
}

.dynamic-search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 48px;
  background-color: white;
  color: grey;
}
.dynamic-search-icon {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  text-decoration: none;
  background-image: url('../assets/filters-icon.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -27px 0;
}

.main-content__bottom {
  display: flex;
  flex-direction: column;
}

.main-content__item-data {
  font-size: 24px;
  margin-right: 30px;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .main-content__item-data:last-child {
    display: none;
  }
}

.main-content__item-label {
  font-size: 14px;
  margin-right: 30px;
  margin-bottom: 20px;
}
@media (max-width: 768px) {
  .main-content__item-label:last-child {
    display: none;
  }
}

.main-content__item-label:first-child {
  margin-right: 85px;
}

.main-content__item-label:last-child {
  margin-left: 15px;
}

.row-direction {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.logo {
  width: 65px;
  height: 35px;
  background-image: url('./src/assets/logo_min.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}

.navi-link {
  margin-left: 30px;
  user-select: none;
}

@media (max-width: 768px) {
  .navi-link {
    margin-left: 15px;
  }
}

.navi-link__item {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 16px;
}

.dashed {
  border-bottom: 1px dashed white;
}

@media (max-width: 768px) {
  .navi-link__item {
    font-size: 14px;
  }
}

.navi-link__item:hover {
  color: #4ebdf0;
}

.main-button-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.delete-link-styles {
  text-decoration: none;
  color: #a3daa5;
  font-size: 16px;
}

.delete-link-styles__login {
  text-decoration: none;
  color: #ffffff;
  /* font-size: 16px; */
}

@media (max-width: 768px) {
  .delete-link-styles {
    font-size: 14px;
  }
}

.create-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 148px;
  height: 38px;
  border: 1px solid rgba(163, 218, 165, 0.5);
  color: #a3daa5;
  border-radius: 30px;
  margin-right: 10px;
  padding: 0 12px;
  cursor: pointer;
  line-height: 38px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .create-btn {
    height: 34px;
    line-height: 32px;
    width: 100%;
  }
}

.create-btn:hover {
  border: 1px solid #e1f7e2;
}

.enter-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 68px;
  height: 38px;
  border: 1px solid hsla(0, 0%, 100%, 0.5);
  color: #ffffff;
  border-radius: 20px;
  background-color: rgba(177, 160, 54, 0);
  padding: 0 12px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .enter-btn {
    height: 34px;
    line-height: 32px;
    width: 40%;
  }
}

.enter-btn:hover {
  border: 1px solid #f8f8f8;
}

.google-btn {
  width: 140px;
  height: 40px;
  background-color: rgba(48, 50, 51, 0.2);
  background-image: url('../assets/google-store-buttons.svg');
  background-repeat: no-repeat;
  border: 1px solid #959799;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 10px;
}

.google-btn:hover {
  border: 1px solid #e1e1e1;
}

.app-store-btn {
  width: 140px;
  height: 40px;
  background-color: rgba(48, 50, 51, 0.2);
  background-image: url('../assets/app-store.svg');
  background-repeat: no-repeat;
  background-position: 0 -45px;
  border: 1px solid #959799;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 10px;
}

.app-store-btn:hover {
  border: 1px solid #e1e1e1;
}

.huawei-btn {
  width: 140px;
  height: 40px;
  background-color: rgba(48, 50, 51, 0.2);
  background-image: url('../assets/app-store.svg');
  background-repeat: no-repeat;
  background-position: 0 -90px;
  border: 1px solid #959799;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
}

.huawei-btn:hover {
  border: 1px solid #e1e1e1;
}
</style>
