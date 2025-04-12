package org.example.backend_material_system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.backend_material_system.entity.User;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
