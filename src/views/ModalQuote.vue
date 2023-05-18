<template>
  <div>
    <button
      @click="edit(skill.id)"
      type="button"
      class="btn btn-warning"
      data-bs-toggle="modal"
      :data-bs-target="`#exampleModal${skill.id}`"
    >
      Edit quote
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="`exampleModal${skill.id}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content text-center">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form
              class="row g-4"
              type="form"
              :id="`popup${id}`"
              @submit.prevent="submitHandler"
            >
              <div class="mb-3">
                <label
                  for="validationCustom01"
                  class="form-label fs-4 text-primary"
                  >Quote</label
                >
                <textarea
                  type="text"
                  maxlength="200"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="Text"
                  v-model="newSkill.Quote"
                  :class="{
                    'is-invalid':
                      (isSubmit && v$.newSkill.Quote.required.$invalid) ||
                      v$.newSkill.Quote.minLength.$invalid,
                  }"
                >
                </textarea>
                <span class="message-counter">
                  {{ newSkill.Quote.length }} /200</span
                >
                <div
                  class="invalid-feedback fs-5"
                  v-if="v$.newSkill.Quote.required.$invalid"
                >
                  Please fill in the field.
                </div>
                <div
                  class="invalid-feedback fs-5"
                  v-else-if="v$.newSkill.Quote.minLength.$invalid"
                >
                  Shurt
                </div>
                <div class="mb-3">
                  <label class="form-label fs-4 text-primary"
                    >Autor</label
                  >
                  <input
                    :class="{
                      'is-invalid':
                        (isSubmit && v$.newSkill.Autor.required.$invalid) ||
                        v$.newSkill.Autor.alpha.$invalid,
                    }"
                    type="text"
                    v-model="newSkill.Autor"
                    class="form-control"
                    id="autor"
                    placeholder="Text"
                  />
                  <div
                    class="invalid-feedback fs-5"
                    v-if="v$.newSkill.Autor.required.$invalid"
                  >
                    Please fill in the field.
                  </div>
                  <div
                    class="invalid-feedback fs-5"
                    v-else-if="v$.newSkill.Autor.alpha.$invalid"
                  >
                    Number present
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label fs-4 text-primary">Genre</label>
                  <input
                    :class="{
                      'is-invalid':
                        (isSubmit && v$.newSkill.Genre.required.$invalid) ||
                        v$.newSkill.Genre.alpha.$invalid,
                    }"
                    type="text"
                    v-model="newSkill.Genre"
                    class="form-control"
                    id="autor"
                    placeholder="Text"
                  />
                  <div
                    class="invalid-feedback fs-5"
                    v-if="v$.newSkill.Genre.required.$invalid"
                  >
                    Please fill in the field.
                  </div>
                  <div
                    class="invalid-feedback fs-5"
                    v-else-if="v$.newSkill.Genre.alpha.$invalid"
                  >
                    Number present
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              ref="closeButton"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-success" :form="`popup${id}`">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { minLength, required, helpers } from "@vuelidate/validators";
export default {
  name: "ModalQuote",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      newSkill: {
        Quote: "",
        Autor: "",
        Genre: "",
        Date: new Date(),
      },
      isSubmit: false,
    };
  },
  validations() {
    return {
      newSkill: {
        Quote: { required, minLength: minLength(6) },
        Autor: { required, alpha: helpers.regex(/^[а-яёА-ЯЁA-z ]*$/) },
        Genre: { required, alpha: helpers.regex(/^[а-яёА-ЯЁA-z ]*$/) },
      },
    };
  },

  methods: {
    edit(id) {
      this.newSkill = { ...this.$store.getters.skillById(id) };
    },
    submitHandler() {
      this.isSubmit = true;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
       
      this.$store.dispatch("updateQuote", this.newSkill);
      this.newSkill.Date = new Date();
      this.$refs.closeButton.click();
    },
  },
  computed: {
    skill() {
      return this.$store.getters.skillById(this.id);
    },
  },
};
</script>
