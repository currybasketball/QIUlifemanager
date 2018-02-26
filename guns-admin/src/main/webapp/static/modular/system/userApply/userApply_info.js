/**
 * 初始化apply详情对话框
 */
var UserApplyInfoDlg = {
    userApplyInfoData : {}
};

/**
 * 清除数据
 */
UserApplyInfoDlg.clearData = function() {
    this.userApplyInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserApplyInfoDlg.set = function(key, val) {
    this.userApplyInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserApplyInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
UserApplyInfoDlg.close = function() {
    parent.layer.close(window.parent.UserApply.layerIndex);
}

/**
 * 收集数据
 */
UserApplyInfoDlg.collectData = function() {
    this
    .set('id')
    .set('account')
    .set('applyres')
    .set('applytime')
    .set('overtime')
    .set('applystate');
}

/**
 * 提交添加
 */
UserApplyInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userApply/add", function(data){
        Feng.success("添加成功!");
        window.parent.UserApply.table.refresh();
        UserApplyInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userApplyInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
UserApplyInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userApply/update", function(data){
        Feng.success("修改成功!");
        window.parent.UserApply.table.refresh();
        UserApplyInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userApplyInfoData);
    ajax.start();
}

$(function() {

});
