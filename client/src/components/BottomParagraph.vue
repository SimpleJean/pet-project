<template>
  <div class="bottom_paragraph-wrapper">
    <hr class="horizontal-line" />
    <div class="wrapper-paragraph" v-bind:class="accordionClasses">
      <h2 class="block-banner__header">Работа в Казахстане</h2>
      <p class="paragraph">
        HeadHunter (hh.kz) — место, где работа найдётся всегда!
      </p>
      <p class="paragraph">
        Работа — важная часть жизни каждого из нас. Однако в жизни каждого
        человека наступает момент, когда он задумывается о смене работы, а может
        быть, даже и сферы деятельности. Увы, перемены — это не всегда легко,
        поэтому сомнения неизбежны.
      </p>
      <p class="paragraph">
        С чего начать поиск работы? Какая работа мне подойдет? Есть ли такие
        вакансии на рынке труда? Как правильно составить резюме? Ответить на все
        эти вопросы поможет сайт hh.kz, где ежедневно тысячи людей ищут и
        находят работу, а работодатели размещают вакансии.
      </p>
      <p class="paragraph">
        Как лучше искать работу на hh.kz? Вы можете просматривать вакансии и
        откликаться на понравившиеся предложения. К услугам кандидатов обширный
        каталог профессиональных областей, где можно выбрать специальность.
        Достаточно всего лишь пару раз кликнуть мышкой, чтобы получить список
        актуальных и качественных предложений в выбранном регионе. Расширенные
        настройки поиска гарантируют, что интересующая вас работа будет найдена.
        Если вы уже определились, вакансии каких специальностей вам подходят,
        вам остаётся только создать привлекательное резюме и начинать поиск
        работы мечты! Создание резюме способствует тому, что вас заметят и
        пригласят на собеседование — работа не заставит себя ждать! Поэтому мы
        рекомендуем сочетать оба этих метода, чтобы найти работу.
      </p>
      <p class="paragraph">
        Лучшие работодатели приходят на наш сайт, чтобы опубликовать свои
        вакансии и подобрать персонал. Почему? Потому что к их услугам
        многомиллионная база резюме специалистов разного уровня, выгодные
        предложения, помощь персональных менеджеров и многое другое. Кроме того,
        на hh.kz каждый пользователь может узнать самые последние данные о рынке
        труда, изучить свежий обзор зарплат и ознакомиться с различными
        исследованиями. Соискателям это помогает оценить свой потенциал, чтобы
        скорректировать поиск работы, а работодателям — определить, чего стоит
        ждать от кандидатов. Поиск работы и сотрудников с hh.kz — это быстро и
        удобно. Убедитесь в этом сами!
      </p>
    </div>
    <div class="toggle-button" @click="toggleAccordion">
      <p>Показать полностью</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  data() {
    return {
      accordionClasses: {
        'is-closed': false,
      },
    };
  },
  methods: {
    toggleAccordion() {
      this.accordionClasses['is-closed'] = !this.accordionClasses['is-closed'];
    },
  },
};
</script>

<style scoped>
.bottom_paragraph-wrapper {
  display: flex;
  flex-flow: column wrap;
  /* justify-content: center; */
  /* align-items: center; */
  width: 1280px;
  /* padding: 0 20px; */
  margin: 0 auto;
  color: black;
}

@media (max-width: 1280px) {
  .bottom_paragraph-wrapper {
    padding: 0px;
  }
}

@media (max-width: 768px) {
  .bottom_paragraph-wrapper {
    width: 768px;
    padding: 0px;
  }
}

.wrapper-paragraph {
  padding: 0 15px;
  height: 100px;
  overflow: hidden;
}

@media (max-width: 1280px) {
  .wrapper-paragraph {
    width: 73vw;
    height: 130px;
  }
}

@media (max-width: 768px) {
  .wrapper-paragraph {
    width: 80vw;
    height: 130px;
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

.paragraph {
  color: #303233;
  margin-top: 11px;
}

.horizontal-line {
  background: #edeff0;
  border: 0;
  height: 1px;
  width: 1250px;
  margin-top: 25px;
  margin-bottom: 25px;
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
.is-closed {
  height: 100%;
}
.toggle-button {
  display: flex;
  justify-content: flex-start;
  width: 140px;
  color: #3c9df2;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  text-decoration-style: dashed;
  margin-bottom: 15px;
  padding: 0 15px;
}

@media (max-width: 1280px) {
  .toggle-button {
    width: 73vw;
  }
}
/* need to change clickebel area */
@media (max-width: 768px) {
  .toggle-button {
    width: 80vw;
  }
}

.toggle-button:hover {
  color: #0d69ba;
}
</style>
