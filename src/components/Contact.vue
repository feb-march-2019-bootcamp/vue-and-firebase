<template>
  <form name="contact" @submit.prevent="submit()" action="/" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact">

    <div class="form-group">
      Name:
      <input type="text" name="name" v-model="name" id="name" class="form-control">
    </div>
    <div class="form-group">
      Message:
      <textarea name="message" v-model="message" id cols="30" rows="10" class="form-control"></textarea>
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-success btn-block">Submit</button>
    </div>
  </form>
</template>
<script>
import Axios from "axios";

export default {
  data: () => ({
    name: "",
    message: ""
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    submit() {
      Axios.post(
        "/",
        // this.encode(
          {
          "form-name": "contact",
          name: this.name,
          message: this.message
        }
        // ),
        // {
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" }
        // }
      )
        .then(() => {
          alert("success");
        })
        .catch(e => {
          console.log(e);
          alert("fail");
        });
    }
  }
};
</script>
