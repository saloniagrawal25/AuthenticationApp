<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="mt-6 mx-a elevation-10" round>
          <v-card-title class="pt-5 gradient">
            <h2>SIGN IN</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                prepend-icon="person"
                required
                type="email"
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
              ></v-text-field>
              <a href>Forgot Password</a>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="#84cf6f" class="mr-4" @click="reset">Reset Form</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="mr-4" color="#16c0b0" :disabled="!valid" @click="login">Log In</v-btn>
            <i class="fab fa-google"></i>
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
    }
  }
};
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(to right, #84cf6f, #16c0b0);
}
.loginOverlay {
  background-image: linear-gradient(
    to right bottom,
    #84cf6f,
    #49d19b,
    #00cec2,
    #02c8de,
    #5abfe9,
    #63bce8,
    #6bb9e6,
    #73b6e4,
    #51bae0,
    #28bdd6,
    #00bfc6,
    #16c0b0
  );
}
</style>