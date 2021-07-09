<template>
  <div>
    <b-tabs
      content-class="mt-0  text-white"
      pills
      card
      class="bg-dark--2 text-white"
      active-nav-item-class="text-white bg-warning"
      nav-class="text-white"
    >
      <!-- +++++++++++++++++++++++++++++++++++++++ bazar +++++++++++++++++++++ -->
      <b-tab
        :title="$t('news.bazar')"
        class="text-white"
        title-link-class="text-white"
        active
      >
      <bazar/>
      </b-tab>
      <!-- +++++++++++++++++++++++++++++++++++++++ fandamental +++++++++++++++++++++ -->
      <b-tab :title="$t('news.fandamental')" title-link-class="text-white">
        <b-tabs
          content-class="mt-2 "
          pills
          active-nav-item-class="text-white bg-warning"
          class="bg-dark--1"
        >
          <b-tab title="BTC" title-link-class="text-white"> </b-tab>
          <b-card
            bg-variant="secondary"
            text-variant="white"
            v-for="news in news_list"
            :key="news.title"
            :title="news.title"
            no-body
            class="mb-2"
            style="border-radius: 3px"
          >
            <b-card-body>
              <h5>{{ news.title }}</h5>
              <b-card-text v-snip="3" class="text-justify">{{
                news.body
              }}</b-card-text>
              <b-button href="#" variant="success" pill size="sm"
                ><span class="font-size--1">{{ news.pump }}</span></b-button
              >
              <b-button href="#" variant="danger" pill class="mx-1" size="sm">
                <span class="font-size--1">{{ news.dump }}</span></b-button
              >
              <b-button
                :href="news.src_link"
                target="_blank"
                rel="noopener noreferrer"
                variant="warning"
                pill
                class="text-white font-size--1"
                size="sm"
              >
                <span class="font-size--1">{{ $t("news.showLink") }}</span>
              </b-button>
              <span class="mx-2 font-size--1">{{
                news.date | moment("jYYYY/jMM/jD")
              }}</span>

              <span class="font-size--1">
                <b>{{ $t("news.source") }}</b> {{ news.src_name }}</span
              >
            </b-card-body>
          </b-card>
          <b-tab title="IRT" title-link-class="text-white pill" active>
            <b-card
              bg-variant="secondary"
              text-variant="white"
              v-for="news in news_list"
              :key="news.title"
              :title="news.title"
              no-body
              class="mb-2"
              style="border-radius: 3px"
            >
              <b-card-body>
                <h5>{{ news.title }}</h5>
                <b-card-text v-snip="3" class="text-justify">{{
                  news.body
                }}</b-card-text>
                <b-button href="#" variant="success" pill size="sm"
                  ><span class="font-size--1">{{ news.pump }}</span></b-button
                >
                <b-button href="#" variant="danger" pill class="mx-1" size="sm">
                  <span class="font-size--1">{{ news.dump }}</span></b-button
                >
                <b-button
                  :href="news.src_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="warning"
                  pill
                  class="text-white font-size--1"
                  size="sm"
                >
                  <span class="font-size--1">{{ $t("news.showLink") }}</span>
                </b-button>
                <span class="mx-2 font-size--1">{{
                  news.date | moment("jYYYY/jMM/jD")
                }}</span>

                <span class="font-size--1">
                  <b>{{ $t("news.source") }}</b> {{ news.src_name }}</span
                >
              </b-card-body>
            </b-card>
          </b-tab>
          <b-tab title="صعودی" title-link-class="text-white"> </b-tab>
          <b-tab title="نزولی" title-link-class="text-white"> </b-tab>
        </b-tabs>
      </b-tab>
      <!-- +++++++++++++++++++++++++++++++++++++++ technical +++++++++++++++++++++ -->
      <b-tab :title="$t('news.technical')" title-link-class="text-white">
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Bazar from "./rightPanel/Bazar.vue";
export default {
  data() {
    return {
      news_list: "",
    };
  },
  mounted() {
    this.getnews();
    
  },
  methods: {
    getnews() {
      this.$store
        .dispatch("getNews", "BTCUSDT")
        .then((response) => {
          console.log(response);
          this.news_list = response.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Bazar,
  },
};
</script>

<style>
.pill {
  border-radius: 40%;
  border-color: white;
}
</style>
