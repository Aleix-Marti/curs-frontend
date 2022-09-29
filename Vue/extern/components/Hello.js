export default {
  props: {
    msg: {
      type: String,
    }
  },
  data () {
      return {
          countDown: 10
      }
  },
  methods: {
      countDownTimer () {
          if (this.countDown > 0) {
              setTimeout(() => {
                  this.countDown -= 1
                  this.countDownTimer()
              }, 1000)
          }
      }

  },
  created () {
      this.countDownTimer()
  },
  template: `
  <div class="counter">
    <p>{{ msg }} : {{ countDown }}</p>
  </div>
`,
}