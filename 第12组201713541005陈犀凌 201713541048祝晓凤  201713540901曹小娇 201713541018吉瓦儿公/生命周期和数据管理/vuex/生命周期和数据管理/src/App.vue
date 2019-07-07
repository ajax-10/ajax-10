<template>
  <div id="app">
    <state /> <hr>
    <getter /> <hr>
    <Mutation /> <hr>
    <action /> <hr>
    <ModuleA /> <hr>
    <ModuleB />
  </div>
</template>

<script>
import State from '@/components/State.vue'
import Getter from '@/components/Getter.vue'
import Mutation from '@/components/Mutation.vue'
import Action from '@/components/Action.vue'
import ModuleA from '@/components/ModuleA.vue'
import ModuleB from '@/components/ModuleB.vue'
export default {
  name: 'App',
  components: {
    State,
    Getter,
    Mutation,
    Action,
    ModuleA,
    ModuleB
  }
}
</script>

<style>
</style>
