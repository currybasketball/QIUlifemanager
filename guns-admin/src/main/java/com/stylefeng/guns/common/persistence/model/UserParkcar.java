package com.stylefeng.guns.common.persistence.model;

import java.io.Serializable;

import com.baomidou.mybatisplus.enums.IdType;
import java.math.BigDecimal;
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
@TableName("user_parkcar")
public class UserParkcar extends Model<UserParkcar> {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 用户
     */
    private String account;
    /**
     * 车位价格
     */
    private BigDecimal parkprice;
    /**
     * 0未卖1已卖2出售中3出租中
     */
    private BigDecimal sellway;
    /**
     * 车位位置
     */
    private String packlocal;
    /**
     * 出租价格
     */
    private BigDecimal rentprice;


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

    public BigDecimal getParkprice() {
        return parkprice;
    }

    public void setParkprice(BigDecimal parkprice) {
        this.parkprice = parkprice;
    }

    public BigDecimal getSellway() {
        return sellway;
    }

    public void setSellway(BigDecimal sellway) {
        this.sellway = sellway;
    }

    public String getPacklocal() {
        return packlocal;
    }

    public void setPacklocal(String packlocal) {
        this.packlocal = packlocal;
    }

    public BigDecimal getRentprice() {
        return rentprice;
    }

    public void setRentprice(BigDecimal rentprice) {
        this.rentprice = rentprice;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "UserParkcar{" +
        "id=" + id +
        ", account=" + account +
        ", parkprice=" + parkprice +
        ", sellway=" + sellway +
        ", packlocal=" + packlocal +
        ", rentprice=" + rentprice +
        "}";
    }
}
