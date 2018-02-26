/**
 * 初始化报修服务详情对话框
 */
var UserRepairInfoDlg = {
    userRepairInfoData : {}
};

/**
 * 清除数据
 */
UserRepairInfoDlg.clearData = function() {
    this.userRepairInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserRepairInfoDlg.set = function(key, val) {
    this.userRepairInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserRepairInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
UserRepairInfoDlg.close = function() {
    parent.layer.close(window.parent.UserRepair.layerIndex);
}

/**
 * 收集数据
 */
UserRepairInfoDlg.collectData = function() {
    this
    .set('id')
    .set('account')
    .set('rcontent')
    .set('rstate')
    .set('createtime')
    .set('overtime');
}

/**
 * 提交添加
 */
UserRepairInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userRepair/add", function(data){
        Feng.success("添加成功!");
        window.parent.UserRepair.table.refresh();
        UserRepairInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userRepairInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
UserRepairInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userRepair/update", function(data){
        Feng.success("修改成功!");
        window.parent.UserRepair.table.refresh();
        UserRepairInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userRepairInfoData);
    ajax.start();
}

$(function() {

});
