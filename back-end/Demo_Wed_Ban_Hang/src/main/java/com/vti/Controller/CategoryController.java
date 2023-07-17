package com.vti.Controller;

import com.vti.DTO.CategoryDTO;
import com.vti.Form.CreatingCategoryForm;
import com.vti.Form.UpdatingCategoryForm;
import com.vti.Service.ICategoryService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/categorys")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getAllCategory() {
        List<CategoryDTO> ls = modelMapper.map(categoryService.getAllCategory(), new TypeToken<List<CategoryDTO>>() {
        }.getType());
        return new ResponseEntity<>(ls, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createCategory(@RequestBody CreatingCategoryForm form) {
        categoryService.createCategory(form);
        return new ResponseEntity<>("Tao category thanh cong", HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable(name = "id") int id, @RequestBody UpdatingCategoryForm form) {
        form.setId(id);
        categoryService.updateCategory(form);
        return new ResponseEntity<>("update category thanh cong", HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable(name = "id")  int id) {
        categoryService.deleteCategory(id);
        return new ResponseEntity<>("delete category thanh cong", HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CategoryDTO> getCategoryById(@PathVariable(name = "id") int id){
        return new ResponseEntity<>(modelMapper.map(categoryService.getCategoryById(id), CategoryDTO.class), HttpStatus.OK);
    }

}
