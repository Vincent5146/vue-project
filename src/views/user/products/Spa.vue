<template>
  <div class="service">
    <div class="content">
      <div class="text">
        <h3>DAYCARE</h3>
        <h3>純淨 ‧ 沐浴</h3>
      </div>
      <div class="text2">
        <ul>
          <li>不鼓勵狗狗太頻繁的沐浴，以免破壞狗狗皮膚天然的油脂平衡和保護力</li>
          <li>專業褓母幫狗狗沐浴，觀察狗狗反應調整姿勢和水流，融入寵物按摩技巧，給每隻狗狗獨一無二美好的沐浴體驗</li>
          <li>不用烘箱，全程由專業褓母純手吹乾、梳澎或梳直，並觀察狗狗反應調整吹風方式</li>
          <li>全館採用美國 Double K 專業吹水機，低溫集中風呵護髮質</li>
          <li>獨家大浴缸，不定期推出有機椰子油、甜杏仁油泡澡服務，讓狗狗享受皮膚毛髮極致滋潤</li>
        </ul>
        <div align="right">
          <a href="#" class="btn">PRICE 價目表</a>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="https://upload.cc/i1/2021/11/22/ZI4NHg.jpg" class="card-img-top" alt="沐浴">
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
