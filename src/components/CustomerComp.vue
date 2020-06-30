<template>
  <div>
      <h2>Customer Page</h2>
      <h3>
          <router-link to="/CustComp/NewCust">Add New Customer</router-link></h3>
      <div v-for="c in customers" :key=c>
         
          <router-link v-bind:to="'/Custinfo/' + c">
                <li>{{c}}</li>
          </router-link>
        
      </div>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'CustomerComp',
    data() {
        return {
            customers : ['A', 'B', 'C']
        }
    },
}
</script>

<style>

</style>
