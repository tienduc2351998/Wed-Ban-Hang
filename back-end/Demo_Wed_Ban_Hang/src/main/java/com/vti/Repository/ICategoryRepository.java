package com.vti.Repository;

import com.vti.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer>, JpaSpecificationExecutor<Category> {
    boolean existsByName(String name);

    Category findById(int id);
}
