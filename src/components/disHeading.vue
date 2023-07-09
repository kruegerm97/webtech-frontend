<template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    props: {
      title: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  };
  </script>