<template>
	<div>
		<h3>{{title}}</h3>
	</div>
</template>

<script>
	export default {
	  name: 'card',
	  props: {
	    title: {
	      type: String,
	      required: true,
	      default:'hello'
	    }
	  },
	  data () {
	    return {}
	  }
	}
</script>