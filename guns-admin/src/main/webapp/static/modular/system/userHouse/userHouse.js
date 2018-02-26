/**
 * houseMgr管理初始化
 */
var UserHouse = {
    id: "UserHouseTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
UserHouse.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '账号', field: 'account', visible: true, align: 'center', valign: 'middle'},
            {title: '楼号', field: 'building', visible: true, align: 'center', valign: 'middle'},
            {title: '门牌号', field: 'room', visible: true, align: 'center', valign: 'middle'},
            {title: '关系', field: 'rent', visible: true, align: 'center', valign: 'middle',formatter:sethouse}
    ];
};

function sethouse(val) {
    if(val==1){
        return "户主";
    }else if(val==2){
        return "租户";
    }else{
        return "其他";
    }
}
/**
 * 检查是否选中
 */
UserHouse.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        UserHouse.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加houseMgr
 */
UserHouse.openAddUserHouse = function () {
    var index = layer.open({
        type: 2,
        title: '添加房屋信息',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/userHouse/userHouse_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看houseMgr详情
 */
UserHouse.openUserHouseDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '房屋管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/userHouse/userHouse_update/' + UserHouse.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除houseMgr
 */
UserHouse.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/userHouse/delete", function (data) {
            Feng.success("删除成功!");
            UserHouse.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("userHouseId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询houseMgr列表
 */
UserHouse.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    UserHouse.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = UserHouse.initColumn();
    var table = new BSTable(UserHouse.id, "/userHouse/list", defaultColunms);
    table.setPaginationType("client");
    UserHouse.table = table.init();
});
