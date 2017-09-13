<template>
<div>
	<h1>{{msg}}</h1>
	<input type="button" value="确定" @click='getData'>
	<Hello title='hello world'/>	
</div>
</template>

<script>
// import { mapMutations } from 'vuex'
import Hello from './../components/component.vue'
export default {
	name: 'home',
	components:{Hello},
	data(){
		return {
			msg:'hello world'
		}
	},
	methods: {
		getData(){
			this.$store.commit('test','测试');
		},
	   
	},
	created(){
	}
}
</script>

<style>
	h1 {
		color:red
	}
</style>	