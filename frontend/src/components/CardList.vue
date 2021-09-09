<template>
  <div class="container" v-card>
    <div class="wrapper">
      <div class="card">
        <img src="https://source.unsplash.com/900x600/?nature,1" />
        <div class="title">TITLE</div>
        <div class="content-wrap">
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores id dolore dicta perspiciatis magni quam assumenda nemo, eum, deleniti ratione excepturi, saepe dolorem cupiditate. Non dolore quia quo temporibus sint.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="card">
        <img src="https://source.unsplash.com/900x600/?nature,2" />
        <div class="title">TITLE</div>
        <div class="content-wrap">
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores id dolore dicta perspiciatis magni quam assumenda nemo, eum, deleniti ratione excepturi, saepe dolorem cupiditate. Non dolore quia quo temporibus sint.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="card">
        <img src="https://source.unsplash.com/900x600/?nature,3" />
        <div class="title">TITLE</div>
        <div class="content-wrap">
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores id dolore dicta perspiciatis magni quam assumenda nemo, eum, deleniti ratione excepturi, saepe dolorem cupiditate. Non dolore quia quo temporibus sint.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="card">
        <img src="https://source.unsplash.com/900x600/?nature,4" />
        <div class="title">TITLE</div>
        <div class="content-wrap">
          <div class="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores id dolore dicta perspiciatis magni quam assumenda nemo, eum, deleniti ratione excepturi, saepe dolorem cupiditate. Non dolore quia quo temporibus sint.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<script>
export default {
  directives: {
    card: {
      mounted(el) {
        const oCards = el.querySelectorAll('.card');

        oCards.forEach(oCard =>
          oCard.addEventListener("click", (event) => {
            let currentCard = event.currentTarget;
            let wrapper = el.querySelectorAll('.wrapper');

            setTimeout(() => currentCard.classList.toggle('active'));

            if (currentCard.classList.contains('active')) {
              currentCard.scrollTo(0, 0);
              setTimeout(() => {
                currentCard.style.position = null;
                currentCard.style.top = null;
                currentCard.style.zIndex = null;
              }, 700);

            } else {
              currentCard.style.position = 'fixed';
              const topFixed = currentCard.getBoundingClientRect().top - wrapper.scrollTop;
              currentCard.style.top = topFixed + 'px';
              currentCard.style.zIndex = 1;
            }
          })
        )
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 400px;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  padding: 20px;
}

.wrapper {
  width: 100%;
  height: 240px;
  margin-bottom: 20px;
}

.card {
  width: 400px;
  height: 240px;
  background: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: absolute;
  margin: 0 auto;
  transition: all 0.6s;
}

.card img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.6s;
}

.card .title {
  margin: 10px 20px;
  font-size: 20px;
  font-weight: bold;
}

.card .content-wrap {
  height: 0;
  overflow: hidden;
  background: var(--color-white);
  transition: all 0.6s;
}

.card .content-wrap .content {
  margin: 0 20px;
  overflow: auto;
}

.card.active {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  box-shadow: none;
  position: fixed;
  top: 0;
  z-index: 1;
  overflow-y: scroll;
  transition: all 0.6s;
}

.card.active img {
  height: 30%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: all 0.6s;
}

.card.active .content-wrap {
  height: 100vh;
  transition: all 0.6s;
}
</style>