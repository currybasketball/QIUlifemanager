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
import com.stylefeng.guns.common.persistence.model.UserSupply;
import com.stylefeng.guns.modular.system.service.IUserSupplyService;

/**
 * 装修服务控制器
 *
 * @author fengshuonan
 * @Date 2018-02-25 00:18:11
 */
@Controller
@RequestMapping("/userSupply")
public class UserSupplyController extends BaseController {

    private String PREFIX = "/system/userSupply/";

    @Autowired
    private IUserSupplyService userSupplyService;

    /**
     * 跳转到装修服务首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "userSupply.html";
    }

    /**
     * 跳转到添加装修服务
     */
    @RequestMapping("/userSupply_add")
    public String userSupplyAdd() {
        return PREFIX + "userSupply_add.html";
    }

    /**
     * 跳转到修改装修服务
     */
    @RequestMapping("/userSupply_update/{userSupplyId}")
    public String userSupplyUpdate(@PathVariable Integer userSupplyId, Model model) {
        UserSupply userSupply = userSupplyService.selectById(userSupplyId);
        model.addAttribute("item",userSupply);
        LogObjectHolder.me().set(userSupply);
        return PREFIX + "userSupply_edit.html";
    }

    /**
     * 获取装修服务列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return userSupplyService.selectList(null);
    }

    /**
     * 新增装修服务
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(UserSupply userSupply) {
        userSupplyService.insert(userSupply);
        return super.SUCCESS_TIP;
    }

    /**
     * 删除装修服务
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer userSupplyId) {
        userSupplyService.deleteById(userSupplyId);
        return SUCCESS_TIP;
    }

    /**
     * 修改装修服务
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(UserSupply userSupply) {
        userSupplyService.updateById(userSupply);
        return super.SUCCESS_TIP;
    }

    /**
     * 装修服务详情
     */
    @RequestMapping(value = "/detail/{userSupplyId}")
    @ResponseBody
    public Object detail(@PathVariable("userSupplyId") Integer userSupplyId) {
        return userSupplyService.selectById(userSupplyId);
    }
}
