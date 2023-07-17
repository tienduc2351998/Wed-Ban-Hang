package com.vti.Repository;

import com.vti.Entity.Manufacture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface IManufactureRepository extends JpaRepository<Manufacture, Integer>, JpaSpecificationExecutor<Manufacture> {
    boolean existsByName(String name);

    Manufacture findById(int id);
}
