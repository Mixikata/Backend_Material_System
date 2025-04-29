package org.example.backend_material_system.apiUtils;

import lombok.extern.slf4j.Slf4j;
import org.example.backend_material_system.entity.Project;
import org.springframework.web.client.RestTemplate;

@Slf4j
public class InvokeUtil {
    public static String[] invoke(Project project) {
        // 这里调用Python脚本进行分析
        RestTemplate restTemplate = new RestTemplate();
        HealthStatus response = restTemplate.getForObject("http://localhost:5000/api/health", HealthStatus.class);
        if (response == null || response.getStatus().equals("error")) {
            log.error("Python脚本未启动或运行异常");
            throw new RuntimeException("Python脚本未启动或运行异常");
        }
        log.info("Python脚本已启动");
        AnalysisResult analysisResult = restTemplate.postForObject("http://localhost:5000/api/predict", project, AnalysisResult.class);
        if (analysisResult == null || !analysisResult.isSuccess()) {
            log.error("Python脚本分析失败");
            throw new RuntimeException("Python脚本分析失败");
        }
        log.info("Python脚本分析成功");
        String[] results = new String[2];
        // 处理分析结果
        StringBuilder result = new StringBuilder();
        for (Result res : analysisResult.getResults()) {
            result.append("材料: ").append(res.getMaterial()).append(", 概率: ").append(res.getProbability()).append(", 索引: ").append(res.getIndex()).append("\n");
        }
        results[0] = result.toString();
        results[1] = analysisResult.getResultImage();
        return results;
    }
}
