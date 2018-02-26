/**
 * 初始化houseMgr详情对话框
 */
var UserHouseInfoDlg = {
    userHouseInfoData : {}
};

/**
 * 清除数据
 */
UserHouseInfoDlg.clearData = function() {
    this.userHouseInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserHouseInfoDlg.set = function(key, val) {
    this.userHouseInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserHouseInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
UserHouseInfoDlg.close = function() {
    parent.layer.close(window.parent.UserHouse.layerIndex);
}

/**
 * 收集数据
 */
UserHouseInfoDlg.collectData = function() {
    this
    .set('id')
    .set('account')
    .set('building')
    .set('room')
    .set('rent');
}

/**
 * 提交添加
 */
UserHouseInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userHouse/add", function(data){
        Feng.success("添加成功!");
        window.parent.UserHouse.table.refresh();
        UserHouseInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userHouseInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
UserHouseInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userHouse/update", function(data){
        Feng.success("修改成功!");
        window.parent.UserHouse.table.refresh();
        UserHouseInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userHouseInfoData);
    ajax.start();
}

$(function() {

});
