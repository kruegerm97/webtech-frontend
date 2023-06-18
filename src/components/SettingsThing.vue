<template>
  <div class="login">
    <input v-model="CIDField" type="input" placeholder="enter your Client-ID" class="w-full py-2 border border-indigo-500 rounded"/>
    <input v-model="CSField" type="input" placeholder="enter your Client-Secret" class="w-full py-2 border border-indigo-500 rounded" @keyup.enter="save()"/>
    <button @click="save()">Save</button>
  </div>
  <div>
    <table>
      <thead>
      <tr>
        <th>Client ID</th>
        <th>|</th>
        <th>Client Secret</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="items.length === 0">
        <td colspan="3">No Users yet</td>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.CIDField}}</td>
        <td>{{item.CSField}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SettingsThing',
  data () {
    return {
      items: [],
      CIDField:'',
      CSField:'',
    }
  },
  methods: {
    loadThings () {
      const baseUrl = 'http://localhost:8080'
      const endpoint = baseUrl + '/entries'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(result => result.forEach(thing => {
            this.items.push(thing)
          }))
          .catch(error => console.log('error', error))
    },
    save () {
      const baseUrl = 'http://localhost:8080'
      const endpoint = baseUrl + '/entries'
      const data = {
        ClientId: this.CIDField,
        ClientSecret: this.CSField,
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data)
          })
          .catch(error => console.log('error', error))
    },
    async setup () {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser()
      }
    }
  },
  async created () {
    await this.setup()
    this.loadThings()
  },
  mounted () {
  },
  updated() {
    console.log("UPDATED!")
  }
}
</script>

<style scoped>
table {
  margin-left: auto;
  margin-right: auto;
}
button {
  color: blue;
}
</style>