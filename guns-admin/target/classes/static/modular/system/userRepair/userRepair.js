/**
 * 报修服务管理初始化
 */
var UserRepair = {
    id: "UserRepairTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
UserRepair.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '报修订单', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '用户账号', field: 'account', visible: true, align: 'center', valign: 'middle'},
            {title: '报修内容', field: 'rcontent', visible: true, align: 'center', valign: 'middle'},
            {title: '报修状态', field: 'rstate', visible: true, align: 'center', valign: 'middle',formatter:setState},
            {title: '报修时间', field: 'createtime', visible: true, align: 'center', valign: 'middle'},
            {title: '处理时间', field: 'overtime', visible: true, align: 'center', valign: 'middle'}
    ];
};

function setState(val){
    console.log(val);
    if(val==1){
        return "未处理";
    }else if(val==2){
        return "处理中";
    }else if(val==3){
        return "处理失败";
    }else{
        return "处理成功";
    }
}

/**
 * 检查是否选中
 */
UserRepair.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        UserRepair.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加报修服务
 */
UserRepair.openAddUserRepair = function () {
    var index = layer.open({
        type: 2,
        title: '添加报修服务',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/userRepair/userRepair_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看报修服务详情
 */
UserRepair.openUserRepairDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '报修服务详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/userRepair/userRepair_update/' + UserRepair.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 打开查看报修服务详情
 */
UserRepair.openUserRepairDetails = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '报修服务详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/userRepair/userRepair_update/' + UserRepair.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除报修服务
 */
UserRepair.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/userRepair/delete", function (data) {
            Feng.success("删除成功!");
            UserRepair.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("userRepairId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询报修服务列表
 */
UserRepair.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    UserRepair.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = UserRepair.initColumn();
    var table = new BSTable(UserRepair.id, "/userRepair/list", defaultColunms);
    table.setPaginationType("client");
    UserRepair.table = table.init();
});
