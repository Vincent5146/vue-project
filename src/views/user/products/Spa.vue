<template>
  <div class="service mt-5">
    <div class="content">
      <div class="text">
        <h3>DAYCARE</h3>
        <h3>純淨 ‧ 沐浴</h3>
      </div>
      <div class="text2">
        <ul class="mt-3">
          <li>不鼓勵狗狗太頻繁的沐浴，以免破壞狗狗皮膚天然的油脂平衡和保護力</li>
          <li>專業褓母幫狗狗沐浴，觀察狗狗反應調整姿勢和水流，融入寵物按摩技巧，給每隻狗狗獨一無二美好的沐浴體驗</li>
          <li>不用烘箱，全程由專業褓母純手吹乾、梳澎或梳直，並觀察狗狗反應調整吹風方式</li>
          <li>全館採用美國 Double K 專業吹水機，低溫集中風呵護髮質</li>
          <li>獨家大浴缸，不定期推出有機椰子油、甜杏仁油泡澡服務，讓狗狗享受皮膚毛髮極致滋潤</li>
        </ul>
        <div class="mt-5" align="right">
          <a href="https://upload.cc/i1/2021/12/16/m9J0YP.jpg" class="btn">PRICE 價目表</a>
        </div>
      </div>
    </div>
    <div class="image mt-5">
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
    background: #ebe3e3;
    height: 830px;
    background-image: url(https://upload.cc/i1/2021/11/22/ZI4NHg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
  }
  .content{
    display: flex;
    .text{
      width: 230px;
      font-size: 2rem;
      h3{
        font-weight: bold;
        color: #09813b;
      }
    }
    .text2{
      width: 1066px;
      border: 5px #F0F0F0 solid;
      padding: 15px;
      h2{
      font-weight: bold;
      color: #29af61;
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
        color: #29af61;
        }
      }
    }
    .btn{
      margin-top: 0.5rem;
      border: 0.2rem solid #5eb674;
      color: #10221b;
      cursor: pointer;
      background: none;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
    .btn:hover {
      background: #6cc091;
      color: #fff;
    }
  }
}
</style>
