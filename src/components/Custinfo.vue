<template>
  <div>
     <h1>Customer info</h1>
     <h3>Customer Name is {{$route.params.cname}}</h3>
     <button v-on:click="goBackToCustomer">Go To Customer Component</button>
  </div>
</template>

<script>
export default {
    name: 'Custinfo'
    ,
    methods: {
        goBackToCustomer() {
            this.$router.push('/CustComp')
        }
    },

}
</script>

<style>

</style>
