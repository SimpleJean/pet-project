<template>
<!--   <div class="wrapper">
    <div class="footer-wrapper footer-wrapper__768">
      <div class="footer-wrapper__item">
        <p class="link-footer-top">Продвижение резюме</p>
      </div>
      <div class="footer-wrapper__item">
        <p class="link-footer-top">Хочу у вас работать</p>
      </div>
    </div>
  </div> -->
  <div class="footer">
    <div class="footer-wrapper__column">
      <div class="footer-wrapper">
        <div class="footer-content">
          <h4 class="footer-content__title">HeadHunter</h4>
          <ul class="unordered-list-style">
            <li class="footer-content__item">Наши вакансии</li>
            <li class="footer-content__item">Реклама на сайте</li>
            <li class="footer-content__item">Требования к ПО</li>
            <li class="footer-content__item">Защита персональных данных</li>
            <li class="footer-content__item">Инвесторам</li>
            <li class="footer-content__item">Условия оказания услуг</li>
            <li class="footer-content__item">Условия использования Сайтов</li>
          </ul>
        </div>
        <div class="footer-content">
          <h4 class="footer-content__title">Сервисы для соискателей</h4>
          <ul class="unordered-list-style">
            <li class="footer-content__item">Все сервисы</li>
            <li class="footer-content__item">Продвижение резюме</li>
            <li class="footer-content__item">Хочу у вас работать</li>
          </ul>
        </div>
        <hr class="horizontal-footer__768" />
        <div class="footer-content">
          <ul class="unordered-list-style bottom-gap">
            <li class="footer-content__item">Помощь</li>
            <li class="footer-content__item">Пользовательское соглашение</li>
          </ul>
          <ul class="unordered-list-style bottom-gap">
            <li class="footer-content__item">Каталог компаний</li>
            <li class="footer-content__item">Работа по профессиям</li>
          </ul>
          <ul class="unordered-list-style bottom-gap">
            <li class="footer-content__item">
              Switch to English&nbsp;
              <span class="footer-content__icon_en"></span>
            </li>
            <li class="footer-content__item">
              Қазақ тілі&nbsp;
              <span class="footer-content__icon_kz"></span>
            </li>
          </ul>
        </div>
        <div class="footer-content footer-logo__1280">
          <div class="footer-logo"></div>
        </div>
      </div>
      <div class="footer-social-media">
        <div class="footer-content">
          <div class="social-media-wrapper">
            <a href="#"><div class="media-logo--facebook"></div></a>
            <a href="#"><div class="media-logo--vk"></div></a>
            <a href="#"><div class="media-logo--instagram"></div></a>
          </div>
        </div>
        <div class="footer-content__tabs">
          <a href="#" class="app-button-app-store"></a>
          <a href="#" class="app-button-google-store"></a>
          <a href="#" class="app-button-app-gallery"></a>
        </div>
      </div>
      <hr size="1" color="#494b4d" class="horizontal-footer" />
      <div class="footer-bottom">
        <div class="footer-bottom__top-gap">
          <p>© 2022 Группа компаний HeadHunter</p>
          <p>
            Сегодня на сайте 36 265 вакансий, 3 515 260 резюме, 73 695 компании
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* .wrapper {
  display: flex;
  
  justify-content: center;
  background-color: #edeff0;
  color: rgb(0, 0, 0);
  padding: 45px 0 35px 0;
  color: #303233;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
} */

/* @media (max-width: 1280px) {
  .wrapper {
    width: 100vw;
  }
} */

/* @media (max-width: 768px) {
  .wrapper {
    width: 100vw;
  }
} */

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
/* start need to watch for changes */
@media (max-width: 768px) {
  .horizontal-footer__768 {
    width: 83vw;
    margin: 0px 0 20px;
  }
}

@media (max-width: 766px) {
  .horizontal-footer__768 {
    display: none;
  }
}

@media (min-width: 770px) {
  .horizontal-footer__768 {
    display: none;
  }
}
/* end need to watch for changes */

