import React from 'react';
import { Button } from "reactstrap";

function CreateButton({ onHandleClickButton }) {

    const handleClick = () => {
        onHandleClickButton();
    }

    return (
        <div>
            <Button color="primary" onClick={handleClick} style={{ marginRight: "80%" }}>Thêm sản phẩm</Button>
        </div>
    );
}

export default CreateButton;