<template>
  <div class="dashboard">
    <div class="dashboard-wrapper" v-bind:class="hideClasses">
      <div class="dashboard-wrapper__item" v-for="card in cards" :key="card.id">
        <div
          class="dashboard-tiles-item-highlighter"
          :style="{
            'background-color': card.color,
          }"
        ></div>
        <div class="dashboard-tiles-item__body">
          <div class="dashboard-tiles-item__content">
            <div class="dashboard-tiles-item__title">
              {{ card.title }}
            </div>
            <div class="dashboard-tiles-item__salary">{{ card.salary }}</div>
          </div>
          <div class="dashboard-tiles-item__counter">
            {{ card.count }} вакансий
          </div>
        </div>
      </div>
    </div>
    <div class="more-info" @click="toggleHide"><p>Ещё 23 профессии</p></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'hide',
  data() {
    return {
      hideClasses: {
        'is-hide': false,
      },
      cards: [],
      //uncomment this part, if you don't see something in the page
      cards: [
        {
          id: 1,
          title: 'Вакансии дня',
          salary: '65 000 – 400 000 KZT',
          count: 14,
          color: 'rgba(235, 107, 107, 0.4)',
        },
        {
          id: 2,
          title: 'Компании дня',
          salary: '',
          count: 567,
          color: 'rgba(235, 107, 107, 0.4)',
        },
        {
          id: 3,
          title: 'Работа из дома',
          salary: '',
          count: 1401,
          color: 'rgba(235, 107, 107, 0.4)',
        },
        {
          id: 4,
          title: 'Подработка',
          salary: 'до 666 600 KZT',
          count: 1350,
          color: 'rgba(255,217,191,.4)',
        },
        {
          id: 5,
          title: 'Курьер',
          salary: '59 900 – 466 300 KZT',
          count: 154,
          color: 'rgba(250,219,125,.4)',
        },
        {
          id: 6,
          title: 'Водитель',
          salary: '34 900 – 422 400 KZT',
          count: 394,
          color: 'rgba(207,242,208,.4)',
        },
        {
          id: 7,
          title: 'Продавец',
          salary: '3 900 – 475 800 KZT',
          count: 529,
          color: 'rgba(191,226,255,.4)',
        },
        {
          id: 8,
          title: 'Кассир',
          salary: '14 900 – 304 900 KZT',
          count: 420,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 9,
          title: 'Администратор',
          salary: '56 600 – 444 900 KZT',
          count: 657,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 10,
          title: 'Оператор',
          salary: '59 900 – 512 900 KZT',
          count: 668,
          color: 'rgba(255,217,191,.4)',
        },
        {
          id: 11,
          title: 'Программист',
          salary: '200 – 1 416 700 KZT',
          count: 1186,
          color: 'rgba(250,219,125,.4)',
        },
        {
          id: 12,
          title: 'Менеджер',
          salary: 'до 977 300 KZT',
          count: 4031,
          color: 'rgba(207,242,208,.4)',
        },
        {
          id: 13,
          title: 'Помощник',
          salary: '100 – 583 300 KZT',
          count: 865,
          color: 'rgba(191,226,255,.4)',
        },
        {
          id: 14,
          title: 'Строитель',
          salary: '119 900 – 446 600 KZT',
          count: 32,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 15,
          title: 'Помощник руководителя',
          salary: '119 900 – 1 057 600 KZT',
          count: 29,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 16,
          title: 'Сварщик',
          salary: '34 900 – 591 600 KZT',
          count: 127,
          color: 'rgba(255,217,191,.4)',
        },
        {
          id: 17,
          title: 'Охранник',
          salary: '59 900 – 178 300 KZT',
          count: 61,
          color: 'rgba(250,219,125,.4)',
        },
        {
          id: 18,
          title: 'Специалист',
          salary: '5 900 – 795 600 KZT',
          count: 2067,
          color: 'rgba(207,242,208,.4)',
        },
        {
          id: 19,
          title: 'Руководитель',
          salary: '100 – 999 900 KZT',
          count: 2397,
          color: 'rgba(191,226,255,.4)',
        },
        {
          id: 20,
          title: 'Бухгалтер',
          salary: '9 900 – 586 600 KZT',
          count: 1538,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 21,
          title: 'Инженер',
          salary: '9 900 – 976 600 KZT',
          count: 816,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 22,
          title: 'Директор',
          salary: '100 – 999 900 KZT',
          count: 2427,
          color: 'rgba(255,217,191,.4)',
        },
        {
          id: 23,
          title: 'Кладовщик',
          salary: '73 400 – 286 900 KZT',
          count: 174,
          color: 'rgba(250,219,125,.4)',
        },
        {
          id: 24,
          title: 'Секретарь',
          salary: '100 – 300 000 KZT',
          count: 399,
          color: 'rgba(207,242,208,.4)',
        },
        {
          id: 25,
          title: 'Юрист',
          salary: '48 900 – 594 100 KZT',
          count: 241,
          color: 'rgba(191,226,255,.4)',
        },
        {
          id: 26,
          title: 'Грузчик',
          salary: '4 900 – 275 900 KZT',
          count: 112,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 27,
          title: 'Уборщик',
          salary: 'до 977 300 KZT',
          count: 150,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 28,
          title: 'Дизайнер',
          salary: '69 900 – 879 900 KZT',
          count: 566,
          color: 'rgba(255,217,191,.4)',
        },
        {
          id: 29,
          title: 'Электрик',
          salary: '89 900 – 349 900 KZT',
          count: 99,
          color: 'rgba(250,219,125,.4)',
        },
        {
          id: 30,
          title: 'Повар',
          salary: '79 900 – 449 900 KZT',
          count: 238,
          color: 'rgba(207,242,208,.4)',
        },
        {
          id: 31,
          title: 'Экономист',
          salary: '99 900 – 644 900 KZT',
          count: 72,
          color: 'rgba(191,226,255,.4)',
        },
        {
          id: 32,
          title: 'Мерчендайзер',
          salary: '94 900 – 453 300 KZT',
          count: 86,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 33,
          title: 'Системный администратор',
          salary: '59 900 – 395 400 KZT',
          count: 103,
          color: 'rgba(227,206,242,.4)',
        },
        {
          id: 34,
          title: 'Официант',
          salary: '4 900 – 417 800 KZT',
          count: 142,
          color: 'rgba(255,217,191,.4)',
        },
        {
          id: 35,
          title: 'Супервайзер',
          salary: '79 900 – 686 600 KZT',
          count: 169,
          color: 'rgba(250,219,125,.4)',
        },
      ],
    };
  },
  methods: {
    toggleHide() {
      this.hideClasses['is-hide'] = !this.hideClasses['is-hide'];
    },
    async fetchItemData() {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/data');
        this.cards = res.data.dataItems;
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  mounted() {
    this.fetchItemData();
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  color: #303233;

  margin-top: 110px;
}

@media (max-width: 1280px) {
  .dashboard {
    width: 100vw;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .dashboard {
    padding: 0;
  }
}

.dashboard-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 395px;
  padding-top: 10px;
  overflow: hidden;
}

/* @media (max-width: 1280px) {
  .dashboard-wrapper {
    width: 99vw;
    justify-content: center;
  }
} */

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
  }
}

.dashboard-wrapper__item:hover {
  border-radius: 4px;
  box-shadow: 1px 1px 10px 5px #aeafaf;
  outline: none;
}

.dashboard-tiles-item-highlighter {
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
    margin-left: 12vw;
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
