<template>
  <hr class="horizontal-line" />
  <div class="wrapper-news-articles">
    <div class="content-wrapper">
      <div class="content-wrapper__item">
        <div><h3 class="block-banner__header">Новости</h3></div>
        <div>
          <ul class="wrapper-list-item">
            <li class="list-item news-box">
              <img
                class="news-box__image"
                src="../assets/news-images/16889014.png"
              />
              <div>Лучшие работодатели Центральной Азии 2020 года</div>
            </li>
              <li class="list-item news-box">
                 <hr class="small-horizontal-line" />
              </li>
            <li class="list-item news-box">
              <img
                class="news-box__image"
                src="../assets/news-images/16938222.jpg"
              />
              Секреты поиска удаленных специалистов: на что обращать внимание
            </li>
            <li class="list-item news-box">
                 <hr class="small-horizontal-line" />
              </li>
            <li class="list-item news-box">
              <img
                class="news-box__image"
                src="../assets/news-images/16889045.jpg"
              />
              Как позаботиться о бренде работодателя в кризис: золотые правила
              HR-коммуникаций
            </li>
          </ul>
        </div>
      </div>
      <hr class="vertical-line" />
      <div class="content-wrapper__item">
        <div><h3 class="block-banner__header">Статьи</h3></div>
        <div>
          <ul class="wrapper-list-item">
            <li class="list-item news-box">
              <img
                class="news-box__image"
                src="../assets/news-images/16938239.jpg"
              />
              Как найти подработку?
            </li>
            <li class="list-item news-box">
                 <hr class="small-horizontal-line" />
              </li>
            <li class="list-item news-box">
              <img
                class="news-box__image"
                src="../assets/news-images/17032686.png"
              />
              Названы имена лучших работодателей Центральной Азии 2020 года!
            </li>
            <li class="list-item news-box">
                 <hr class="small-horizontal-line" />
              </li>
            <li class="list-item news-box">
              <img
                class="news-box__image"
                src="../assets/news-images/16938194.jpg"
              />
              Как искать работу, если у вас редкая профессия
            </li>
            <li class="list-item news-box">
                 <hr class="small-horizontal-line" />
              </li>
            <li class="list-item news-box">
              <img
                class="news-box__image"
                src="../assets/news-images/17005625.jpg"
              />
              Schneider Electric: Мы ценим в людях стремление к развитию
            </li>
          </ul>
        </div>
      </div>
      <hr class="vertical-line" />
      <div class="content-wrapper__item">
        <div><h3 class="block-banner__header">Работа по профессиям</h3></div>
        <div>
          <ul class="wrapper-list-item">
            <li class="list-item useful-link">Для программистов</li>
            <li class="list-item useful-link">Для бухгалтеров</li>
            <li class="list-item useful-link">Для инженеров</li>
            <li class="list-item useful-link">Для менеджеров по продажам</li>
            <li class="list-item useful-link">Для директоров</li>
            <li class="list-item useful-link">Для администраторов</li>
            <li class="list-item useful-link">Для маркетологов</li>
            <li class="list-item useful-link">Для дизайнеров</li>
            <li class="list-item useful-link">Для юристов</li>
            <li class="list-item useful-link">Для секретарей</li>
          </ul>
        </div>
      </div>
      <hr class="vertical-line delete-line__1280" />
      <hr class="horizontal-line add-line__1280" />
      <div class="content-wrapper__item">
        <div><h3 class="block-banner__header">Работа в других городах</h3></div>
        <div>
          <ul class="wrapper-list-item">
            <li class="list-item useful-link">Работа в Алматы</li>
            <li class="list-item useful-link">Работа в Караганде</li>
            <li class="list-item useful-link">Работа в Усть-Каменогорске</li>
            <li class="list-item useful-link">Работа в Павлодаре</li>
            <li class="list-item useful-link">Работа в Актау</li>
            <li class="list-item useful-link">Работа в Атырау</li>
            <li class="list-item useful-link">Работа в Актобе</li>
            <li class="list-item useful-link">Работа в Костанае</li>
            <li class="list-item useful-link">Работа в Шымкенте</li>
            <li class="list-item useful-link">Работа в Нур-Султане</li>
          </ul>
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

.wrapper-news-articles {
  display: flex;
  justify-content: center;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #303233;
  width: 1280px;
  height: 100%;
}

@media (max-width: 1280px) {
  .content-wrapper {
    width: 75vw;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    display: flex;
    width: 83.33333333333334vw;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

.content-wrapper__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  padding: 0 15px;
  height: 100%;
}

@media (max-width: 1280px) {
  .content-wrapper__item {
    width: 289px;
  }
}

@media (max-width: 768px) {
  .content-wrapper__item {
    width: 280px;
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

.news-box__image {
  margin-right: 20px;
}

.news-box {
  display: flex;
  align-items: center;
  padding: 5px 0;
  width: 259px;
  line-height: 1.43;
  color: #303233;
}

.list-item {
  list-style: none;
  text-decoration: none;
}

.wrapper-list-item {
  padding: 0;
  /* width: 100%; */
}
.horizontal-line {
  background: #edeff0;
  border: 0;
  height: 1px;
  width: 100vw;
  margin-top: 25px;
  margin-bottom: 25px;
}

.small-horizontal-line {
  background: #edeff0;
  border: 0;
  height: 1px;
  width: 100vw;
}

.useful-link {
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;
  margin-bottom: 8px;
}

@media (max-width: 1280px) {
  .horizontal-line {
    width: 75vw;
    margin: 15px;
  }
}

@media (max-width: 768px) {
  .horizontal-line {
    width: 83vw;
    margin: 15px;
  }
}
@media (max-width: 1280px) {
  .delete-line__1280 {
    display: none;
  }
}

@media (min-width: 1281px) {
  .add-line__1280 {
    display: none;
  }
}

@media (min-width: 768px) {
  .add-line__1280 {
    display: none;
  }
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
</style>
