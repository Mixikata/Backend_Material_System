package org.example.backend_material_system.apiUtils;

import lombok.Data;

@Data
public class Result {
    String material;
    double probability;
    int index;
}
