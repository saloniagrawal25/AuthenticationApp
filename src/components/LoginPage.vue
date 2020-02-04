<template>
  <article>
    <div class="container" :class="{'sign-up-active':signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Welcome Back!</h2>
            <p>Please Login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp =!signUp">Sign In</button>
          </div>
          <div class="overlay-right">
            <h2>Welcome!</h2>
            <p>Please enter your personal details</p>
            <button class="invert" id="signUp" @click="signUp =!signUp">Sign Up</button>
          </div>
        </div>
      </div>
      <form class="sign-up" method="post" action="https://iotharsh.herokuapp.com/signup">
        <h2>Create User</h2>
        <div>Use your email for registration</div>
        <input name="userName" type="text" placeholder="Name" />
        <input name="userEmail" type="email" placeholder="Email" />
        <input name="userPassword" type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <form class="sign-in" method="post" action="https://iotharsh.herokuapp.com/signin">
        <h2>SIGN IN</h2>
        <div>Use your account</div>
        <input name="userEmail" type="email" placeholder="Email" />
        <input name="userPassword" type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
        <a href="#">Forgot your password</a>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  data: () => {
    return {
      signUp: false
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0.9;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);

  .overlay-container {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100%;
  }
  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #0b5895, #013a7a);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  @mixin overlays($property) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 84px 38px;
    width: 40%;
    height: 65%;
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }
  .overlay-left {
    @include overlays(-20%);
  }
  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}
h2 {
  margin: 0;
  font-size: 2rem;
}
p {
  margin: 20px 0 30px;
  font-size: 1.2rem;
}
a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}
button {
  border-radius: 20px;
  border: 1px solid #004594;
  background-color: #004593;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
}
button.invert {
  background-color: transparent;
  border-color: #fff;
}
form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 84px 38px;
  width: 40%;
  height: 65%;
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;
  div {
    font-size: 1rem;
  }
  input {
    background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% -30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;
    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}
.sign-in {
  left: 0;
  z-index: 2;
}
.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}
.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }
  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }
  .overlay-container {
    transform: translateX(-100%);
  }
  .overlay {
    transform: translateX(50%);
  }
  .overlay-left {
    transform: translateX(0);
  }
  .overlay-right {
    transform: translateX(20%);
  }
}
@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) {
  /* comes into effect for screens between 321 and 480 pixels (inclusive) */
  .container {
    width: 320px;
  }
  .overlay-left {
    width: 100%;
    transform: translateY(0);
    align-items: center;
  }
  .overlay-right {
    width: 100%;
    transform: translateY(-20%);
    align-items: center;
  }
  form {
    width: 320px;
    align-items: center;
    padding: 84px 0;
  }
}
</style>
