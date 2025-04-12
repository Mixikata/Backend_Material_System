package org.example.backend_material_system.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import jakarta.servlet.http.HttpServletRequest;
import org.example.backend_material_system.service.UserService;
import org.example.backend_material_system.common.Result;
import org.example.backend_material_system.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    // 用户注册/登录
    @PostMapping("/login")
    public Result login(HttpServletRequest httpServletRequest,@RequestBody User user) {
        User us = userService.getOne(new LambdaQueryWrapper<User>().eq(User::getUsername, user.getUsername()));
        if (us == null) {
            userService.save(user);
            us = user;
        }
        if (!us.getPassword().equals(user.getPassword())) {
            return Result.error("密码错误");
        }
        httpServletRequest.getSession().setAttribute("user", us.getUsername());
        return Result.success("登录成功");
    }
}
