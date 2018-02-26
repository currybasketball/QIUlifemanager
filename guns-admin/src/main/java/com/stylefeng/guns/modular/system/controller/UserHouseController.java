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
import com.stylefeng.guns.common.persistence.model.UserHouse;
import com.stylefeng.guns.modular.system.service.IUserHouseService;

/**
 * houseMgr控制器
 *
 * @author fengshuonan
 * @Date 2018-02-24 22:32:00
 */
@Controller
@RequestMapping("/userHouse")
public class UserHouseController extends BaseController {

    private String PREFIX = "/system/userHouse/";

    @Autowired
    private IUserHouseService userHouseService;

    /**
     * 跳转到houseMgr首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "userHouse.html";
    }

    /**
     * 跳转到添加houseMgr
     */
    @RequestMapping("/userHouse_add")
    public String userHouseAdd() {
        return PREFIX + "userHouse_add.html";
    }

    /**
     * 跳转到修改houseMgr
     */
    @RequestMapping("/userHouse_update/{userHouseId}")
    public String userHouseUpdate(@PathVariable Integer userHouseId, Model model) {
        UserHouse userHouse = userHouseService.selectById(userHouseId);
        model.addAttribute("item",userHouse);
        LogObjectHolder.me().set(userHouse);
        return PREFIX + "userHouse_edit.html";
    }

    /**
     * 获取houseMgr列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return userHouseService.selectList(null);
    }

    /**
     * 新增houseMgr
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(UserHouse userHouse) {
        userHouseService.insert(userHouse);
        return super.SUCCESS_TIP;
    }

    /**
     * 删除houseMgr
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer userHouseId) {
        userHouseService.deleteById(userHouseId);
        return SUCCESS_TIP;
    }

    /**
     * 修改houseMgr
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(UserHouse userHouse) {
        userHouseService.updateById(userHouse);
        return super.SUCCESS_TIP;
    }

    /**
     * houseMgr详情
     */
    @RequestMapping(value = "/detail/{userHouseId}")
    @ResponseBody
    public Object detail(@PathVariable("userHouseId") Integer userHouseId) {
        return userHouseService.selectById(userHouseId);
    }
}
