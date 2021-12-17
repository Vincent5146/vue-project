<template>
  <div class="banner">
     <div class="img-bg" style="background-image: url('https://upload.cc/i1/2021/12/10/o4CLQ6.jpg');" >
       <div class="content">
         <p class="fs-3">綿綿是著名的狗狗資優班，只收溫和友善、社會化程度較高的狗狗，</p>
         <p class="fs-3">您家狗狗容易結交品學兼優的好朋友</p>
       </div>
      </div>
  </div>
</template>

<style scoped>
.banner{
  margin-top: 60px;
}

.img-bg{
  background-size: cover;
  background-position: center center;
  min-height: 500px;
}

@media (max-width: 768px) {
  .img-bg{
    min-height: 300px;
  }
}

.content{
  color: black;
  position: relative;
  top: 150px;
  left: 230px;
}
.content p{
  letter-spacing: 3px;
}
@media (max-width: 768px) {
  .content{
    top: 90px;
    left: 40px;
  }
}

</style>
