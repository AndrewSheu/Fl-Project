<template>
  <div id="app">
    <!-- Header -->
    <header class="navbar container" id="mainNav">
      <img
        src="https://www.thetruecolors.org/wp-content/uploads/2021/02/marvel-logo-header-1.jpg"
        height="100"
      />
      <h1>Marvel soccer Team</h1>
    </header>

    <!-- Team Display-->
    <body id="teamchar">
      <div>
        <h3>Your marvel soccer team</h3>
        <section>
          <div class="table">
            <div class="Character">
              <h4>Character1</h4>
              <img src="" alt="image1" height="200" width="200" />
              <p>Character1 story summary</p>
              <div class="btn"><button>Remove Character1</button></div>
            </div>
            <div class="Character">
              <h4>Character2</h4>
              <img src="" alt="image2" height="200" width="200" />
              <p>Character2 story summary</p>
              <div class="btn"><button>Remove Character2</button></div>
            </div>
            <div class="Character">
              <h4>Character3</h4>
              <img src="" alt="image3" height="200" width="200" />
              <p>Character3 story summary</p>
              <div class="btn"><button>Remove Character3</button></div>
            </div>
            <div class="Character">
              <h4>Character4</h4>
              <img src="" alt="image4" height="200" width="200" />
              <p>Character4 story summary</p>
              <div class="btn"><button>Remove Character4</button></div>
            </div>
            <div class="Character">
              <h4>Character5</h4>
              <img src="" alt="image5" height="200" width="200" />
              <p>Character5 story summary</p>
              <div class="btn"><button>Remove Character5</button></div>
            </div>
          </div>
        </section>
      </div>
    </body>

    <!-- Character Search -->
    <div class="wrapper" id="charsearch">
      <div class="input-data">
        <input type="text" />
        <label>Character Searching</label>
      </div>
    </div>

    <!-- Character Display -->
    <section id="chardis">
      <div>
        <img src="" alt="" />
        <h3>Character Name</h3>
        <h4>Story List</h4>
        <h4>Story Summary</h4>
        <button id="pick-char-bot">Pick as soccer team member</button>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <!--
      <div class="button">
        <h1>button</h1>
        <div class="icon">
          <i class="fa-solid fa-delete-left"></i>
          </div>
      </div>
      -->
    </footer>
  </div>
</template>



<script>
export default {
  name: "App",
  components: {},
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap");

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h3 {
  padding-top: 20px;
  padding-bottom: 20px;
}

p,
img {
  padding-top: 15px;
  padding-bottom: 15px;
}

button {
}

#mainNav {
  padding-top: 25px;
  padding-bottom: 25px;
  transition: padding-top 0.3s padding-bottom 0.3s;
  display: center;
  align-content: center;
}

#teamchar {
  height: 400px;
  align-content: center;
  text-align: center;
}

#charsearch {
  display: inline-block;
}

.wrapper {
  width: 450px;
  background: #fff;
  padding: 30px;
  box-shadow: 0px 0px 3px rgba(255, 43, 43, 0.479);
}
.wrapper .input-data {
  height: 40px;
  width: 100%;
  position: relative;
  font-size: 20px;
}
.wrapper .input-data input {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid silver;
}

.wrapper .input-data label {
  position: absolute;
  bottom: 10px;
  left: 0;
  transform: translateY(-20px);
}

.table {
  display: flex;
  align-content: center;
  padding-top: 25px;
  padding-bottom: 50px;
}

.Character {
  padding-left: 80px;
}

header {
  height: auto;
  border-bottom: 2px solid rgba(255, 0, 0, 0.637);
  text-align: center;
}

body {
  font-family: "Lato", sans-serif;
  text-align: center;
  align-content: center;
  justify-self: center;
}

footer {
  display: flex;
  background-color: red;
  height: 100px;
}

.container {
  text-align: center;
}
</style>
