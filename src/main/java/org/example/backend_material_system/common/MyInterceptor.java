package org.example.backend_material_system.common;

import com.alibaba.fastjson.JSONObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;

public class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String userName = (String) request.getSession().getAttribute("user");
        if (userName == null) {
            response.getWriter().write(JSONObject.toJSONString(Result.error("NOTLOGIN")));
            return false; // 中断后续处理
        }
        return true; // 将请求放行
    }
}