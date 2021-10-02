<template>
  <div>
    <label for="full-name">Nome Completo</label>
    <input type="text" name="fullName" v-model="fullName" />

    <label for="cpf">CPF</label>
    <input type="number" name="cpf" v-model="cpf" />

    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    fullName: {
      get() {
        return this.$store.state.fullName;
      },
      set(value) {
        this.$store.commit("setFullName", { fullName: value });
      },
    },
    cpf: {
      get() {
        return this.$store.state.cpf;
      },
      set(value) {
        this.$store.commit("setCpf", { cpf: value });
      },
    },
  },
};
</script>
