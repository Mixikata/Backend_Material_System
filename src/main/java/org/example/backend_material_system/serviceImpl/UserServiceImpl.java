package org.example.backend_material_system.serviceImpl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.example.backend_material_system.mapper.UserMapper;
import org.example.backend_material_system.service.UserService;
import org.example.backend_material_system.entity.User;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
}
