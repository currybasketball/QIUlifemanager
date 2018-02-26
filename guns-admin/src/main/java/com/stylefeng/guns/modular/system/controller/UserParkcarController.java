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
import com.stylefeng.guns.common.persistence.model.UserParkcar;
import com.stylefeng.guns.modular.system.service.IUserParkcarService;

/**
 * 车位管理控制器
 *
 * @author fengshuonan
 * @Date 2018-02-24 23:45:10
 */
@Controller
@RequestMapping("/userParkcar")
public class UserParkcarController extends BaseController {

    private String PREFIX = "/system/userParkcar/";

    @Autowired
    private IUserParkcarService userParkcarService;

    /**
     * 跳转到车位管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "userParkcar.html";
    }

    /**
     * 跳转到添加车位管理
     */
    @RequestMapping("/userParkcar_add")
    public String userParkcarAdd() {
        return PREFIX + "userParkcar_add.html";
    }

    /**
     * 跳转到修改车位管理
     */
    @RequestMapping("/userParkcar_update/{userParkcarId}")
    public String userParkcarUpdate(@PathVariable Integer userParkcarId, Model model) {
        UserParkcar userParkcar = userParkcarService.selectById(userParkcarId);
        model.addAttribute("item",userParkcar);
        LogObjectHolder.me().set(userParkcar);
        return PREFIX + "userParkcar_edit.html";
    }

    /**
     * 获取车位管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return userParkcarService.selectList(null);
    }

    /**
     * 新增车位管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(UserParkcar userParkcar) {
        userParkcarService.insert(userParkcar);
        return super.SUCCESS_TIP;
    }

    /**
     * 删除车位管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer userParkcarId) {
        userParkcarService.deleteById(userParkcarId);
        return SUCCESS_TIP;
    }

    /**
     * 修改车位管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(UserParkcar userParkcar) {
        userParkcarService.updateById(userParkcar);
        return super.SUCCESS_TIP;
    }

    /**
     * 车位管理详情
     */
    @RequestMapping(value = "/detail/{userParkcarId}")
    @ResponseBody
    public Object detail(@PathVariable("userParkcarId") Integer userParkcarId) {
        return userParkcarService.selectById(userParkcarId);
    }
}
