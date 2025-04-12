package org.example.backend_material_system.serviceImpl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.example.backend_material_system.mapper.ProjectMapper;
import org.example.backend_material_system.service.ProjectService;
import org.example.backend_material_system.entity.Project;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl extends ServiceImpl<ProjectMapper, Project> implements ProjectService {
}
