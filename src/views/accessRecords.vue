<template>
  <div class="content">
    <SlidingChoice :option1="option1" :option2="option2" @type="chooseType"></SlidingChoice>
    <Record v-for="(item,index) in recordList" :key="index" :recordType=0 :infoList="item.infoList"></Record>
  </div>
</template>

<script>
import SlidingChoice from "../components/SlidingChoice";
import Record from "../components/Record";
export default {
  components: {
    SlidingChoice,
    Record
  },
  data() {
    return {
      option1: "入园",
      option2: "出园",
      recordList: []
    };
  },
  methods: {
    chooseType(type) {
      if (type === 0) {
        this.recordList = this.type0List;
      } else {
        this.recordList = this.type1List;
      }
    }
  },
  mounted() {
    let allRecord = [
      {
        type: 0,
        infoList: [
          {
            key: "姓名",
            value: "刘正宵0"
          },
          {
            key: "年龄",
            value: "25"
          },
          {
            key: "手机号",
            value: "18516974698"
          },
          {
            key: "啦啦啦",
            value: "yoyoyoyoyoyoyoyoyoyoyoyoy oyoyoyoyoyoyoyo"
          }
        ]
      },
      {
        type: 0,
        infoList: [
          {
            key: "姓名",
            value: "谭明月"
          },
          {
            key: "年龄",
            value: "27"
          },
          {
            key: "手机号",
            value: "12345678"
          },
          {
            key: "吃屎",
            value: "吃饱了吃饱了吃饱了吃饱了"
          },
          {
            key: "打嗝",
            value: "嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝嗝"
          }
        ]
      },
      {
        type: 1,
        infoList: [
          {
            key: "姓名",
            value: "刘正宵0"
          },
          {
            key: "姓名",
            value: "刘正宵1"
          },
          {
            key: "姓名",
            value: "刘正宵2"
          },
          {
            key: "姓名",
            value: "刘正宵3"
          },
          {
            key: "姓名",
            value: "刘正宵4"
          }
        ]
      }
    ];
    this.type0List = allRecord.filter(item => {
      // console.log(item.type==0)
      return item.type == 0;
    });
    this.type1List = allRecord.filter(item => {
      return item.type == 1;
    });
    this.chooseType(0);
  }
};
</script>


<style lang="scss" scoped>
</style>