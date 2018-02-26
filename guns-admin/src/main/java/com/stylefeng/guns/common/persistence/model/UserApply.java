package com.stylefeng.guns.common.persistence.model;

import java.io.Serializable;

import com.baomidou.mybatisplus.enums.IdType;
import java.math.BigDecimal;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author stylefeng123
 * @since 2018-02-25
 */
@TableName("user_apply")
public class UserApply extends Model<UserApply> {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 账户申请人
     */
    private String account;
    /**
     * 申请原因
     */
    private String applyres;
    /**
     * 申请时间
     */
    private Date applytime;
    /**
     * 过期时间
     */
    private Date overtime;
    /**
     * 0待审核1审核通过2补办
     */
    private BigDecimal applystate;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getApplyres() {
        return applyres;
    }

    public void setApplyres(String applyres) {
        this.applyres = applyres;
    }

    public Date getApplytime() {
        return applytime;
    }

    public void setApplytime(Date applytime) {
        this.applytime = applytime;
    }

    public Date getOvertime() {
        return overtime;
    }

    public void setOvertime(Date overtime) {
        this.overtime = overtime;
    }

    public BigDecimal getApplystate() {
        return applystate;
    }

    public void setApplystate(BigDecimal applystate) {
        this.applystate = applystate;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "UserApply{" +
        "id=" + id +
        ", account=" + account +
        ", applyres=" + applyres +
        ", applytime=" + applytime +
        ", overtime=" + overtime +
        ", applystate=" + applystate +
        "}";
    }
}
