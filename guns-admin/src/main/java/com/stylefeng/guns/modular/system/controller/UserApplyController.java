package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.common.persistence.model.UserApply;
import com.stylefeng.guns.modular.system.service.IUserApplyService;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * apply控制器
 *
 * @author fengshuonan
 * @Date 2018-02-25 13:48:28
 */
@Controller
@RequestMapping("/userApply")
public class UserApplyController extends BaseController {

    private String PREFIX = "/system/userApply/";

    @Autowired
    private IUserApplyService userApplyService;



    /**
     * 跳转到apply首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "userApply.html";
    }

    /**
     * 跳转到添加apply
     */
    @RequestMapping("/userApply_add")
    public String userApplyAdd() {
        return PREFIX + "userApply_add.html";
    }

    /**
     * 跳转到修改apply
     */
    @RequestMapping("/userApply_update/{userApplyId}")
    public String userApplyUpdate(@PathVariable Integer userApplyId, Model model) {
        UserApply userApply = userApplyService.selectById(userApplyId);
        model.addAttribute("item",userApply);
        LogObjectHolder.me().set(userApply);
        return PREFIX + "userApply_edit.html";
    }

    /**
     * 获取apply列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return userApplyService.selectList(null);
    }

    /**
     * 新增apply
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(UserApply userApply) {
        userApplyService.insert(userApply);
        return super.SUCCESS_TIP;
    }

    /**
     * 删除apply
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer userApplyId) {
        userApplyService.deleteById(userApplyId);
        return SUCCESS_TIP;
    }

    /**
     * 修改apply
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(UserApply userApply) {
        userApplyService.updateById(userApply);
        return super.SUCCESS_TIP;
    }

    /**
     * apply详情
     */
    @RequestMapping(value = "/detail/{userApplyId}")
    @ResponseBody
    public Object detail(@PathVariable("userApplyId") Integer userApplyId) {
        return userApplyService.selectById(userApplyId);
    }
}
