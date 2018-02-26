/**
 * apply管理初始化
 */
var UserApply = {
    id: "UserApplyTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
UserApply.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '账户申请人', field: 'account', visible: true, align: 'center', valign: 'middle'},
            {title: '申请原因', field: 'applyres', visible: true, align: 'center', valign: 'middle'},
            {title: '申请时间', field: 'applytime', visible: true, align: 'center', valign: 'middle'},
            {title: '过期时间', field: 'overtime', visible: true, align: 'center', valign: 'middle'},
            {title: '审核状态', field: 'applystate', visible: true, align: 'center', valign: 'middle',formatter:setapply}
    ];
};

function setapply(val){
    if(val==0){
        return "待审核";
    }else if(val==1){
        return "通过";
    }else if(val==2){
        return "补办中"
    }else{
        return "其他";
    }
}
/**
 * 检查是否选中
 */
UserApply.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        UserApply.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加apply
 */
UserApply.openAddUserApply = function () {
    var index = layer.open({
        type: 2,
        title: '添加apply',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/userApply/userApply_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看apply详情
 */
UserApply.openUserApplyDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'apply详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/userApply/userApply_update/' + UserApply.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除apply
 */
UserApply.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/userApply/delete", function (data) {
            Feng.success("删除成功!");
            UserApply.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("userApplyId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询apply列表
 */
UserApply.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    UserApply.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = UserApply.initColumn();
    var table = new BSTable(UserApply.id, "/userApply/list", defaultColunms);
    table.setPaginationType("client");
    UserApply.table = table.init();
});
