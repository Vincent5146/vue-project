<template>
  <div class="service">
    <div class="content">
      <div class="text">
        <h3>DAYCARE</h3>
        <h3>社交 ‧ 安親</h3>
      </div>
      <div class="text2">
        <ul>
          <li>狗狗是群聚動物 ( pack animal )，整天孤單在家的狗狗是很寂寞的</li>
          <li>挪威動物行為學家 Turid Rugaas 說：「狗狗有四大需求－食物、水、 睡眠和 ” 社交接觸 ”」 狗狗和我們一樣需要 ” 社交接觸 ” 結交好朋友</li>
          <li>北歐是著名的狗狗資優班，只收溫和友善、社會化程度較高的狗狗，您家狗狗容易結交品學兼優的好朋友</li>
          <li>北歐也以「嚴格檢查疫苗」聞名，每隻寵物都有疫苗和體內、外驅蟲預防藥的保護，不帶病菌回家</li>
        </ul>
        <div align="right">
          <a href="#" class="btn">PRICE 價目表</a>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="https://upload.cc/i1/2021/11/22/eo5WLR.jpg" class="btn" alt="社交">
    </div>
  </div>
</template>

<style lang="scss" scope>
.service{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap:1.5rem;
  .image{
    flex:1 1 40rem;
    img{
      width:100%;
    }
  }
  .content{
    display: flex;
    .text{
      width: 18%;
      font-size: 2rem;
      color: #333;
    }
    .text2{
      width: 82%;
      h2{
      font-weight: bold;
      color: #219150;
      }
      li{
        color: black;
        font-size: 1.2rem;
        line-height: 1;
        padding:1rem 0;
      span{
        font-size: 1.2rem;
        font-weight: bold;
        margin-right: 1rem;
        color: #219150;
        }
      }
    }
    .btn{
      margin-top: 0.5rem;
      border: 0.2rem solid #10221b;
      color: #10221b;
      cursor: pointer;
      background: none;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
    .btn:hover {
      background: #219150;
      color: #fff;
    }
  }
}
</style>
