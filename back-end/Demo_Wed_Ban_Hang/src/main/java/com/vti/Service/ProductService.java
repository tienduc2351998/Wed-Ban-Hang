package com.vti.Service;

import com.vti.Entity.Product;
import com.vti.Filter.ProductFilter;
import com.vti.Form.CreatingProductForm;
import com.vti.Form.UpdatingProductForm;
import com.vti.Repository.ICategoryRepository;
import com.vti.Repository.IManufactureRepository;
import com.vti.Repository.IProductRepository;
import com.vti.Specification.ProductSpecification;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepository;

    @Autowired
    private ICategoryRepository categoryRepository;

    @Autowired
    private IManufactureRepository manufactureRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Page<Product> getAllProduct(Pageable pageable, ProductFilter form) {
        Specification<Product> specification = ProductSpecification.buildWhere(form);
        return productRepository.findAll(specification, pageable);
    }

    @Override
    public void createProduct(CreatingProductForm form) {
        // bo qua gia tri category_id
        TypeMap<CreatingProductForm, Product> typeMap = modelMapper.getTypeMap(CreatingProductForm.class, Product.class);
        if (typeMap == null) {
            modelMapper.addMappings(new PropertyMap<CreatingProductForm, Product>() {
                @Override
                protected void configure() {
                    skip(destination.getId());
                }
            });
        }
        Product product = modelMapper.map(form, Product.class);
        product.setCategory(categoryRepository.findById(form.getCategoryId()));
        product.setManufacture(manufactureRepository.findById(form.getManufactureId()));
        productRepository.save(product);
    }

    @Override
    public void updateProduct(UpdatingProductForm form) {
        Product product = modelMapper.map(form, Product.class);
        product.setCreateDate(new Date());
        productRepository.save(product);
    }

    @Override
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    @Override
    public Product getProductByName(String name) {
        return productRepository.findByName(name);
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public boolean isProductExistsByName(String name) {
        return productRepository.existsByName(name);
    }

    @Override
    public boolean isProductExistsById(Integer id) {
        return productRepository.existsById(id);
    }
}
