package com.vti.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
public class CategoryDTO {
    private int id;

    private String name;

    private List<ProductDTO> products;

    @Data
    @NoArgsConstructor
    public static class ProductDTO{

        private int id;

        private String name;
    }
}
