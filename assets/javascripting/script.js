
const { createApp } = Vue;

createApp({
  data() {
    return {

      message: 'Hello Vue!',
      url: "https://picsum.photos/200/300",
      titleColor: "blue"

    }
  },

  methods: {

    handler () {

        if (this.titleColor === "blue") {
            this.titleColor = "red"
            this.message = "ora sono rosso"
        } else if (this.titleColor === "red"){
            this.titleColor = "blue"
            this.message = "ora sono blu"
        }
    }

  }
}).mount('#app')