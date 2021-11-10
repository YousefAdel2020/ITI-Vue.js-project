<template>
  <div class=" container-fluid" id="g">
    <div id="wrapper">
      <div class="row" id="main">
        <div class="col-12">
          <div class=" content">
            <h1>
              Powdercoating is the new step forward in our pursuit of zero waste
              production.
            </h1>
            <button type="button" class="btn btn-outline-dark" id="btn1">
              View the powdercoat collection
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div id="feature">
          <h2>
            Featured collections
          </h2>
          <button type="button" class="btn btn-outline-dark" id="btn2">
            view all collections
          </button>
        </div>
      </div>
      <div class="row" id="main2">
        <div
          class="card p-1"
          style="margin: 0.3rem;width: 23rem; background-color: rgb(246, 246, 246); border:none "
        >
          <img
            src="../assets/collection-card-new-arrivals-2.jpg"
            class="card-img-top"
            height="500"
          />
          <h6 class="  my-2" style="font-weight:bold">
            New Arrivals
          </h6>
          <p>
            Fresh designs, made to last
          </p>
        </div>

        <div
          class="card p-1"
          style="margin: 0.3rem;width: 23rem; background-color: rgb(246, 246, 246); border:none "
        >
          <img
            src="../assets/20-1_yard_tile.jpg"
            class="card-img-top"
            height="500"
          />
          <h6 class="  my-2" style="font-weight:bold">
            New Arrivals
          </h6>
          <p>
            Fresh designs, made to last
          </p>
        </div>

        <div
          class="card p-1"
          style="margin: 0.3rem;width: 23rem; background-color: rgb(246, 246, 246); border:none "
        >
          <img src="../assets/beeld-2.jpg" class="card-img-top" height="500" />
          <h6 class="  my-2" style="font-weight:bold">
            New Arrivals
          </h6>
          <p>
            Fresh designs, made to last
          </p>
        </div>
      </div>
    </div>

    <div class="row text-center" id="main3">
      Industrial design and fashion come together in our pocket-sized
      essentials. Made in Holland with great care for quality, people and the
      environment. A better world starts in your pocket.
    </div>
    <div class="row">
      <div class="col-6">
        <video
          src="../assets/cardprotector.mp4"
          autoplay
          muted
          loop
          style="width:800px"
        ></video>
      </div>
      <div class="col-6" id="cardp">
        <div style="width:50%;margin-left:30px">
          <h5 style="font-weight:bold">QUICK ACCESS</h5>
          <p style="font-size:18px;margin-bottom:30px">
            The patented mechanism of our wallets provides a simple and fast way
            to access your cards.
          </p>
          <button type="button" class="btn btn-outline-dark" style="padding:10px">
          View all models
        </button>
        </div>
      </div>
    </div>


  <div class="row">
     
      <div class="col-6" id="cardp">
        <div style="width:50%;margin-left:30px">
          <h5 style="font-weight:bold">
PROTECT YOUR CARDS</h5>
          <p style="font-size:18px;margin-bottom:30px">
           The aluminium Cardprotector protects your cards from bending, breaking and unwanted RFID and NFC communication.


          </p>
          <button type="button" class="btn btn-outline-dark" style="padding:10px">
          Learn more
        </button>
        </div>
      </div>
       <div class="col-6">
        <video
          src="../assets/miniwallet.mp4"
          autoplay
          muted
          loop
          style="width:700px;margin-left:50px"
        ></video>
      </div>
    </div>

  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;

  vertical-align: baseline;
}
#wrapper {
  height: 550px;
}
#main {
  position: absolute;
  width: 100%;
  height: 550px;
  margin: 0;
  overflow: hidden;
  background: url("../assets/banner-desktop-2.jpg");
  background-size: cover;
  background-position: 50%;
}
h1 {
  color: white;
  font-family: "FFMetaSerif";
  font-weight: 700;
  font-size: 56px;
  line-height: 55px;

  padding: 60px 24px;
  margin-top: 30px;
  margin-left: 200px;
}
.content {
  width: 800px;
}
#btn1 {
  padding: 16px;
  margin-left: 220px;
  margin-top: 0;
}
#btn1[data-v-0d6a481e] {
  padding: 16px;
  margin-left: 220px;
  margin-top: 0;
  font-weight: bold;
  color: white;
  border-color: white;
}
#btn1:hover {
  color: #212529;
}
.btn-outline-dark:hover {
  color: #212529;
  background-color: white;
  border-color: white;
}
.btn-outline-dark:hover {
  color: #212529;
  background-color: white;
  border-color: white;
}
h2 {
  font-size: 2rem;
  line-height: 130%;
  font-weight: 700;
}
#g {
  background-color: rgb(246, 246, 246);
}
#feature {
  background-color: rgb(246, 246, 246);
  width: 100%;
  color: black;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-left: 40px;
}
#btn2 {
  padding: 16px;
  color: black;
  border-color: black;
  font-weight: bold;
}
#btn2 > .btn-outline-dark[data-v-0d6a481e]:hover {
  color: white;
  background-color: black;
  border-color: black;
}
#main2 {
  margin-left: 130px;
  color: black;
  background-color: rgb(246, 246, 246);
  padding-bottom: 30px;
}
#main2 > img {
  height: 500px;
}
#main3 {
  width: 100%;
  height: 400px;
  background-color: white;
  padding: 128px 32px;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: black;
}
#cardp {
  padding: 150px 0;
  padding-left: 70px;
  
  flex-wrap: wrap;
}
</style>

<script>
export default {};
</script>
