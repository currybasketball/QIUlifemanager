/**
 * 车位管理管理初始化
 */
var UserParkcar = {
    id: "UserParkcarTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
UserParkcar.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '用户', field: 'account', visible: true, align: 'center', valign: 'middle'},
            {title: '车位价格', field: 'parkprice', visible: true, align: 'center', valign: 'middle'},
            {title: '状态', field: 'sellway', visible: true, align: 'center', valign: 'middle',formatter:setparks},
            {title: '位置', field: 'packlocal', visible: true, align: 'center', valign: 'middle'},
            {title: '出租价格', field: 'rentprice', visible: true, align: 'center', valign: 'middle'}
    ];
};

function setparks(val) {
    if(val==0){
        return "未卖"
    }else if(val==1){
        return "已卖"
    }else if(val==2){
        return "出售中"
    }else if(val==3){
        return "出租中"
    }else{
        return "其他";
    }
}

/**
 * 检查是否选中
 */
UserParkcar.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        UserParkcar.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加车位管理
 */
UserParkcar.openAddUserParkcar = function () {
    var index = layer.open({
        type: 2,
        title: '添加车位管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/userParkcar/userParkcar_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看车位管理详情
 */
UserParkcar.openUserParkcarDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '车位管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/userParkcar/userParkcar_update/' + UserParkcar.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除车位管理
 */
UserParkcar.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/userParkcar/delete", function (data) {
            Feng.success("删除成功!");
            UserParkcar.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("userParkcarId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询车位管理列表
 */
UserParkcar.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    UserParkcar.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = UserParkcar.initColumn();
    var table = new BSTable(UserParkcar.id, "/userParkcar/list", defaultColunms);
    table.setPaginationType("client");
    UserParkcar.table = table.init();
});
