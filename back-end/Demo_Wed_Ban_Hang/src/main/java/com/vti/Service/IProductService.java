package com.vti.Service;

import com.vti.Entity.Product;
import com.vti.Filter.ProductFilter;
import com.vti.Form.CreatingProductForm;
import com.vti.Form.UpdatingProductForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<Product> getAllProduct(Pageable pageable,  ProductFilter form);

    void createProduct(CreatingProductForm form);

    void updateProduct(UpdatingProductForm form);

    void deleteProduct(int id);

    Product getProductByName(String name);

    Product getProductById(int id);

    boolean isProductExistsByName(String name);

    boolean isProductExistsById(Integer id);

}
