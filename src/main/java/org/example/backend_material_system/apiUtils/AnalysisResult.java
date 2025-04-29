package org.example.backend_material_system.apiUtils;

import lombok.Data;

@Data
public class AnalysisResult {
    private boolean success;
    private Result[] results;
    private String result_image;
}
