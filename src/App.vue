<template>
  <div id="app">
    <img src="./assets/logo.png">
    <fileupload></fileupload>
  </div>
</template>

<script>
import Fileupload from './components/fileupload'

          export default {
            name: 'app',
            components: {
              Fileupload
            }
          }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
