/**
 * 初始化设备管理详情对话框
 */
var UserEquipmentInfoDlg = {
    userEquipmentInfoData : {}
};

/**
 * 清除数据
 */
UserEquipmentInfoDlg.clearData = function() {
    this.userEquipmentInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserEquipmentInfoDlg.set = function(key, val) {
    this.userEquipmentInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserEquipmentInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
UserEquipmentInfoDlg.close = function() {
    parent.layer.close(window.parent.UserEquipment.layerIndex);
}

/**
 * 收集数据
 */
UserEquipmentInfoDlg.collectData = function() {
    this
    .set('id')
    .set('equipname')
    .set('equipfunc')
    .set('equipcharge')
    .set('equiptime')
    .set('cleantime');
}

/**
 * 提交添加
 */
UserEquipmentInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userEquipment/add", function(data){
        Feng.success("添加成功!");
        window.parent.UserEquipment.table.refresh();
        UserEquipmentInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userEquipmentInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
UserEquipmentInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userEquipment/update", function(data){
        Feng.success("修改成功!");
        window.parent.UserEquipment.table.refresh();
        UserEquipmentInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userEquipmentInfoData);
    ajax.start();
}

$(function() {

});
