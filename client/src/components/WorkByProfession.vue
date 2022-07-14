<template>
  <div class="work-by-profession-wrapper">
    <div class="block-wrapper__item">
      <div>
        <p class="block-banner__header link-style">
          Работа по профессиям в Казахстане
        </p>
      </div>
      <div class="block-wrapper__industries">
        <div>
          <ul class="block-wrapper__industries--order_list">
            <li class="list-item">Автомобильный бизнес</li>
            <li class="list-item">Административный персонал</li>
            <li class="list-item">Банки, инвестиции, лизинг</li>
            <li class="list-item">Безопасность</li>
            <li class="list-item">
              Бухгалтерия, управленческий учет, финансы предприятия
            </li>
            <li class="list-item">Высший менеджмент</li>
            <li class="list-item">
              Государственная служба, некоммерческие организации
            </li>
            <li class="list-item">Добыча сырья</li>
            <li class="list-item">Домашний персонал</li>
          </ul>
        </div>
        <div>
          <ul class="block-wrapper__industries--order_list">
            <li class="list-item">Закупки</li>
            <li class="list-item">Инсталляция и сервис</li>
            <li class="list-item">
              Информационные технологии, интернет, телеком
            </li>
            <li class="list-item">Искусство, развлечения, масс-медиа</li>
            <li class="list-item">Консультирование</li>
            <li class="list-item">Маркетинг, реклама, PR</li>
            <li class="list-item">Медицина, фармацевтика</li>
            <li class="list-item">Наука, образование</li>
            <li class="list-item">Начало карьеры, студенты</li>
            <li class="list-item">Продажи</li>
          </ul>
        </div>
        <div>
          <ul class="block-wrapper__industries--order_list">
            <li class="list-item">Производство, сельское хозяйство</li>
            <li class="list-item">Рабочий персонал</li>
            <li class="list-item">Спортивные клубы, фитнес, салоны красоты</li>
            <li class="list-item">Страхование</li>
            <li class="list-item">Строительство, недвижимость</li>
            <li class="list-item">Транспорт, логистика</li>
            <li class="list-item">Туризм, гостиницы, рестораны</li>
            <li class="list-item">Управление персоналом, тренинги</li>
            <li class="list-item">Юристы</li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="vertical-line" />
    <div class="block-banner">
      <div><h3 class="block-banner__header">Оставайтесь на связи</h3></div>
      <div class="block-banner__app">
        <div class="block-banner__app-mobile"></div>
        <div class="horizontal-app">
          <div class="app-store"></div>
          <div class="google-store"></div>
          <div class="app-gallery"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
@font-face {
  font-family: 'Proxima Nova Condensed Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Proxima Nova Condensed Regular'),
    url('../assets/fonts/Mark Simonson  Proxima Nova Condensed Regular TheFontsMaster.com.woff')
      format('woff');
}

.work-by-profession-wrapper {
  display: flex;
  width: 1280px;
}

@media (max-width: 1280px) {
  .work-by-profession-wrapper {
    width: 97vw;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .work-by-profession-wrapper {
    width: 100vw;
    flex-wrap: wrap;
    flex-direction: row;
  }
}

.block-wrapper__industries {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303233;
  width: 900px;
  height: 100%;
  margin-top: 16px;

  
}

@media (max-width: 768px) {
  .block-wrapper__industries {
    width: 610px;
    flex-wrap: wrap;
  }
}

.block-wrapper__industries--order_list {
  padding: 0;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  margin: 0px;
}

.block-wrapper__industries--order_list > li {
  margin-bottom: 8px;
  line-height: 1.43;
  width: 260px;
}

.block-wrapper__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 900px;
  padding: 0 15px;
}

@media (max-width: 768px) {
  .block-wrapper__item {
    width: 610px;
  }
}

.block-banner__header {
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 1.16;
  font-family: 'Proxima Nova Condensed Regular', Arial Narrow, Roboto Condensed,
    Arial, sans-serif;
  font-weight: 700;
  color: #303233;
}

@media (max-width: 1280px) {
  .block-banner__header {
    margin-top: 15px;
  }
}

.link-style:hover {
  cursor: pointer;
  color: #000000;
}

.block-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 290px;
  height: 100%;
  padding: 0 15px;
}

@media (max-width: 1280px) {
  .block-banner {
    width: 70.3125vw;
  }
}

@media (max-width: 1280px) {
  .horizontal-app {
    display: flex;
  }
}

@media (max-width: 768px) {
  .block-banner {
     width: 610px;
  }
}

.block-banner__app {
  display: flex;
  flex-direction: row;
  margin-top: 16px;
}

.block-banner__app-mobile {
  width: 120px;
  height: 130px;
  background-image: url('../assets/app__min.png');
  background-repeat: no-repeat;
  margin-right: 10px;
  cursor: pointer;
}

@media (max-width: 1280px) {
  .block-banner__app-mobile {
    display: none;
  }
}

.list-item {
  list-style: none;
  text-decoration: none;
}

.vertical-line {
  background: #edeff0;
  border: 0;
  width: 1px;
}

@media (max-width: 1280px) {
  .vertical-line {
    margin: 0;
  }
}
@media (max-width: 768px) {
  .vertical-line {
    display: none;
  }
}

.app-store {
  width: 128px;
  height: 36px;
  background: #303233 url('../assets/app-store.svg');
  background-repeat: no-repeat;
  border-radius: 4px;
  background-size: 130px;
  background-position: 0 -41px;
  margin: 7px 0;
}

@media (max-width: 1280px) {
  .app-store {
    background-position: 0 -63px;
  }
}
.google-store {
  width: 128px;
  height: 36px;
  background: #303233 url('../assets/app-store.svg');
  background-repeat: no-repeat;
  border-radius: 4px;
  background-size: 130px;
  margin: 7px 0;
}

@media (max-width: 1280px) {
  .google-store {
    background-position: 0 -1px;
  }
}
.app-gallery {
  width: 128px;
  height: 36px;
  background: #303233 url('../assets/app-store.svg');
  background-repeat: no-repeat;
  border-radius: 4px;
  background-size: 130px;
  background-position: 0 -83px;
  margin: 7px 0;
}

@media (max-width: 1280px) {
  .app-gallery {
    background-position: 0 -124px;
  }
}

@media (max-width: 1280px) {
  .app-store,
  .google-store,
  .app-gallery {
    margin-right: 10px;
    width: 195px;
    height: 50px;
    background-size: 190px;
  }
}
</style>
