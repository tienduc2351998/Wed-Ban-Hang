package com.vti.Service;

import com.vti.Entity.Category;
import com.vti.Form.CreatingCategoryForm;
import com.vti.Form.UpdatingCategoryForm;
import java.util.List;

public interface ICategoryService {
    List<Category> getAllCategory();

    void createCategory(CreatingCategoryForm form);

    void updateCategory(UpdatingCategoryForm form);

    void deleteCategory(int id);

    Category getCategoryById(int id);

    boolean isCategoryExistsByName(String name);
}
