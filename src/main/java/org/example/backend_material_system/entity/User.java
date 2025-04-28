package org.example.backend_material_system.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

@Data
public class User {
    String password;
    @TableId
    String username;
}
