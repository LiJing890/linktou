<template>
  <div id="app">
    <leftmenu></leftmenu>
    <pagination></pagination>
    </div>
</template>

<script>
import Pagination from './components/common/pagination'
import Leftmenu from './components/common/leftmenu'
          export default {
            name: 'app',
            components: {
              Pagination,Leftmenu
            }
          }
          
    
// import Hello from './components/hello'
//           export default {
//             name: 'app',
//             components: {
//               Hello
//             }
//           }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
