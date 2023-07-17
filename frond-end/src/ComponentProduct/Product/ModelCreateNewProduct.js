import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import InputForm from './InputForm';
import { useSelector } from 'react-redux';

function ModelCreateNewProduct({ onHandleCloseButton, onHandleCreateNewProduct }) {

    const handleClick = () => {
        onHandleCloseButton();
    }

    // khai bao ham useSelecter de lay state trong store
    let stateShowForm = useSelector((stateRedux) => stateRedux.showFormState.showForm);

    return (
        <div>
            <Modal isOpen={stateShowForm} >
                <ModalHeader>Create New Product</ModalHeader>
                <ModalBody>
                    <InputForm onHandleCreateNewProduct={onHandleCreateNewProduct} />
                </ModalBody>
                <ModalFooter> <Button color="danger" onClick={handleClick}>Close</Button></ModalFooter>
            </Modal>
        </div>
    );
}

export default ModelCreateNewProduct;