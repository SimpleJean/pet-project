<template>
  <div class="dashboard">
    <div class="dashboard-wrapper" v-bind:class="hideClasses">
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Вакансии дня</div>
            <div class="dashboard-tiles-item__salary">65 000 – 400 000 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">14 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Компании дня</div>
            <div class="dashboard-tiles-item__salary"></div>
          </div>
          <div class="dashboard-tiles-item__counter">567 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Работа из дома</div>
            <div class="dashboard-tiles-item__salary"></div>
          </div>
          <div class="dashboard-tiles-item__counter">1401 вакансия</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__9"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Подработка</div>
            <div class="dashboard-tiles-item__salary">до 666 600 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">1350 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__1"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Курьер</div>
            <div class="dashboard-tiles-item__salary">59 900 – 466 300 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">154 вакансии</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__4"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Водитель</div>
            <div class="dashboard-tiles-item__salary">34 900 – 422 400 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">394 вакансии</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__7"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Продавец</div>
            <div class="dashboard-tiles-item__salary">3 900 – 475 800 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">529 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__10"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Кассир</div>
            <div class="dashboard-tiles-item__salary">14 900 – 304 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">420 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Администратор</div>
            <div class="dashboard-tiles-item__salary">56 600 – 444 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">657 вакансий</div>
        </div>
      </div>

      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__5"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Оператор</div>
            <div class="dashboard-tiles-item__salary">59 900 – 512 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">668 вакансий</div>
        </div>
      </div>

      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__8"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Программист</div>
            <div class="dashboard-tiles-item__salary">200 – 1 416 700 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">1186 вакансий</div>
        </div>
      </div>

      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__11"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Менеджер</div>
            <div class="dashboard-tiles-item__salary">до 977 300 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">4031 вакансия</div>
        </div>
      </div>

      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__11"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Помощник</div>
            <div class="dashboard-tiles-item__salary">100 – 583 300 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">865 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Строитель</div>
            <div class="dashboard-tiles-item__salary">
              119 900 – 446 600 KZT
            </div>
          </div>
          <div class="dashboard-tiles-item__counter">32 вакансии</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Помощник руководителя</div>
            <div class="dashboard-tiles-item__salary">34 900 – 591 600 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">127 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__9"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Сварщик</div>
            <div class="dashboard-tiles-item__salary">
              119 900 – 1 057 600 KZT
            </div>
          </div>
          <div class="dashboard-tiles-item__counter">29 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__8"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Охранник</div>
            <div class="dashboard-tiles-item__salary">59 900 – 178 300 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">61 вакансия</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__4"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Специалист</div>
            <div class="dashboard-tiles-item__salary">5 900 – 795 600 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">2067 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__7"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Руководитель</div>
            <div class="dashboard-tiles-item__salary">100 – 999 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">2397 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Бухгалтер</div>
            <div class="dashboard-tiles-item__salary">9 900 – 586 600 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">1538 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Инженер</div>
            <div class="dashboard-tiles-item__salary">9 900 – 976 600 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">816 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__5"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Директор</div>
            <div class="dashboard-tiles-item__salary">100 – 999 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">2427 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__1"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Кладовщик</div>
            <div class="dashboard-tiles-item__salary">73 400 – 286 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">174 вакансии</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__11"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Секретарь</div>
            <div class="dashboard-tiles-item__salary">100 – 300 000 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">399 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__7"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Юрист</div>
            <div class="dashboard-tiles-item__salary">48 900 – 594 100 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">241 вакансия</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Грузчик</div>
            <div class="dashboard-tiles-item__salary">4 900 – 275 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">112 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Уборщик</div>
            <div class="dashboard-tiles-item__salary">до 977 300 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">150 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__9"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Дизайнер</div>
            <div class="dashboard-tiles-item__salary">69 900 – 879 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">566 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__1"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Электрик</div>
            <div class="dashboard-tiles-item__salary">89 900 – 349 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">99 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__4"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Повар</div>
            <div class="dashboard-tiles-item__salary">79 900 – 449 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">238 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__7"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Экономист</div>
            <div class="dashboard-tiles-item__salary">99 900 – 644 900 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">72 вакансии</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Мерчендайзер</div>
            <div class="dashboard-tiles-item__salary">94 900 – 453 300 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">86 вакансий</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__2"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">
              Системный администратор
            </div>
            <div class="dashboard-tiles-item__salary">59 900 – 395 400 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">103 вакансии</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__5"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Официант</div>
            <div class="dashboard-tiles-item__salary">4 900 – 417 800 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">142 вакансии</div>
        </div>
      </div>
      <div class="dashboard-wrapper__item">
        <div class="dashboard-tiles-item-highlighter__1"></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">Супервайзер</div>
            <div class="dashboard-tiles-item__salary">79 900 – 686 600 KZT</div>
          </div>
          <div class="dashboard-tiles-item__counter">169 вакансий</div>
        </div>
      </div>
    </div>
    <div class="more-info" @click="toggleHide"><p>Ещё 23 профессии</p></div>
  </div>
