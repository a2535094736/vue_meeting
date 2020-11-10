<template>
  <div class="container">
    <BreadCrumb></BreadCrumb>
    <div class="page">
      <div class="left_all">
        <div class="left_slider">
          <Slider :siderItem="siderItem"></Slider>
        </div>
      </div>
      <div class="mainer">
        <el-row class="title">会议模版选择</el-row>
        <el-table :data="changeArray" border style="width: 100%">
          <el-table-column prop="TemplateName" label="可用模板名称"></el-table-column>
          <el-table-column prop="BudgetPercent" label="备注"></el-table-column>
          <el-table-column prop="UpdateBy" label="编辑人"></el-table-column>
          <el-table-column prop="UpdateDateTime" label="最终修改时间"></el-table-column>
          <el-table-column>
            <template slot="header">操作</template>
            <template slot-scope="scope">
              <el-button type="primary" @click="goMeetingcollectmood(scope.row.$id)" size="small">编辑</el-button>
              <el-button type="danger" size="small">删除</el-button>
              <el-button type="primary" size="small">启用</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="submitArea">
          <div class="submitArea_row">
            <el-button type="primary" plain>添加自定义模板</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/breadCurmb";
import Slider from "../components/Slider";
export default {
  data() {
    return {
      siderItem: "名单收集模版",
      diy_json: {
        $id: "1",
        TemplateID: 1,
        TemplateCategory: "Event",
        TemplateName: "默认模板1",
        EnableFlag: "Y",
        UpdateBy: "Ryan",
        UpdateDateTime: "2020-10-23T00:00:00",
        Remark: "",
        RegisterTemplateItemList: [
          {
            $id: "2",
            TemplateItemID: 14,
            ItemSeqnNo: 1,
            ItemFieldName: "SalesRegion",
            ItemName: "所属销售区域",
            ItemComponentType: "text",
            ItemValues: "华东区",
            IsShown: "Y",
            Remark: "重要字段",
            RegisterTemplate: {
              $ref: "1",
            },
          },
          // {
          //     "$id":"3",
          //     "TemplateItemID":15,
          //     "ItemSeqnNo":2,
          //     "ItemFieldName":"IsStaffAccept2ndSeat",
          //     "ItemName":"STAFF火车票是否接受二等座",
          //     "ItemComponentType":"select",
          //     "ItemValues":"是,否",
          //     "IsShown":"Y",
          //     "Remark":"重要字段",
          //     "RegisterTemplate":{
          //         "$ref":"1"
          //     }
          // },
          {
            $id: "4",
            TemplateItemID: 16,
            ItemSeqnNo: 3,
            ItemFieldName: "IsStaffAttendDinnerParty",
            ItemName: "STAFF是否参加晚宴会",
            ItemComponentType: "select",
            ItemValues: "是,否",
            IsShown: "Y",
            Remark: "重要字段",
            RegisterTemplate: {
              $ref: "1",
            },
          },
          {
            $id: "5",
            TemplateItemID: 17,
            ItemSeqnNo: 4,
            ItemFieldName: "IsHCPAccompanied",
            ItemName: "HCP是否需要陪同",
            ItemComponentType: "select",
            ItemValues: "是,否",
            IsShown: "Y",
            Remark: "重要字段",
            RegisterTemplate: {
              $ref: "1",
            },
          },
          {
            $id: "6",
            TemplateItemID: 18,
            ItemSeqnNo: 5,
            ItemFieldName: "IsHCPAttendDinnerParty",
            ItemName: "HCP是否参加晚宴",
            ItemComponentType: "select",
            ItemValues: "是,否",
            IsShown: "Y",
            Remark: "重要字段",
            RegisterTemplate: {
              $ref: "1",
            },
          },
          {
            $id: "7",
            TemplateItemID: 18,
            ItemSeqnNo: 5,
            ItemFieldName: "IsHCPAttendDinnerParty2",
            ItemName: "到达日期",
            ItemComponentType: "date",
            ItemValues: "2020-11-02",
            IsShown: "Y",
            Remark: "重要字段",
            RegisterTemplate: {
              $ref: "1",
            },
          },
          {
            $id: "8",
            TemplateItemID: 18,
            ItemSeqnNo: 5,
            ItemFieldName: "IsHCPAttendDinnerParty3",
            ItemName: "方式",
            ItemComponentType: "multiselect",
            ItemValues: "飞机,火车,酒店",
            IsShown: "Y",
            Remark: "重要字段",
            RegisterTemplate: {
              $ref: "1",
            },
          },
        ],
      },
    };
  },
  methods: {
    goMeetingcollectmood(id) {
      this.$router.push({ path: "/meetingcollectmood", query: { id: id } });
    },
  },
  computed: {
    changeArray() {
      return [this.diy_json];
    },
  },
  components: {
    BreadCrumb,
    Slider,
  },
};
</script>

<style lang='less'>
.mainer {
  .formatarea {
    width: 630px;
    margin: 0px auto;
    font-size: 14px;
    color: #333333;
    line-height: 20px;
    .formate_title {
      i {
        font-size: 20px;
        position: relative;
        top: 2px;
        left: 5px;
      }
    }
    .formate_frame {
      width: 630px;
      height: 490px;
      padding: 15px;
      margin: 15px 0;
      box-sizing: border-box;
      background: #eeeeee;
      font-size: 34px;
      text-align: center;
      line-height: 490px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>