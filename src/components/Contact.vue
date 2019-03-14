<template>
  <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />

      <div class="form-group">
        Name: <input type="text" name="name" id="name" class="form-control">
      </div>
      <div class="form-group">
        Message: <textarea name="message" id="" cols="30" rows="10" class="form-control"></textarea>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-success btn-block">Submit</button>
      </div>
    </form>
</template>
<script>
export default {
  
}
</script>
