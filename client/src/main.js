import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

import TopHeader from '@/components/TopHeader.vue';
import MainContent from '@/components/MainContent.vue';
import Dashboard from '@/components/Dashboard.vue';
import WorkInCompany from '@/components/WorkInCompany.vue';
import JobsOfTheDay from '@/components/JobsOfTheDay.vue';
import WorkByProfession from '@/components/WorkByProfession.vue';
import NewsAndArticles from '@/components/NewsAndArticles.vue';
import BottomParagraph from '@/components/BottomParagraph.vue';
import FooterServices from '@/components/FooterServices.vue';
import Footer from '@/components/Footer.vue';

const app = createApp(App);
app.use(router);

/* createApp(App).use(router).mount('#app'); */
app.component('TopHeader', TopHeader);
app.component('MainContent', MainContent);
app.component('Dashboard', Dashboard);
app.component('WorkInCompany', WorkInCompany);
app.component('JobsOfTheDay', JobsOfTheDay);
app.component('WorkByProfession', WorkByProfession);
app.component('NewsAndArticles', NewsAndArticles);
app.component('BottomParagraph', BottomParagraph);
app.component('FooterServices', FooterServices);
app.component('Footer', Footer);
app.mount('#app');
