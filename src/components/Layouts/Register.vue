<template>
  <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
    <div>
      <v-tabs v-model="tab" show-arrows background-color="#16c0b0" icons-and-text dark grow>
        <v-tabs-slider color="#16c0b0"></v-tabs-slider>
        <v-tab v-for="i in tabs" :key="i">
          <v-icon large>{{ i.icon }}</v-icon>
          <div class="caption py-1">{{ i.name }}</div>
        </v-tab>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form
                ref="loginForm"
                v-model="valid"
                lazy-validation
                method="post"
                action="http://localhost:6969/auth/login"
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginEmail"
                      :rules="loginEmailRules"
                      label="E-mail"
                      name="userEmail"
                      required
                      prepend-icon="fas fa-envelope"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginPassword"
                      :append-icon="show1 ? 'eye' : 'eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="userPassword"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                      prepend-icon="lock"
                    ></v-text-field>
                    <a href class="px-5">Forgot Password?</a>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                    <v-btn large block color="pink darken-4" dark>
                      <v-icon left dark bold class="mr-2">mdi-google</v-icon>Google
                    </v-btn>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                    <v-btn large block :disabled="!valid" color="success" @click="loginSubmit">Login</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form
                ref="registerForm"
                v-model="valid"
                lazy-validation
                method="post"
                action="http://localhost:6969/register"
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="name"
                      :rules="[rules.required]"
                      label="Name"
                      name="userDisplayName"
                      maxlength="30"
                      required
                      prepend-icon="person"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      name="userEmail"
                      required
                      prepend-icon="fas fa-envelope"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="userPassword"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                      prepend-icon="lock"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      block
                      v-model="verify"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, passwordMatch]"
                      :type="show1 ? 'text' : 'password'"
                      name="userPassword2"
                      label="Confirm Password"
                      counter
                      @click:append="show1 = !show1"
                      prepend-icon="lock"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="referral"
                      :rules="[rules.required]"
                      label="Referral"
                      name="referral"
                      maxlength="20"
                      required
                      prepend-icon="fas fa-tags"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                    <v-btn large block color="red darken-4" dark>
                      <v-icon left dark bold class="mr-2">mdi-google</v-icon>Google
                    </v-btn>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                    <v-btn
                      large
                      block
                      :disabled="!valid"
                      color="success"
                      @click="registerSubmit"
                    >Register</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    loginSubmit() {
      if (this.$refs.loginForm.validate()) {
        this.$refs.loginForm.$el.submit();
      }
    },
    registerSubmit() {
      if (this.$refs.registerForm.validate()) {
        this.$refs.registerForm.$el.submit();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" }
    ],
    valid: true,

    name: "",
    email: "",
    password: "",
    verify: "",
    referral: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })
};
</script>
