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
 * @since 2018-02-24
 */
@TableName("user_equipment")
public class UserEquipment extends Model<UserEquipment> {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 设备名称
     */
    private String equipname;
    /**
     * 设备作用
     */
    private String equipfunc;
    /**
     * 设备负责人
     */
    private String equipcharge;
    /**
     * 保养次数
     */
    private Integer equiptime;
    /**
     * 上次保养时间
     */
    private Date cleantime;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEquipname() {
        return equipname;
    }

    public void setEquipname(String equipname) {
        this.equipname = equipname;
    }

    public String getEquipfunc() {
        return equipfunc;
    }

    public void setEquipfunc(String equipfunc) {
        this.equipfunc = equipfunc;
    }

    public String getEquipcharge() {
        return equipcharge;
    }

    public void setEquipcharge(String equipcharge) {
        this.equipcharge = equipcharge;
    }

    public Integer getEquiptime() {
        return equiptime;
    }

    public void setEquiptime(Integer equiptime) {
        this.equiptime = equiptime;
    }

    public Date getCleantime() {
        return cleantime;
    }

    public void setCleantime(Date cleantime) {
        this.cleantime = cleantime;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "UserEquipment{" +
        "id=" + id +
        ", equipname=" + equipname +
        ", equipfunc=" + equipfunc +
        ", equipcharge=" + equipcharge +
        ", equiptime=" + equiptime +
        ", cleantime=" + cleantime +
        "}";
    }
}
