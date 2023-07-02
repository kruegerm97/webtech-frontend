<template>
  <div class="login">
    <input v-model="CIDField" type="input" placeholder="enter your Client-ID"/>
    <input v-model="CSField" type="input" placeholder="enter your Client-Secret" @keyup.enter="save()"/>
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
        <td>{{item.clientId}}</td>
        <td>{{item.clientSecret}}</td>
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
      CSField:''
    }
  },
  methods: {
    loadThings () {
      const baseUrl = 'http://localhost:8080'
      const endpoint = baseUrl + '/user'
      const requestOptions = {
        method: 'GET',
        mode: 'cors'
      }
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(result => result.forEach(thing => {
            this.items.push(thing)
          }))
          .catch(error => console.log('cS1 error', error))
    },
    save () {
      const baseUrl = 'http://localhost:8080'
      const endpoint = baseUrl + '/user'
      const data = {
        clientId: this.CIDField,
        clientSecret: this.CSField
      }
      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data)
          })
          .catch(error => console.log('cS2 error', error))
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