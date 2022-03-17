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
              <div class="btn">
                <a class="button4" style="background-color: #f14e4e"
                  >Remove Character</a
                >
              </div>
            </div>
            <div class="Character">
              <h4>Character2</h4>
              <img src="" alt="image2" height="200" width="200" />
              <p>Character2 story summary</p>
              <div class="btn">
                <a class="button4" style="background-color: #f14e4e"
                  >Remove Character</a
                >
              </div>
            </div>
            <div class="Character">
              <h4>Character3</h4>
              <img src="" alt="image3" height="200" width="200" />
              <p>Character3 story summary</p>
              <div class="btn">
                <a class="button4" style="background-color: #f14e4e"
                  >Remove Character</a
                >
              </div>
            </div>
            <div class="Character">
              <h4>Character4</h4>
              <img src="" alt="image4" height="200" width="200" />
              <p>Character4 story summary</p>
              <div class="btn">
                <a class="button4" style="background-color: #f14e4e"
                  >Remove Character</a
                >
              </div>
            </div>
            <div class="Character">
              <h4>Character5</h4>
              <img src="" alt="image5" height="200" width="200" />
              <p>Character5 story summary</p>
              <div class="btn">
                <a class="button4" style="background-color: #f14e4e"
                  >Remove Character</a
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>

    <!-- Character Search -->
    <div class="wrapper" id="charsearch">
      <div class="input-data">
        <input type="text" value="" />
        <label>Character Searching</label>
      </div>
    </div>

    <!-- Character Display -->
    <section class="dis" id="chardis">
      <div class="dis-img">
        <img src="" alt="character image" height="350" width="350" />
      </div>
      <div class="dis-charname">
        <h3>Character Name</h3>
      </div>
      <div class="dis-storylist">
        <h4>Story List</h4>
      </div>
      <div class="dis-storysum">
        <h4>Story Summary</h4>
      </div>
      <div class="dis-but">
        <a class="button4" style="background-color: #f14e4e">Pick Character</a> 
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="worlds">
        <quotes><i>"To create your best 5-aside Marvel Soccer Team"</i></quotes>
      </div>
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

.btn {
  padding-top: 10px;
  padding-bottom: 10px;
}

.worlds {
  padding-top: 30px;
  display: flex;
  /* 水平置中 */
  justify-content: center;
  /* 垂直置中 */
  align-content: center;
  flex-wrap: wrap;
}

.dis {
  display: grid;
}

a.button4 {
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 250;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
}

a.button4 :hover {
  border-color: rgb(255, 255, 255);
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
  font-display: center;
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

.dis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr, 1fr, 1fr, 1fr;
  grid-template-areas:
    "img charname"
    "img storylist"
    "img dis-storysum"
    "img dis-storysum"
    "dis-but dis-but";
}

.dis-img {
  grid-area: img;
}

.dis-charname {
  grid-area: charname;
}

.dis-storylist {
  grid-area: storylist;
}

.dis-storysum {
  grid-area: dis-storysum;
}

.dis-but {
  grid-area: dis-but;
}

header {
  height: auto;
  text-align: center;
  border-bottom: 2px solid rgba(255, 0, 0, 0.637);
}

body {
  font-family: "Lato", sans-serif;
  text-align: center;
  align-content: center;
  justify-self: center;
}

footer {
  height: 100px;
  border-top: 2px solid rgba(255, 0, 0, 0.637);
}

section {
  padding-top: 30px;
  padding-bottom: 30px;
}

.container {
  text-align: center;
}
</style>