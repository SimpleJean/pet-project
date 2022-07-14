<template>
  <div class="column-wrapper__container--center">
    <div class="column-wrapper__header">
      <h2 class="column-header">Вакансии дня в Казахстане</h2>
    </div>
    <div class="vacancies-of-the-day">
      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Специалист по продаже недвижимости</span>
          <div>от 300 000 до 800 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">Центр недвижимости Капитал, Нур-Султан</a>
        </span>
      </div>
      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Digital manager</span>
          <div>от 300 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">HeadHunter::Казахстан, Алматы</a>
        </span>
      </div>
      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Менеджер по продажам - Специалист по недвижимости</span>
          <div>от 500 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">Агентство недвижимости ДЕМЕТРА, ИП, Алматы</a>
        </span>
      </div>
      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Оператор-кассир АЗС (Кордай)</span>
          <div>от 65 000 до 110 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">ГАЗПРОМНЕФТЬ-КАЗАХСТАН ОПЕРАЦИОННАЯ КОМПАНИЯ, Кордай</a>
        </span>
      </div>

      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Оператор колл-центра (Удаленно) </span>
          <div>от 120 000 до 150 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">Смартер Казахстан, Кордай</a>
        </span>
      </div>
      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Кузнец - штамповщик</span>
          <div>от 50 000 до 60 000 руб.</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">КАМАЗ, Кордай</a>
        </span>
      </div>
      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Продавец-консультант салона мебели (МС "Сарканд")</span>
          <div>от 200 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">Торговая компания АЛА, ТМ EuroMebel, Сарканд</a>
        </span>
      </div>
      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Горничная, Тенгиз</span>
          <div>з/п не указана</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">Caspian Offshore Construction Realty, Кордай</a>
        </span>
      </div>

      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Middle 1С Разработчик</span>
          <div>от 200 000 до 450 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">Ристарт Технологии, Алматы</a>
        </span>
      </div>

      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Продавец-консультант в магазин женской одежды</span>
          <div>от 150 000 до 250 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">Аймурзаева А.М., Нур-Султан</a>
        </span>
      </div>

      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Товаровед (оператор приемки товаров)</span>
          <div>от 150 000 до 180 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">MUKAZHAN K.A., Нур-Султан</a>
        </span>
      </div>

      <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Спортивный журналист</span>
          <div>от 160 000 до 160 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">СИА Sports.kz, Караганда</a>
        </span>
      </div>

      <!--       <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Преподаватель казахского языка</span>
          <div>от 120 000 до 180 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">ELC Almaty, Алматы</a>
        </span>
      </div> -->

      <!--       <div class="vacancies-of-the-day__item">
        <a href="#"
          ><span>Оператор колл-центра (удалённая работа)</span>
          <div>от 100 000 до 150 000 KZT</div>
        </a>
        <span class="column-list-item__count"
          ><a href="#">Avatarconsulting, Алматы</a>
        </span>
      </div> -->
    </div>
  </div>
</template>

<script></script>
<style>
.column-wrapper__container--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 15px; */
}

@media (max-width: 1280px) {
  .column-wrapper__container--center {
    margin-top: 15px;
  }
}

.column-header {
  display: flex;
  justify-content: flex-start;
  margin: 0px 0px 16px 0px;
  padding: 0 15px;
  font-size: 24px;
  line-height: 1.16;
  font-family: 'Proxima Nova Condensed Regular', Arial Narrow, Roboto Condensed,
    Arial, sans-serif;
  font-weight: 700;
  color: #303233;
}

.column-wrapper__header {
  display: flex;
  justify-content: flex-start;
  width: 910px;
}

.vacancies-of-the-day {
  display: flex;
  height: 56vh;
  width: 71vw;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 15px;
}

.vacancies-of-the-day__item {
  display: flex;
  flex-direction: column;
  width: 290px;
  padding-bottom: 14px;
  line-height: 20px;
  word-wrap: break-word;
  vertical-align: middle;
}

.vacancies-of-the-day__item > a {
  text-decoration: none;
  color: #303233;
  cursor: pointer;
}

.work-in-company-list {
  display: flex;
  flex-direction: column;
}

.column-list-item__count {
  color: #959799;
  line-height: 1.34;
  font-size: 12px;
}

.column-list-item__count > a {
  color: #959799;
  text-decoration: none;
}
</style>
