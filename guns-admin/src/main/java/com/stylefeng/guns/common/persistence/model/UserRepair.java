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
 * @since 2018-02-24
 */
@TableName("user_repair")
public class UserRepair extends Model<UserRepair> {

    private static final long serialVersionUID = 1L;

    /**
     * 报修订单
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 用户账号
     */
    private String account;
    /**
     * 报修内容
     */
    private String rcontent;
    /**
     * 报修状态1-未处理2-处理中3-处理失败4-处理成功
     */
    private BigDecimal rstate;
    /**
     * 报修时间
     */
    private Date createtime;
    /**
     * 处理结束时间
     */
    private Date overtime;


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

    public String getRcontent() {
        return rcontent;
    }

    public void setRcontent(String rcontent) {
        this.rcontent = rcontent;
    }

    public BigDecimal getRstate() {
        return rstate;
    }

    public void setRstate(BigDecimal rstate) {
        this.rstate = rstate;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Date getOvertime() {
        return overtime;
    }

    public void setOvertime(Date overtime) {
        this.overtime = overtime;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "UserRepair{" +
        "id=" + id +
        ", account=" + account +
        ", rcontent=" + rcontent +
        ", rstate=" + rstate +
        ", createtime=" + createtime +
        ", overtime=" + overtime +
        "}";
    }
}
