<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-6" style="border-radius: 12px">
          <v-card-title class="pt-5 gradient justify-center elevation-6" dark>
            <h2>SIGN IN</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation class="py-6">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                prepend-icon="person"
                required
                type="email"
                class="px-5"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                prepend-icon="lock"
                :type="showPassword ? 'text' : 'password'"
                required
                :counter="15"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                class="px-5"
              ></v-text-field>
              <a href class="px-5">Forgot Password?</a>
            </v-form>
          </v-card-text>
          <v-card-actions class="px-10 pb-6">
            <!-- <v-btn color="#84cf6f" class="mr-4 elevation-6" @click="reset">Reset Form</v-btn>
            <v-spacer></v-spacer>-->
            <v-row align="center">
              <v-btn
                class="elevation-6"
                color="#16c0b0"
                :disabled="!valid"
                @click="login"
                block
                large
                dark
                >Log In</v-btn
              >
              <v-divider>Or</v-divider>
              <!-- <p class="justify-center">Or Login with</p> -->
              <v-col cols="12" sm="git 6">
                <v-btn class="my-2 elevation-6" color="red" dark>
                  <v-icon left dark bold class="mr-2">mdi-google</v-icon>Google
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn class="my-2 elevation-6" color="blue" dark>
                  <v-icon right dark bold class="mr-2">mdi-facebook</v-icon
                  >Facebook
                </v-btn>
              </v-col>
              <v-row>
                <a href class="pb-5 px-5" @click="signUp"
                  >Dont have an account!! Sign up Now</a
                >
              </v-row>
              <!-- <v-spacer></v-spacer>
              <i class="fab fa-google"></i>-->
            </v-row>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 8) || "Password must be greater than 8 characters"
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    login() {
      this.$router.push("/panel");
    },
    signUp() {
      this.$router.push("/signup");
    }
  }
};
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(to right, #84cf6f, #16c0b0);
}
.loginOverlay {
  background-image: linear-gradient(lightgrey);
}
</style>
