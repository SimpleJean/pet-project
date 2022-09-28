<script setup>
</script>

<template>
  <header>
    <TopHeader />
  </header>
  <main class="notebook default">
    <MainContent />
    <Dashboard />
    <WorkInCompany />
    <WorkByProfession />
    <NewsAndArticles />
    <BottomParagraph />
  </main>
  <footer>
    <FooterServices />
    <Footer />
  </footer>
</template>

<style>
.default {
  width: 1280px;
  margin: 0 auto;
}

@media (max-width: 1320px) {
  .notebook {
    width: 100vw;
    margin: 0 auto;
  }
}

@media (max-width: 1280px) {
  .notebook {
    width: 100vw;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .notebook {
    margin: 0 auto;
  }
}
</style>
