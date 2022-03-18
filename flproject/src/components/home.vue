<template></template>

<script>
var md5 = require('md5')

export default {
    data () {
        return {
            collection: 
            [
                public_key: '52b5af320809fcc76ffda5df5a0449ec',
                private_key: '6b1bb422ad3627df36adc13281a8b6016d42bb6' ,
            ]
        }
    }
    ,

    computed: {
    hashed () {
      let concat = this.unixtime + this.collection.public_key + this.collection.private_key
      return md5(concat)
    },
    unixtime () {
      let datenow = Date.now()
      var ts = Math.floor(datenow / 1000)
      return ts
    }
  },
}
</script>

<style>
</style>