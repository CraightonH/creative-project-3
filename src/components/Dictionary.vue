<template>
    <div>
        <form class="container">
            <input v-model="search" placeholder="Search for a word" />
            <div @click="searchWord" class="button background-color-primary">Search</div>
        </form>
        <div v-if="waiting">
            <div>
                <h2>Type a word to search</h2>
            </div>
        </div>
        <div v-else>
            <p>content</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Dictionary",
  data() {
      return {
          search: '',
          waiting: true,
      }
  },
  methods: {
    searchWord() {
        // do api call
        const options = {
            host: this.$root.$data.api.options.host,
            port: this.$root.$data.api.options.port,
            path: '/api/v2/entries/en-us/' + this.search + '?fields=definitions,pronunciations,examples&strictMatch=true',
            method: this.$root.$data.api.options.method,
            headers: this.$root.$data.api.options.headers
        };
        http.get(options, (resp) => {
            let body = '';
            resp.on('data', (d) => {
                body += d;
            });
            resp.on('end', () => {
                let parsed = JSON.stringify(body);
                console.log(parsed);
                this.waiting = false;
            });
        });
    }
  }
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
