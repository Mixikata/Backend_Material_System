package org.example.backend_material_system.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import org.example.backend_material_system.apiUtils.InvokeUtil;
import org.example.backend_material_system.service.ProjectService;
import org.example.backend_material_system.vo.ProjectVo;
import org.example.backend_material_system.common.Result;
import org.example.backend_material_system.entity.Project;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
//项目管理相关类
public class ProjectController {
    @Autowired
    ProjectService projectService;

    //分析项目并添加结果到数据库
    @PostMapping("/analysis")
    public Result analysis(@RequestBody Project project) {
        String[] result = InvokeUtil.invoke(project);
        project.setAnalysisResult(result[0]);
        project.setResultImage(result[1]);
        projectService.save(project);
        return Result.success();
    }

    //历史项目查询
    @GetMapping("/list")
    public Result list() {
        return Result.success(projectService.list().stream()
                .map(project -> {
                    ProjectVo projectVo = new ProjectVo();
                    BeanUtils.copyProperties(project, projectVo);
                    return projectVo;
                }).toList());
    }


    //项目分析结果删除
    @DeleteMapping("/delete")
    public Result delete(@RequestParam List<Long> projectId) {
        for (Long id : projectId) {
            Project project = projectService.getOne(new LambdaQueryWrapper<Project>().eq(Project::getProjectId, id));
            if (project == null) {
                return Result.error("该项目不存在");
            }
            projectService.removeById(id);
        }
        return Result.success("删除成功");
    }

    //查看项目分析结果
    @GetMapping("/check")
    public Result check(@RequestParam Long projectId) {
        Project project = projectService.getOne(new LambdaQueryWrapper<Project>().eq(Project::getProjectId, projectId));
        if (project == null) {
            return Result.error("该项目不存在");
        }
        return Result.success(project);
    }
}
