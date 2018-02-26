package com.stylefeng.guns.common.persistence.model;

import java.io.Serializable;

import com.baomidou.mybatisplus.enums.IdType;
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
@TableName("user_supply")
public class UserSupply extends Model<UserSupply> {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 供应商名称
     */
    private String supplyname;
    /**
     * 供应商联系方式
     */
    private String supplytele;
    /**
     * 供应商地址
     */
    private String supplyaddr;
    /**
     * 添加时间
     */
    private Date createtime;
    /**
     * 备注
     */
    private String remark;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSupplyname() {
        return supplyname;
    }

    public void setSupplyname(String supplyname) {
        this.supplyname = supplyname;
    }

    public String getSupplytele() {
        return supplytele;
    }

    public void setSupplytele(String supplytele) {
        this.supplytele = supplytele;
    }

    public String getSupplyaddr() {
        return supplyaddr;
    }

    public void setSupplyaddr(String supplyaddr) {
        this.supplyaddr = supplyaddr;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "UserSupply{" +
        "id=" + id +
        ", supplyname=" + supplyname +
        ", supplytele=" + supplytele +
        ", supplyaddr=" + supplyaddr +
        ", createtime=" + createtime +
        ", remark=" + remark +
        "}";
    }
}
