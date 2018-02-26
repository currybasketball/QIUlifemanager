package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.common.persistence.model.UserEquipment;
import com.stylefeng.guns.modular.system.service.IUserEquipmentService;

import java.util.Date;

/**
 * 设备管理控制器
 *
 * @author fengshuonan
 * @Date 2018-02-24 23:02:17
 */
@Controller
@RequestMapping("/userEquipment")
public class UserEquipmentController extends BaseController {

    private String PREFIX = "/system/userEquipment/";

    @Autowired
    private IUserEquipmentService userEquipmentService;

    /**
     * 跳转到设备管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "userEquipment.html";
    }

    /**
     * 跳转到添加设备管理
     */
    @RequestMapping("/userEquipment_add")
    public String userEquipmentAdd() {
        return PREFIX + "userEquipment_add.html";
    }

    /**
     * 跳转到修改设备管理
     */
    @RequestMapping("/userEquipment_update/{userEquipmentId}")
    public String userEquipmentUpdate(@PathVariable Integer userEquipmentId, Model model) {
        UserEquipment userEquipment = userEquipmentService.selectById(userEquipmentId);
        model.addAttribute("item",userEquipment);
        LogObjectHolder.me().set(userEquipment);
        return PREFIX + "userEquipment_edit.html";
    }

    /**
     * 获取设备管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return userEquipmentService.selectList(null);
    }

    /**
     * 新增设备管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(UserEquipment userEquipment) {
        userEquipmentService.insert(userEquipment);
        return super.SUCCESS_TIP;
    }

    /**
     * 删除设备管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer userEquipmentId) {
        userEquipmentService.deleteById(userEquipmentId);
        return SUCCESS_TIP;
    }

    /**
     * 修改设备管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(UserEquipment userEquipment) {
        userEquipmentService.updateById(userEquipment);
        return super.SUCCESS_TIP;
    }

    /**
     * 设备管理详情
     */
    @RequestMapping(value = "/detail/{userEquipmentId}")
    @ResponseBody
    public Object detail(@PathVariable("userEquipmentId") Integer userEquipmentId) {
        return userEquipmentService.selectById(userEquipmentId);
    }
}
