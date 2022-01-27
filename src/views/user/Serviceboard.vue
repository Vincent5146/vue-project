<template>
  <div class="banner">
    <div class="banner-txtbox">
      <h2>綿綿寵物旅館</h2>
    </div>
  </div>
  <div class="products">
    <div class="container">
      <div class="row mt-4">
        <div class="col-12 mb-4">
          <div class="row d-flex justify-content-between align-items-end" style="margin: 0 5px;">
            <!-- 選單 -->
            <h1 class="title">綿綿服務</h1>
            <div class="service-container">
              <router-link to='boarding' class="service-box">
                <img src="../../assets/images/住宿.png" alt="住宿">
                <h3>24H褓母 ‧ 住宿</h3>
              </router-link>
              <router-link to="daycare" class="service-box">
                <img src="../../assets/images/安親.png" alt="安親">
                <h3>社交 ‧ 安親</h3>
              </router-link>
              <router-link to='spa' class="service-box">
                <img src="../../assets/images/沐浴.png" alt="沐浴">
                <h3>純淨‧ 沐浴</h3>
              </router-link>
              <router-link to='swimming' class="service-box">
                <img src="../../assets/images/游泳.png" alt="游泳">
                <h3>溫水 ‧ 游泳</h3>
              </router-link>
            </div>
          </div>
        </div>
        <RouterView/>
      </div>
    </div>
  </div>
</template>
