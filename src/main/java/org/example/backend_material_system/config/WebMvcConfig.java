package org.example.backend_material_system.config;

import org.example.backend_material_system.common.JacksonObjectMapper;
import org.example.backend_material_system.common.MyInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new MyInterceptor())
                .addPathPatterns("/")          // 拦截路径
                .excludePathPatterns("/login");  // 排除路径
    }
    @Override
    public void extendMessageConverters(List<HttpMessageConverter<?>> converters){
        MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();
        messageConverter.setObjectMapper(new JacksonObjectMapper());
        converters.add(0,messageConverter);
    }
}
