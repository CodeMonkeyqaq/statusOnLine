<template>
    <!-- <model-obj :src='`${publicPath}model/buddhaPreaching.obj`'
     :mtl='`${publicPath}model/buddhaPreaching.mtl`'></model-obj> -->
     <model-gltf :src="publicAddress + 'model/' + gltfName + '.gltf'" :width="width" :height="height" :backgroundColor="bg" :rotation="rotation"></model-gltf>
</template>
<style scoped>

</style>
<script>
// import { ModelObj } from 'vue-3d-model'
import { ModelGltf } from 'vue-3d-model'
export default {
    name:"ShowModel",
    data(){
        return{
            publicAddress: process.env.BASE_URL,
        }
    },
    components: {
        // ModelObj
        ModelGltf
    },
    props:{
        gltfName: String,
        width: Number,
        height: Number,
        bg: String,
        rotation: Object
    }
}
</script>