package org.example.backend_material_system.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;

@Data
public class Project implements Serializable {
    @TableId
    private Long projectId;              // 项目ID（主键）
    private String projectName;          // 项目名称（主键）
    private String color;                // 颜色
    private Double density;              // 密度
    private Double melting;              // 熔点
    private Double boilingPoint;         // 沸点
    private Double heatCap;              // 比热容
    private Double resistivity;          // 电阻率
    private Double hard;                 // 硬度
    private Double expansion;            // 热膨胀系数
    private Double yieldStrength;        // 屈服强度
    private Double tensileStrength;      // 抗拉强度
    private Double elongation;           // 延展率
    private Double impactToughness;      // 冲击韧性
    private Double rigidity;             // 刚性
    private Double fatigueStrength;      // 疲劳强度
    private Double caloricValue;         // 热值
    private Double young;                // 杨氏模量
    private String createTime;           // 创建时间
    private String analysisResult;       // 分析结果
}
