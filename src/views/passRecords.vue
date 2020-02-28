<template>
  <div id="content">
    <Record :passRecordType=0 :recordType=1 :info="info"></Record>
    <Record :passRecordType=1 :bgcType=1 :recordType=1 :info="info"></Record>
    <Record :passRecordType=2 :bgcType=1 :recordType=1 :info="info"></Record>
  </div>
</template>

<script>
import Record from "../components/Record";
export default {
  components: {
    Record
  },
  data() {
    return {
      info:{
          name: '刘正宵',
          tel: '18516974698',
          name1: '谭明月',
          tel1: '15212312321',
          address: '奥术大师大',
          validity: '2020年2月2日'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#content{
    padding: 0;
}
</style>