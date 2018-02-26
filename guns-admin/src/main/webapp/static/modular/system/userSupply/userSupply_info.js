/**
 * 初始化装修服务详情对话框
 */
var UserSupplyInfoDlg = {
    userSupplyInfoData : {}
};

/**
 * 清除数据
 */
UserSupplyInfoDlg.clearData = function() {
    this.userSupplyInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserSupplyInfoDlg.set = function(key, val) {
    this.userSupplyInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
UserSupplyInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
UserSupplyInfoDlg.close = function() {
    parent.layer.close(window.parent.UserSupply.layerIndex);
}

/**
 * 收集数据
 */
UserSupplyInfoDlg.collectData = function() {
    this
    .set('id')
    .set('supplyname')
    .set('supplytele')
    .set('supplyaddr')
    .set('createtime')
    .set('remark');
}

/**
 * 提交添加
 */
UserSupplyInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userSupply/add", function(data){
        Feng.success("添加成功!");
        window.parent.UserSupply.table.refresh();
        UserSupplyInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userSupplyInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
UserSupplyInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/userSupply/update", function(data){
        Feng.success("修改成功!");
        window.parent.UserSupply.table.refresh();
        UserSupplyInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.userSupplyInfoData);
    ajax.start();
}

$(function() {

});
