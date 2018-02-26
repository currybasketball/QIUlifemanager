/**
 * 设备管理管理初始化
 */
var UserEquipment = {
    id: "UserEquipmentTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
UserEquipment.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '设备名称', field: 'equipname', visible: true, align: 'center', valign: 'middle'},
            {title: '设备作用', field: 'equipfunc', visible: true, align: 'center', valign: 'middle'},
            {title: '设备负责人', field: 'equipcharge', visible: true, align: 'center', valign: 'middle'},
            {title: '保养次数', field: 'equiptime', visible: true, align: 'center', valign: 'middle'},
            {title: '上次保养时间', field: 'cleantime', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
UserEquipment.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        UserEquipment.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加设备管理
 */
UserEquipment.openAddUserEquipment = function () {
    var index = layer.open({
        type: 2,
        title: '添加设备管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/userEquipment/userEquipment_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看设备管理详情
 */
UserEquipment.openUserEquipmentDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '设备管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/userEquipment/userEquipment_update/' + UserEquipment.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除设备管理
 */
UserEquipment.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/userEquipment/delete", function (data) {
            Feng.success("删除成功!");
            UserEquipment.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("userEquipmentId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询设备管理列表
 */
UserEquipment.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    UserEquipment.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = UserEquipment.initColumn();
    var table = new BSTable(UserEquipment.id, "/userEquipment/list", defaultColunms);
    table.setPaginationType("client");
    UserEquipment.table = table.init();
});