@media (max-width: 768px) {
  .footer-wrapper__768 {
    display: flex;
    width: 74vw;
    flex-direction: row-reverse;
    justify-content: flex-end;
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

.footer-top__label {
  margin: 0;
  line-height: 1.43;
  word-spacing: 1px;
}

.footer {
  display: flex;
  justify-content: center;
  background: #222324;
  padding: 35px 0;
}

/* @media (max-width: 1280px) {
  .footer {
    width: 960px;
  }
} */

.footer-content {
  display: flex;
  flex-direction: column;
  width: 290px;
  padding: 0 15px;
  margin-bottom: 25px;
  color: #d4d7d9;
}

.footer-content__icon_en {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 14px;
  background: url('../assets/lang-en__min_.svg');
  background-repeat: no-repeat;
}

.footer-content__icon_kz {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 14px;
  background: url('../assets/lang-kz__min_.svg');
  background-repeat: no-repeat;
}

.footer-logo {
  width: 50px;
  height: 50px;
  background: url('../assets/hh.ru-gray__min_.svg');
  background-repeat: no-repeat;
}

@media (max-width: 1280px) {
  .footer-logo__1280 {
    width: 50px;
    height: 50px;
  }
}

.footer-content__title {
  color: #fff;
  margin: 0 0 10px 0;
}

@media (max-width: 1280px) {
  .footer-content__title {
    width: 290px;
  }
}

@media (max-width: 1280px) {
  .footer-content__title {
    font-size: 14px;
    line-height: 1.4;
    font-family: ProximaNovaCond, Arial Narrow, Roboto Condensed, Arial,
      sans-serif;
    font-weight: 700;
  }
}

.unordered-list-style {
  padding: 0;
  margin: 0;
}

.bottom-gap {
  margin-bottom: 15px;
}

.footer-content__item {
  list-style: none;
  list-style-type: none;
  line-height: 1.43;
  margin-bottom: 5px;
}

.footer-wrapper__column {
  display: flex;
  flex-direction: column;
  width: 1280px;
}

@media (max-width: 1280px) {
  .footer-wrapper__column {
    width: 73vw;
  }
}

.footer-social-media {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .footer-social-media {
    /* width: 100vw; */
    flex-direction: column;
  }
}

.social-media-wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  width: 290px;
  padding: 0 15px;
}

.media-logo--facebook {
  background: url('../assets/media_logo/fb-socialicon__min_.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-position: -17px 6px;
  border: 1px solid #959799;
  border-radius: 50%;
  cursor: pointer;
  height: 38px;
  width: 38px;
  margin-right: 8px;
}

.media-logo--facebook:hover {
  border: 1px solid #d9dbdd;
}

.media-logo--vk {
  background: url('../assets/media_logo/vk-socialicon__min_.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-position: -17px 8px;
  border: 1px solid #959799;
  border-radius: 50%;
  cursor: pointer;
  height: 38px;
  width: 38px;
  margin-right: 8px;
}

.media-logo--vk:hover {
  border: 1px solid #d9dbdd;
}

.media-logo--instagram {
  background: url('../assets/media_logo/instagram-socialicon__min_.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-position: -17px 8px;
  border: 1px solid #959799;
  border-radius: 50%;
  cursor: pointer;
  height: 38px;
  width: 38px;
  margin-right: 8px;
}

.media-logo--instagram:hover {
  border: 1px solid #d9dbdd;
}

.footer-content__tabs {
  display: flex;
  flex-direction: row;
  width: 610px;
  padding: 0 15px;
  margin-top: 25px;
}

.app-button-app-store {
  background: url('../assets/app-store.svg');
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #959799;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  height: 38px;
  width: 138px;
  margin-right: 10px;
}

.app-button-app-store:hover {
  border: 1px solid #d9dbdd;
}

.app-button-google-store {
  background: url('../assets/app-store.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-position: 0 0;
  border: 1px solid #959799;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  height: 38px;
  width: 138px;
  margin-right: 10px;
}

.app-button-google-store:hover {
  border: 1px solid #d9dbdd;
}

.app-button-app-gallery {
  background: url('../assets/app-store.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-position: 0 -90px;
  border: 1px solid #959799;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  height: 38px;
  width: 138px;
}

.app-button-app-gallery:hover {
  border: 1px solid #d9dbdd;
}

.horizontal-footer {
  width: 75vw;
  margin-top: 16px;
}

.footer-bottom {
  width: 1250px;
  padding: 0 15px;
}

@media (max-width: 1280px) {
  .footer-bottom {
    width: 75vw;
  }
}

.footer-bottom__top-gap {
  margin-top: 25px;
  padding: 0 15px;
  color: #959799;
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
