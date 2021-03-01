<template>
  <div>
    <form v-if="!formSubmitted" @submit.prevent="submit">
      <h1>Registration</h1>
      <hr>
      <div class="form-row">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address<sup>*</sup></label>
          <input v-model="form.email.value" type="email" class="form-control" :class="{'_error': !form.email.state}" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small v-if="!form.email.state" class="form-text _error">Please, fill the field</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password<sup>*</sup></label>
          <input v-model="form.password.value" type="password" class="form-control" :class="{'_error': !form.password.state}" id="exampleInputPassword1" placeholder="Password">
          <small v-if="!form.password.state" class="form-text _error">Please, fill the field</small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="exampleGrowth">Growth<sup>*</sup></label>
          <input v-model="form.growth.value" type="number" class="form-control" :class="{'_error': !form.growth.state}" id="exampleGrowth">
          <small v-if="!form.growth.state" class="form-text _error">Please, fill the field</small>
        </div>
        <div class="form-group">
          <label for="dateOfBirth">Date of Birth<sup>*</sup></label>
          <input v-model="form.dateOfBirth.value" type="date" class="form-control" :class="{'_error': !form.dateOfBirth.state}" id="dateOfBirth">
          <small v-if="!form.dateOfBirth.state" class="form-text _error">Please, fill the field</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="exampleFormControlFile1">Avatar<sup>*</sup></label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="onChangePhoto">
          <small v-if="!form.photo.state" class="form-text _error">Please, choose photo</small>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <h1 v-else>You were successfully registered!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formSubmitted: false,
      form: {
        email: {
          state: true,
          value: ``
        },
        password: {
          state: true,
          value: ``
        },
        growth: {
          state: true,
          value: ``
        },
        dateOfBirth: {
          state: true,
          value: ``
        },
        photo: {
          state: true,
          value: ``
        },
      }
    }
  },
  methods: {
    submit() {
      for (let key in this.form) {
        let formState = true;
        this.form[key].state = !!this.form[key].value;

        if (!this.form[key].value) formState = false;

        this.formSubmitted = formState;
      }
    },
    onChangePhoto(evt) {
      this.form.photo.value = evt.returnValue;
    }
  }
}
</script>

<style>
.form-group {
  flex-grow: 1;
  margin-left:0.5em;
  margin-right:0.5em;

  text-align: left;
}

._error {
  border-color: red;
}

.form-text._error {
  color: red;
}
</style>
