<template>
  <footer class="bg-dark">
    <div class="container text-md-start py-4 footer">
      <ul class="footer_nav">
        <li class="nav-item pt-1">
            <a href="#/user/boarding" class="nav-link text-light a-hover fw-bold">產品區</a>
          </li>
          <li class="nav-item pt-1">
            <a href="#/orders" class="nav-link text-light a-hover fw-bold">訂單查詢</a>
          </li>
          <li class="nav-item pt-1">
            <a href="#/followPage" class="nav-link text-light a-hover fw-bold">我的收藏</a>
          </li>
          <li class="nav-item pt-1">
            <a href="#/about" class="nav-link text-light a-hover fw-bold">關於綿綿</a>
          </li>
      </ul>
      <div class="footer_social">
        <ul class="list-inline text-center mb-0">
            <li class="list-inline-item">
              <a class="text-light" href="#" @click.prevent="">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item ms-2">
              <a class="text-light" href="#" @click.prevent="">
                <i class="fab fa-facebook-messenger"></i>
              </a>
            </li>
            <li class="list-inline-item ms-2">
              <a class="text-light" href="#" @click.prevent="">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="list-inline-item ms-2">
              <a
                class="text-light"
                href="https://github.com/Vincent5146"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
      </div>
      <div class="footer_copyright">
        <p>© Copyright 2021 軟綿綿</p>
        <p>個人練習作品，無商業用途</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
footer {
  margin-top: 40px;
  min-height: 150px;
  & a {
    color: #000;
    text-decoration: none;
    transition: all 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }
}
.material-icons {
  font-size: 35px;
}
.footer {
  &_logo {
    display: block;
    background:  #dbd0be;
    text-indent: 101%;
    overflow: hidden;
    white-space: nowrap;
    width: 130px;
    height: 40px;
    transition: all 0.3s;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    &:hover {
      opacity: 0.6;
    }
  }
  &_social {
    display: flex;
    justify-content: center;
    margin: 15px 0 5px;
    & a {
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
      & img {
        border-radius: 20px;
        width: 28px;
      }
    }
  }
  &_copyright {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    color: #ddd;
  }
  &_nav {
    display: flex;
    justify-content: center;
    margin-top: 18px;
    padding-left: 0;
    list-style: none;
    & li {
      margin-right: 30px;
      @media only screen and (max-width: 600px) {
        margin-right: 20px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &_link {
      line-height: 1.5;
      color: #fff;
      transition: all 0.3s;
      @media only screen and (max-width: 600px) {
        font-size: 15px;
      }
    }
  }
}
</style>
