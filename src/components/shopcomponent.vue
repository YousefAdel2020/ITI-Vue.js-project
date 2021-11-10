<template>
  <div class=" container-fluid" id="g">
    <div id="wrapper">
      <div class="row" id="main">
        <div class="col-12">
          <div class=" content">
            <h1>
              All wallets
            </h1>
            <h4>MADE IN HOLLAND</h4>
            <div style="width:55%">
              <p>
                Secrid wallets are made in Holland, with great care for product,
                people and our planet. The patented mechanism allows you to
                slide out your cards with one simple motion. The aluminium
                casing protects from bending, breaking and unwanted wireless
                communication (RFID safe).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class=" d-flex flex-row justify-content-center align-content-center" style="background-color:#e2dfd9;">
        <div class=" d-flex flex-column justify-content-center align-content-center" style="margin:30px;text-align:center">
            <img src="../assets/card.png" alt="" width="30" height="36" style="text-align:center">
            <h6>all wallets</h6>
        </div>

               <div class=" d-flex flex-column justify-content-center align-content-center" style="margin:30px;text-align:center">
            <img src="../assets/card.png" alt="" width="30" height="36">
            <h6>cardProtector</h6>
        </div>

               <div class=" d-flex flex-column justify-content-center align-content-center" style="margin:30px;text-align:center">
            <img src="../assets/card.png" alt="" width="30" height="36">
            <h6>Moneyband</h6>
        </div>

               <div class=" d-flex flex-column justify-content-center align-content-center" style="margin:30px;text-align:center">
            <img src="../assets/card.png" alt="" width="30" height="36">
            <h6>Cardslide</h6>
        </div>

               <div class=" d-flex flex-column justify-content-center align-content-center" style="margin:30px;text-align:center">
            <img src="../assets/card.png" alt="" width="30" height="36">
            <h6> miniwallet</h6>
        </div>

               <div class=" d-flex flex-column justify-content-center align-content-center" style="margin:30px;text-align:center">
            <img src="../assets/card.png" alt="" width="30" height="36">
            <h6>slimwallet</h6>
        </div>

               <div class=" d-flex flex-column justify-content-center align-content-center" style="margin:30px;text-align:center">
            <img src="../assets/card.png" alt="" width="30" height="36">
            <h6>twinwallet</h6>
        </div>

    </div>


 <div class="row justify-content-center">
            <div class="card p-1" style="margin: 0.2rem;width: 14rem; border:none; background-color: rgb(246, 246, 246); " v-for="product in products" :key='product.id'>
                <img :src="product.image" class="card-img-top" :title="product.title"  style="width:150px;height:250px;margin-left:25px">
                <h3 class=" text-center my-2">{{product.title}}</h3>
                
              

            </div>
        </div>

  </div>
</template>

<style scoped>
#wrapper {
  height: 550px;
}
#main {
  position: absolute;
  width: 100%;
  height: 550px;
  margin: 0;
  overflow: hidden;
  background: url("../assets/all-wallets_hero_0.jpg");
  background-size: cover;
  background-position: 50%;
}
h1 {
  color: white;
  font-family: "FFMetaSerif";
  font-weight: 700;
  font-size: 56px;
  line-height: 55px;

  padding-top: 60px;
  padding-bottom: 10px;
  margin-top: 30px;
}
.content {
  width: 800px;
  color: white;
  margin-left: 50px;
}

#g {
  margin: 0;
  padding: 0;
}
</style>

<script>
import products from '../product'
export default {

    data: () => ({
                 products:products,
                 

                }),
};
</script>
