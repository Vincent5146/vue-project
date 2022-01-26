<template>
  <div class="service">
    <div class="content">
      <div class="text">
        <h3>BOARDING</h3>
        <h3>24H褓母 ‧ 住宿</h3>
        <div class="sideMenu mt-4">
          <ul class="tab">
            <li v-for="tab in tempTabs" :key="tab.id" @click="handleTabChange(tab.name)">
              <input type="radio" :id="tab.id" :value="tab.name" v-model="currentTab" />
              <label :for="tab.id">{{ tab.name }}</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="text2">
        <div>
          <h2>{{ computedTabData.title }}</h2>
          <h2>{{ computedTabData.title2 }}</h2>
        </div>
        <ul class="mt-3">
          <li v-for="(content, index) in computedTabData.contents" :key="index">{{ content }}</li>
        </ul>
        <div class="mt-5" align="right" @click="$router.push({ path: `/products` })">
          <p class="btn">下單請按</p>
        </div>
      </div>
    </div>
    <div class="image-boarding mt-5" :style="{ backgroundImage: `url(${computedTabData.pic})` }">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tempTabs: [
        { name: '貓咪', id: 1 },
        { name: '小型犬', id: 2 },
        { name: '中型犬', id: 3 },
        { name: '大型犬', id: 4 }
      ],
      tabInfo: {
        貓咪: {
          tabName: 'Cat',
          title: '貓咪住宿',
          title2: 'CAT BOARDING',
          pic: 'https://upload.cc/i1/2021/11/22/aUT3lb.jpg',
          contents: [
            '貓咪喜歡上上下下，所以我們的貓房挑高 1.8 米，讓貓咪好好居高臨下',
            '貓咪熱愛暖暖的陽光，所以貓房設計在整棟建築採光最好的地方',
            '住宿5天以上貓咪，因已較安心熟悉，可享用放風時間。視貓咪個性、環境、當時貓咪住宿數量彈性調整，我們會盡其所能給貓咪最大的空間！',
            '每間貓房最多可住三隻貓咪，可打通供一家六貓一起住',
            '獨家！每間貓房配有流動水機、貓咪吊床和緊貼大樓玻璃外牆極佳採光和高度視野，讓貓咪享受睥睨馬路動態的樂趣'
          ]
        },
        小型犬: {
          tabName: '小型犬',
          title: '小型犬住宿',
          title2: 'SMALL BREED DOG BOARDING',
          pic: 'https://upload.cc/i1/2021/11/22/sBFO9m.jpg',
          contents: [
            '小型犬區供 9 公斤以下嬌小的狗狗玩樂',
            '臥房分不同小區域，讓狗狗小組活動，和自己氣味相投的狗狗玩',
            '有籠子，但不關門，害羞的狗狗可以躲進去，想玩再出來',
            '夜間睡眠可選關籠或不關籠，狗狗可任意睡在自己覺得舒服的地方',
            '室內有多種尿布和草皮，供狗狗暫時解放'
          ]
        },
        中型犬: {
          tabName: '中型犬',
          title: '中型犬住宿',
          title2: 'MEDIUM BREED DOG BOARDING',
          pic: 'https://upload.cc/i1/2021/12/20/NUS94w.jpg',
          contents: [
            '中型犬區供 9 - 23 公斤的狗狗活動',
            '有籠子，但不關門，害羞的狗狗可以躲進去，想玩再出來',
            '更害羞和緊張的狗狗可以躲到"短腿區"偏安江南',
            '活潑的狗狗可以在 Living Room 和大型犬社交社交',
            '夜間睡眠可選關籠或不關籠，狗狗可以在飛行床或沙發上自由睡',
            '室內有草皮供中大型犬室內解放'
          ]
        },
        大型犬: {
          tabName: '大型犬',
          title: '大型犬住宿',
          title2: 'LARGE BREED DOG BOARDING',
          pic: 'https://upload.cc/i1/2021/12/20/N5bvt8.jpg',
          contents: [
            '大型犬區供 23 公斤以上的大塊頭睡覺，超大飛行床讓狗狗自由翻滾',
            '狗狗像在家一樣自由上沙發和床',
            '《森林館》大型犬好幸福，和褓母睡同一間臥房，只差沒同床共枕了',
            '《森林館》中大犬可自由至陽台草皮大小便',
            '《游泳館》獨家一樓中大犬住宿區，不良於行、不方便爬樓梯的中大犬，可以住一樓哦！',
            '《游泳館》獨家一樓後院，褓母親手種的真正的草皮和果樹，讓狗狗盡情解放'

          ]
        }
      },
      currentTab: '貓咪'
    }
  },
  computed: {
    computedTabData () {
      return this.tabInfo[this.currentTab]
    }
  },
  methods: {
    handleTabChange (tabName) {
      this.currentTab = tabName
    }
  }
}
</script>