</template>

<script>
export default {
  name: 'hide',
  data() {
    return {
      hideClasses: {
        'is-hide': false,
      },
    };
  },
  methods: {
    toggleHide() {
      this.hideClasses['is-hide'] = !this.hideClasses['is-hide'];
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 0 auto; */
  /* width: 100vw; */
  /* padding: 0 20px; */
  color: #303233;
  
  margin-top: 110px;
}

@media (max-width: 1280px) {
  .dashboard {
    width: 75vw;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .dashboard {
    width: 768px;
    padding: 0;
  }
}

.dashboard-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 395px;
  overflow: hidden;
}

@media (max-width: 1280px) {
  .dashboard-wrapper {
    width: 99vw;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .dashboard-wrapper {
    height: 97vh;
    justify-content: center;
  }
}

.dashboard-wrapper__item {
  display: flex;
  width: 290px;
  height: 103px;
  box-shadow: inset 0 0 0 1px #edeff0;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  margin: 0 15px 30px 15px;
}

@media (max-width: 768px) and (min-width: 768px) {
  .dashboard-wrapper__item:last-child {
    position: relative;
    left: -160px;
    /* margin-left: -174px;
    margin-right: 136px; */
  }
}

.dashboard-wrapper__item:hover {
  border-radius: 4px;
  box-shadow: 1px 1px 10px 5px #aeafaf;
  outline: none;
}

.dashboard-tiles-item-highlighter {
  background-color: #eb6b6b;
  opacity: 0.4;
  width: 10px;
  border-radius: 4px 0 0 4px;
}

.dashboard-tiles-item__content {
  padding: 12px 15px 4px 15px;
}

.dashboard-tiles-item__title {
  font-size: 18px;
  line-height: 1.1;
  font-family: Arial, sans-serif;
  font-weight: 400;
}

.dashboard-tiles-item__salary {
  min-height: 21px;
  margin: 3px 0;
}

.dashboard-tiles-item__counter {
  padding: 10px 15px;
  border-radius: 0 0 4px 4px;
}

.more-info {
  display: flex;
  justify-content: flex-start;
  width: 125px;
  color: #3c9df2;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  text-decoration-style: dashed;
  padding: 0 15px;
}

@media (max-width: 1280px) {
  .more-info {
    margin-left: 10vw;
  }
}

@media (max-width: 768px) {
  .more-info {
    margin-left: 10vw;
  }
}

.more-info > p {
  margin: 0;
}

.more-info:hover {
  color: #0d69ba;
}

.dashboard-tiles-item-highlighter__1 {
  background-color: rgba(250, 219, 125, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}

.dashboard-tiles-item-highlighter__2 {
  background-color: rgba(227, 206, 242, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}

.dashboard-tiles-item-highlighter__4 {
  background-color: rgba(207, 242, 208, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}
.dashboard-tiles-item-highlighter__5 {
  background-color: rgba(255, 217, 191, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}

.dashboard-tiles-item-highlighter__7 {
  background-color: rgba(191, 226, 255, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}
.dashboard-tiles-item-highlighter__8 {
  background-color: rgba(250, 219, 125, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}
.dashboard-tiles-item-highlighter__9 {
  background-color: rgba(255, 217, 191, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}
.dashboard-tiles-item-highlighter__10 {
  background-color: rgba(227, 206, 242, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}
.dashboard-tiles-item-highlighter__11 {
  background-color: rgba(207, 242, 208, 0.4);
  width: 10px;
  border-radius: 4px 0 0 4px;
}

.is-hide {
  height: 100%;
}
</style>
