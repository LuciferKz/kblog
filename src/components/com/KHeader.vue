<template>
    <header id="header">
      <section class="header">
        <section class="logo"></section>
        <section class="btn-toggle-nav-box">
          <section class="btn-toggle-nav" @click="toggleNav" :class="{ 'show-nav': showNav }">
            <i class="line"></i>
            <i class="line mid-line"></i>
            <i class="line"></i>
          </section>
        </section>
        <nav id="main-nav">
          <transition name="slide-hor-fade">
            <section class="main-nav" v-show="showNav">
              <router-link :to="{ name: 'Blog' }">Blog</router-link>
              <router-link to="blog">Profile</router-link>
              <router-link to="blog">Contact</router-link>
            </section>
          </transition>
        </nav>
        <section class="sec-search">
          <transition name="slide-ver-fade">
            <section class="search-container" v-show="showSearchContainer">

            </section>
          </transition>
        </section>
      </section>
    </header>
</template>

<script>
export default {
  name: 'KHeader',
  data () {
    return {
      showNav: false,
      showSearchContainer: false // 是否显示搜索栏容器
    }
  },
  mounted () {
    this.$addEvent(document, 'scroll', () => {
      this.showSearchContainer = window.scrollY > 0
    })
  },
  methods: {
    toggleNav () {
      console.log('toggleNav')
      this.showNav = !this.showNav
    }
  }
}
</script>

<style>
  #header {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #eff1f2;
  }
  .header {
    display: flex;
    height: 60px;
    margin: 0 20px;
    background-color: #FFF;
  }

  .logo {
    width: 100px;
    background: url('../../assets/img/logo.png') no-repeat center center;
    background-size: 100px auto;
    margin: 0 30px 0 40px;
  }

  #main-nav {
    overflow: hidden;
    display: flex;
    flex: 1;
  }

  .main-nav {
    display: flex;
  }

  .main-nav a {
    position: relative;
    width: 100px;
    padding: 0 20px;
    text-align: center;
    line-height: 60px;
    letter-spacing: 2px;
    font-size: 18px;
    transition: all .2s linear;
  }

  .main-nav a:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: #57BBBF;
    transition: all .2s linear;
    transform: translate(-50%, 0);
  }

  .main-nav a:hover {
    color: #57BBBF;
  }

  .main-nav a:hover::after {
    width: 100%;
  }

  .sec-search {
    overflow: hidden;
    position: relative;
    width: 300px;
    background-color: #333;
  }

  .search-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #FFF;
    border-left: 1px solid #eff1f2
  }

  .btn-toggle-nav-box {
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-right: 1px solid #eff1f2;
    border-left: 1px solid #eff1f2;
  }

  .btn-toggle-nav {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all .2s linear;
  }

  .btn-toggle-nav .line {
    width: 20px;
    height: 2px;
    background-color: #333;
    transition: all .2s linear;
  }

  .btn-toggle-nav::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
  }

  .btn-toggle-nav.show-nav {
    height: 12px;
  }

  .btn-toggle-nav.show-nav .mid-line {
    transform: translateX(10px);
    opacity: 0;
  }

  .btn-toggle-nav.show-nav .line:first-child {
    transform: rotate(-30deg);
  }

  .btn-toggle-nav.show-nav .line:last-child {
    transform: rotate(30deg);
  }
</style>
