<template>
  <div class="service mt-5">
    <div class="content">
      <div class="text">
        <h3>SWIM</h3>
        <h3>溫水 ‧ 游泳</h3>
      </div>
      <div class="text2">
        <h2>狗狗游泳的好處</h2>
        <ul class="mt-3">
          <li><span>促進新陳代謝</span>在溫水中活動，可促進狗狗全身新陳代謝，促進血液運送氧氣和營養到全身，並加速體內毒素排出，有益淋巴和呼吸系統，增加血中含氧量</li>
          <li><span>關節骨骼減壓運動</span>藉由水的浮力，減輕關節和骨骼負擔，鼓勵狗狗在水中伸展和運動，水還能舒緩關節炎反應</li>
          <li><span>鍛鍊強健肌肉</span>水中運動能幫助舒緩肌肉，藉由水的阻力和浮力，狗狗能安全有效地鍛鍊肌力和增強肌肉</li>
          <li><span>舒緩神經系統</span>水可以放鬆狗狗的神經系統，幫助調適壓力。水可以刺激關節連結知覺，幫助重建受損的感覺統合系統</li>
          <li><span>有益情緒健康</span>玩水樂趣無窮，幫助狗狗展現在陸地無法做出的動作，增加自信和好心情</li>
          <li><span>保持勻稱體態</span>每週游泳，溫和低衝擊的運動，幫助狗狗保持勻稱健康的體態</li>
        </ul>
        <div class="mt-5" align="right">
          <a href="https://upload.cc/i1/2021/12/16/Aeja1z.jpg" class="btn">PRICE 價目表</a>
        </div>
      </div>
    </div>
    <div class="image mt-3">
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
    background-image: url(https://upload.cc/i1/2021/11/22/VJ418T.jpg);
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
