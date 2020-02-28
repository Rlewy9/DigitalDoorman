<template>
<div id="content">
    <Infomation :idFlag="true" :addressFlag="true" :userTypeFlag="false" :type="1"></Infomation>
    <QRShow :type="type" :QRSrc='QRSrc'></QRShow>
</div>
</template>

<script>
import Infomation from '../components/Infomation'
import QRShow from '../components/QRShow'
export default {
    components:{
        Infomation,
        QRShow
    },
    data(){
        return{
            type: 'userInfo',   //个人信息
            QRSrc: require('../assets/img/passphrase/QRPassphrase.png')     //二维码mock
        }
    },
    methods:{
        
    },
    created(){
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
// #content{
//     width: 100%;
//     height: 100%;
// }
</style>