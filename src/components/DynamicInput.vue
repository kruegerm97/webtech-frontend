<template> <!-- hier gesnackt: https://dev.to/snehalkadwe/how-to-create-dynamic-input-using-vue-2hf7-->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="w-full mt-4 p-10">
      <button
          type="button"
          class="flex justify-start ml-2 rounded-md border px-3 py-2 bg-pink-600 text-white"
          @click="addMore()"
      >
        Add More
      </button>
      <div v-for="(course, index) in courses" :key="index">
        <div class="flex justify-start ml-2 mt-4">
          <input
              v-model="course.courseName"
              placeholder="enter the Playlist-ID"
              class="w-full py-2 border border-indigo-500 rounded"
          />
          <button
              type="button"
              class="ml-2 rounded-md border px-3 py-2 bg-red-600 text-white"
              @click="remove(index)"
              v-show="index != 0"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      courses: [
        {
          courseName: "",
        },
      ],
    };
  },
  methods: {
    addMore() {
      this.courses.push({
        courseName: "",
      });
    },
    remove(index) {
      this.courses.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>