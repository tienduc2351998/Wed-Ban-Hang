package com.vti.Filter;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductFilter {
    private String search;

    private String categoryName;
}
