<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-card-title>Sign In</v-card-title>
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
                  type="password"
                  required
                  :counter="15"
                ></v-text-field>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                ></v-checkbox>

                <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

                <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

                <v-btn class="mr-4" color="primary" :disabled="!valid" @click="login">Log In</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    valid: true,
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