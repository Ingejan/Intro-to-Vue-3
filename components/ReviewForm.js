app.component('review-form', {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <p>Would you recommend this product?</p>
    <input id="yes" name="recommendation" type="radio" value="Yes, I recommend this product" v-model="recommendation">
    <label for="yes">yes</label>
    <input id="no" name="recommendation" type="radio" value="No, I don't recommend this product" v-model="recommendation">
    <label for="no">no</label>

    <input class="button" type="submit" value="Submit">
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommendation: '',
    }
  },
  methods: {
    onSubmit() {
      if(this.name === '' || this.review === '' || this.rating === null || this.recommendation === '') {
        alert("Je moet wel alles invullen!");
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommendation: this.recommendation,
      };
      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommendation = '';
    }
  }
});