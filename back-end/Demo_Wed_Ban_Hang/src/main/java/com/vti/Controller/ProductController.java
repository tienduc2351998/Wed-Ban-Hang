package com.vti.Controller;

import com.vti.DTO.ManufactureDTO;
import com.vti.DTO.ProductDTO;
import com.vti.Entity.Product;
import com.vti.Filter.ProductFilter;
import com.vti.Form.CreatingProductForm;
import com.vti.Form.UpdatingProductForm;
import com.vti.Service.IProductService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private IProductService productService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<Page<ProductDTO>> getAllProduct(Pageable pageable, ProductFilter form){
        Page<Product> page = productService.getAllProduct(pageable, form);
        List<ProductDTO> productDTOS = modelMapper.map(page.getContent(), new TypeToken<List<ProductDTO>>() {
        }.getType());
        return new ResponseEntity<>(new PageImpl<>(productDTOS,pageable, page.getTotalElements()), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody CreatingProductForm form) {
        productService.createProduct(form);
        return new ResponseEntity<>("Tao product thanh cong", HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable(name = "id") int id, @RequestBody UpdatingProductForm form){
        form.setId(id);
        productService.updateProduct(form);
        return new ResponseEntity<>("update product thanh cong", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable(name = "id") int id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>("delete product thanh cong", HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable(name = "id")int id) {
        return new ResponseEntity<>(modelMapper.map(productService.getProductById(id), ProductDTO.class), HttpStatus.OK);
    }
}
