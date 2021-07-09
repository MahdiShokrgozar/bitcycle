<template>
  <div>
    <div class="bg-dark--1 h-min-100vh">
      <!-- <b-container>
			<b-navbar type="dark" variant="fade">
				<b-navbar-brand href="/" class="align-right">
					<b-img
						left
						src="/assets/logo.png"
						alt="brand-logo"
						width="80px"
						height="80px"
					></b-img>
				</b-navbar-brand>
			</b-navbar>
		</b-container> -->
      <section class="align-items-center">
        <b-container>
          <h1 class="text-white mt-4 pt-4 mb-10">
            <center>ورود</center>
          </h1>
          <b-row align-h="center">
            <b-col xl="6" lg="7" md="8" sm="9" cols="10">
              <div class="form--v5 rounded--10 bg-light--1">
                <transition name="fade" enter-active-class="animated fadeIn">
                  <b-container fluid>
                    <b-row align-h="center" class="mb-5 mt-5">
                      <!-- <h2 class="textBlue">
						{{ $t("login.login") }}
					</h2> -->
                    </b-row>

                    <b-form @submit.stop.prevent="onSubmit">
                      <b-row align-h="center">
                        <b-col md="9" cols="9">
                          <b-form-group
                            id="username_group"
                            :label="$t('login.username')"
                            label-for="username"
                          >
                            <b-form-input
                              id="username"
                              type="text"
                              v-model="$v.form.username.$model"
                              :state="validateState('username')"
                            >
                            </b-form-input>
                            <b-form-invalid-feedback
                              id="username-live-feedback"
                            >
                              {{ $t("validation.required") }}
                            </b-form-invalid-feedback>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row align-h="center">
                        <b-col md="9" cols="9">
                          <b-form-group
                            id="password_group"
                            :label="$t('login.password')"
                            label-for="password"
                          >
                            <b-form-input
                              id="password"
                              type="password"
                              v-model="$v.form.password.$model"
                              aria-describedby="password-live-feedback"
                              :state="validateState('password')"
                            ></b-form-input>
                            <b-form-invalid-feedback
                              id="password-live-feedback"
                            >
                              {{ $t("validation.required") }}
                            </b-form-invalid-feedback>

                            <small>
                              <b-link to="/forgot-pass" class="text-color--400">
                                {{ $t("login.forgotPassword") }}</b-link
                              >
                            </small>
                          </b-form-group>
                        </b-col>
                      </b-row>

                      <b-row align-h="center" class="justify-content-center">
                        <b-col cols="9">
                          <div>
                            <b-button
                              type="submit"
                              size="md"
                              class="btn btn-hover--3d btn-left btn-bg--primary"
                              >{{ $t("login.login") }}
                            </b-button>
                          </div>
                        </b-col>
                      </b-row>
                    </b-form>
                    <b-row align-h="center" class="mb-5 pb-5">
                      <b-col md="8" cols="9">
                        <hr />
                        <small class="text-color--400">
                          {{ $t("login.dontHaveAccount") }}
                          <b-link to="/register">
                            {{ $t("login.signUp") }}</b-link
                          >
                        </small>
                      </b-col></b-row
                    >
                  </b-container>
                </transition>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
      password: { required },
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v.form);
        // this.$noty.info(this.$t("alert.alertInvalidField"));
      } else {
        console.log(this.form.username);

        let data = new FormData();
         console.log(this.form.username);
       
        console.log(data);
        this.$store
          .dispatch("login", data)
          .then((response) => {
            console.log(response);

            this.$router.push({ name: "Home" });
          })
          .catch((err) => {
            console.log(err);
            // this.$noty.error(err.body.error);
          });
      }
    },

    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
  },
};
</script>

<style scoped>
.btn-left {
  display: block;
  margin-right: auto;
}
.bg-light--1 {
  background-color: bisque;
}
</style>
