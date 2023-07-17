package com.vti.Service;

import com.vti.Entity.Manufacture;
import com.vti.Form.CreatingManufactureForm;
import com.vti.Form.UpdatingManufactureForm;
import java.util.List;

public interface IManufactureService {
    List<Manufacture> getAllManufacture();

    void createManufacture(CreatingManufactureForm form);

    void updateManufacture(UpdatingManufactureForm form);

    void deleteManufacture(int id);

    Manufacture getManufactureById(int id);

    boolean isManufactureExistsByName(String name);
}
