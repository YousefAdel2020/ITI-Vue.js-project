<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
      <img src="../assets/secrid-logo.png" alt="" width="110" height="17" style="margin-left:1vw">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin-left:30vw;">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/shop" >Shop</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Collection</a>
        </li>
  
        <li class="nav-item">
        <a class="nav-link" href="#">About</a>
        </li>
         <li class="nav-item">
        <a class="nav-link" href="#">Store</a>
        </li>
         <li class="nav-item">
        <a class="nav-link" href="#">Sevice</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>    

</template>

<script>
export default {
    
}
</script>