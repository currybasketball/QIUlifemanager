/**
 * 初始化车位管理详情对话框
 */
var UserParkcarInfoDlg = {
    userParkcarInfoData : {}
};

/**
 * 清除数据
 */
UserParkcarInfoDlg.clearData = function() {
    this.userParkcarInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserParkcarInfoDlg.set = function(key, val) {
    this.userParkcarInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserParkcarInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
UserParkcarInfoDlg.close = function() {
    parent.layer.close(window.parent.UserParkcar.layerIndex);
}

/**
 * 收集数据
 */
UserParkcarInfoDlg.collectData = function() {
    this
    .set('id')
    .set('account')
    .set('parkprice')
    .set('sellway')
    .set('packlocal')
    .set('rentprice');
}

/**
 * 提交添加
 */
UserParkcarInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userParkcar/add", function(data){
        Feng.success("添加成功!");
        window.parent.UserParkcar.table.refresh();
        UserParkcarInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userParkcarInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
UserParkcarInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userParkcar/update", function(data){
        Feng.success("修改成功!");
        window.parent.UserParkcar.table.refresh();
        UserParkcarInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userParkcarInfoData);
    ajax.start();
}

$(function() {

});
