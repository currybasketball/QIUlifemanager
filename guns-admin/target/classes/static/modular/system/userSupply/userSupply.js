/**
 * 装修服务管理初始化
 */
var UserSupply = {
    id: "UserSupplyTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
UserSupply.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: 'id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '供应商名称', field: 'supplyname', visible: true, align: 'center', valign: 'middle'},
            {title: '供应商联系方式', field: 'supplytele', visible: true, align: 'center', valign: 'middle'},
            {title: '供应商地址', field: 'supplyaddr', visible: true, align: 'center', valign: 'middle'},
            {title: '添加时间', field: 'createtime', visible: true, align: 'center', valign: 'middle'},
            {title: '备注', field: 'remark', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
UserSupply.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        UserSupply.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加装修服务
 */
UserSupply.openAddUserSupply = function () {
    var index = layer.open({
        type: 2,
        title: '添加装修服务',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/userSupply/userSupply_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看装修服务详情
 */
UserSupply.openUserSupplyDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '装修服务详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/userSupply/userSupply_update/' + UserSupply.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除装修服务
 */
UserSupply.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/userSupply/delete", function (data) {
            Feng.success("删除成功!");
            UserSupply.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("userSupplyId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询装修服务列表
 */
UserSupply.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    UserSupply.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = UserSupply.initColumn();
    var table = new BSTable(UserSupply.id, "/userSupply/list", defaultColunms);
    table.setPaginationType("client");
    UserSupply.table = table.init();
});
