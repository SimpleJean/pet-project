<template>
  <TopHeader />
  <div class="bg-color"></div>
  <div class="wrapper-create-cv">
    <div class="main-content__header top-header">
      <div class="main-content__item">
        <div class="logo"></div>
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
          <router-link to="/login" class="delete-link-styles__login"
            >Войти</router-link
          >
        </div>
      </div>
    </div>
    <div class="signup">
      <h1>Регистрация соискателя</h1>
      <div class="signup-wrapper">
        <div class="signup-wrapper__item">
          <div class="signup-subtitle">Email или телефон</div>
          <form id="form-wrapper" role="search">
            <input
              class="form-control"
              type="searchText"
              v-model="searchText"
            />
          </form>
          <p>Messages from: {{ searchText }}</p>
        </div>
        <div class="signup-wrapper__item">
          <div class="free-space"></div>
          <div>
            <button class="registry-btn" v-bind:color="red">
              Зарегистрироваться
            </button>
          </div>
        </div>
        <div class="signup-wrapper__item">
          <div>
            <div class="signup-subtitle">Уже зарегистрированы?</div>
            <div>
              <router-link to="/login" class="enter-link">Войти</router-link>
            </div>
          </div>
          <div>
            <div class="signup-subtitle__second">
              Быстрое создание резюме через соцсеть
            </div>
            <div class="signup-social-media-wrapper">
              <span class="btn-social-media">
                <a href="">
                  <div class="social-media-icon__mail"></div>
                </a>
              </span>
              <span class="btn-social-media">
                <a href="">
                  <div class="social-media-icon__ok"></div>
                </a>
              </span>
              <span class="btn-social-media">
                <a href="">
                  <div class="social-media-icon__vk"></div>
                </a>
              </span>
              <span class="btn-social-media">
                <a href="">
                  <div class="social-media-icon__google"></div>
                </a>
              </span>
            </div>
          </div>
        </div>
        <!-- <div class="signup-wrapper__item">
          <div><a href="#" class="enter-link">Войти</a></div>
        </div> -->
        <div class="signup-wrapper__item">
          <div class="free-space"></div>
          <div class="signup-wrapper__item--title">
            Нажимая «Зарегистрироваться», вы подтверждаете, что ознакомлены и
            принимаете условия
            <a class="link-to-agreement" href="#">Соглашения</a>, и даете
            согласие на обработку персональных данных в соответствии с условиями
            Соглашения
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 25px;
  line-height: 2.12;
  font-family: ProximaNovaCond, Arial Narrow, Roboto Condensed, Arial,
    sans-serif;
  font-weight: 700;
  color: #303233;
  padding: 0px 15px;
  padding-bottom: 20px;
}

.top-header {
  padding: 0px 15px;
}
.wrapper-create-cv {
  width: 1280px;
  margin: 0 auto;
  color: #222324;
  /* background-color: #303233; */
}
.bg-color {
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: #222324;
  z-index: -1;
}

.main-content__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65.10416666666667vw;
  /* min-height: 80px; */
  margin-top: 20px;
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

.main-content__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 65px;
  height: 35px;
  background-image: url('./src/assets/logo_min.svg');
  background-size: contain;
  background-repeat: no-repeat;
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

.main-button-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.signup {
  padding: 50px 0;
}

.signup-wrapper__item {
  display: flex;
  padding-bottom: 25px;
}

.free-space {
  user-select: none;
  width: 240px;
  padding: 0 7px;
  /* background-color: #222324; */
}

.registry-btn {
  font-size: 16px;
  height: 48px;
  padding: 0 16px;
  font-family: inherit;
  line-height: 46px;
  background-color: #1785e5;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #d4d7d9;
  color: #ffffff;
}
.registry-btn:hover {
  background-color: #1267b2;
  text-decoration: none;
}

.signup-subtitle {
  display: flex;
  width: 240px;
  font-weight: 400;
  /* padding-top: 10px; */
  /* padding-bottom: 0; */
  color: #303233;
  font-family: Arial, sans-serif;
  line-height: 1.43;
  font-size: 14px;
  padding: 0px 0px 0px 15px;
  align-items: center;
}

.signup-subtitle__second {
  display: flex;
  flex-direction: row;
  font-weight: 400;
  color: #303233;
  font-family: Arial, sans-serif;
  line-height: 1.43;
  font-size: 14px;
  padding-bottom: 10px;
}

.form-control {
  width: 480px;
  height: 40px;
  background-color: #fff;
  line-height: 38px;
  border: 1px solid #babdbf;
  border-radius: 4px;
  font-family: Arial, sans-serif;
}

.form-control:focus {
  outline: none !important;
  border: 1px solid #3c9df2;
}

.enter-link {
  width: 240px;
  padding: 0 15px;
  text-decoration: none;
  color: #3c9df2;
  font-size: 16px;
}

a:active,
a:focus,
a:hover {
  color: #e53e3e;
  outline: none;
}

.btn-social-media {
  display: flex;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d4d7d9;
  width: 40px;
  height: 40px;
  margin-right: 8px;
}

.social-media-icon__ok {
  width: 24px;
  height: 24px;
  background: url('../../assets/image-signup/ok-socialicon__min_.svg');
  background-position: 0px;
  background-size: cover;
  margin: 8px;
}

.social-media-icon__mail {
  width: 24px;
  height: 24px;
  background: url('../../assets/image-signup/mail-socialicon__min_.svg');
  background-position: 0px;
  background-size: cover;
  margin: 8px;
}

.social-media-icon__vk {
  width: 24px;
  height: 24px;
  background: url('../../assets/image-signup/vk-socialicon__min_.svg');
  background-position: 0px;
  background-size: cover;
  margin: 8px;
}

.social-media-icon__google {
  width: 24px;
  height: 24px;
  background: url('../../assets/image-signup/gplus-socialicon__min_.svg');
  background-position: 0px;
  background-size: cover;
  margin: 8px;
}

.signup-social-media-wrapper {
  display: flex;
  flex-direction: row;
}

.signup-wrapper__item--title {
  width: 470px;
  font-weight: 400;
  padding-bottom: 0;
  color: #303233;
  font-family: Arial, sans-serif;
  line-height: 1.43;
  font-size: 14px;
}

.signup-wrapper__item--title > a {
  text-decoration: none;
  color: #3c9df2;
}
</style>
