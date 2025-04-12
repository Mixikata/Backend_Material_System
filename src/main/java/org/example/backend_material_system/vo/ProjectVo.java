package org.example.backend_material_system.vo;

import lombok.Data;

@Data
public class ProjectVo {
    private Long projectId;              // 项目ID（主键）
    private String projectName;          // 项目名称（主键）
    private String createTime;           // 创建时间
}
