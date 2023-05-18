<template>
  <div class="d-flex justify-content-center">
    <div class="text-center">
      <h1 class="shadow-lg p-3 mb-5 bg-body-tertiary rounded text-primary">
        Create new quote
      </h1>
      <form class="row g-5" type="form" @submit.prevent="submitHandler">
        <div>
          <label for="validationCustom01" class="form-label fs-2">Quote</label>
          <textarea
            :class="{
              'is-invalid':
                (isSubmitted && v$.skill.Quote.required.$invalid) ||
                v$.skill.Quote.minLength.$invalid,
            }"
            id="validationCustom01"
            type="text"
            v-model="skill.Quote"
            maxlength="200"
            class="form-select"
            placeholder="Text"
          ></textarea>
          <span class="message-counter"> {{ skill.Quote.length }} /200</span>
          <div
            class="invalid-feedback fs-5"
            v-if="v$.skill.Quote.required.$invalid"
          >
            Please fill in the field.
          </div>
          <div
            class="invalid-feedback fs-5"
            v-else-if="v$.skill.Quote.minLength"
          >
            Shurt
          </div>
        </div>
        <div class="mb-3">
          <label for="Author" class="form-label fs-3">Author</label>
          <input
            type="text"
            v-model="skill.Autor"
            class="form-control"
            id="author"
            placeholder="Text"
            :class="{
              'is-invalid':
                (isSubmitted && v$.skill.Autor.required.$invalid) ||
                v$.skill.Autor.alpha.$invalid,
            }"
          />
          <div
            class="invalid-feedback fs-5"
            v-if="v$.skill.Autor.required.$invalid"
          >
            Please fill in the field.
          </div>
          <div
            class="invalid-feedback fs-5"
            v-else-if="v$.skill.Autor.alpha.$invalid"
          >
            Number present
          </div>
        </div>
        <div class="mb-3">
          <label for="Genre" class="form-label fs-2">Genre</label>
          <input
            type="text"
            v-model="skill.Genre"
            class="form-control"
            id="genre"
            placeholder="Text"
            :class="{
              'is-invalid':
                (isSubmitted && v$.skill.Genre.required.$invalid) ||
                v$.skill.Genre.alpha.$invalid,
            }"
          />
          <div
            class="invalid-feedback fs-5"
            v-if="v$.skill.Genre.required.$invalid"
          >
            Please fill in the field.
          </div>
          <div
            class="invalid-feedback fs-5"
            v-else-if="v$.skill.Genre.alpha.$invalid"
          >
            Number present
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-success w-5">
            Create quote
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { minLength, required, helpers } from "@vuelidate/validators";

export default {
  name: "Create",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      skill: {
        Quote: "",
        Autor: "",
        Genre: "",
        Date: "",
      },
      isSubmitted: false,
    };
  },
  validations() {
    return {
      skill: {
        Quote: { required, minLength: minLength(6) },
        Autor: { required, alpha: helpers.regex(/^[а-яёА-ЯЁA-z ]*$/) },
        Genre: { required, alpha: helpers.regex(/^[а-яёА-ЯЁA-z ]*$/) },
      },
    };
  },
  methods: {
    submitHandler() {
      this.isSubmitted = true;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      const skill = {
        Autor: this.skill.Autor,
        Quote: this.skill.Quote,
        Genre: this.skill.Genre,
        id: Date.now(),
        Date: new Date(),
      };
      this.$store.dispatch("createSkill", skill);
      this.$router.push("/quotes");
    },
  },
};
</script>
