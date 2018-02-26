package com.stylefeng.guns.modular.system.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.shiro.ShiroKit;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.common.persistence.model.UserRepair;
import com.stylefeng.guns.modular.system.service.IUserRepairService;

import java.util.Date;

/**
 * 报修服务控制器
 *
 * @author fengshuonan
 * @Date 2018-02-24 20:59:15
 */
@Controller
@RequestMapping("/userRepair")
public class UserRepairController extends BaseController {

    private String PREFIX = "/system/userRepair/";

    @Autowired
    private IUserRepairService userRepairService;

    /**
     * 跳转到报修服务首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "userRepair.html";
    }

    /**
     * 跳转到添加报修服务
     */
    @RequestMapping("/userRepair_add")
    public String userRepairAdd() {
        return PREFIX + "userRepair_add.html";
    }

    /**
     * 跳转到修改报修服务
     */
    @RequestMapping("/userRepair_update/{userRepairId}")
    public String userRepairUpdate(@PathVariable Integer userRepairId, Model model) {
        UserRepair userRepair = userRepairService.selectById(userRepairId);
        model.addAttribute("item",userRepair);
        LogObjectHolder.me().set(userRepair);
        return PREFIX + "userRepair_edit.html";
    }

    /**
     * 获取报修服务列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        if(StringUtils.isBlank(condition)){
            return userRepairService.selectList(null);
        }else{
            EntityWrapper ew=new EntityWrapper();
            ew.like("account",condition);
            return userRepairService.selectList(ew);
        }
    }

    /**
     * 新增报修服务
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(UserRepair userRepair) {
        if(userRepair!=null){
            userRepair.setCreatetime(new Date());
            String account= ShiroKit.getUser().account;
            userRepair.setAccount(account);
        }
        userRepairService.insert(userRepair);
        return super.SUCCESS_TIP;
    }

    /**
     * 删除报修服务
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer userRepairId) {
        userRepairService.deleteById(userRepairId);
        return SUCCESS_TIP;
    }

    /**
     * 修改报修服务
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(UserRepair userRepair) {
        userRepairService.updateById(userRepair);
        return super.SUCCESS_TIP;
    }



    /**
     * 报修服务详情
     */
    @RequestMapping(value = "/detail/{userRepairId}")
    @ResponseBody
    public Object detail(@PathVariable("userRepairId") Integer userRepairId) {
        return userRepairService.selectById(userRepairId);
    }
}
