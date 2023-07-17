import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import InputFormUpdate from './InputFormUpdate';
import { useSelector } from 'react-redux';

function ModelUpdateNewProduct({ onHandleCloseEdit, onhandleUpdate }) {

    const handleClose = () => {
        onHandleCloseEdit();
    }

    // khai bao ham useSelecter de lay state trong store
    let showFormUpdate = useSelector((stateRedux) => stateRedux.showFormUpdateState.showFormUpdate);


    return (
        <div>
            <Modal isOpen={showFormUpdate} >
                <ModalHeader>Update New Product</ModalHeader>
                <ModalBody>
                    <InputFormUpdate onhandleUpdate={onhandleUpdate} />
                </ModalBody>
                <ModalFooter> <Button color="danger" onClick={handleClose}>Close</Button></ModalFooter>
            </Modal>
        </div>
    );
}

export default ModelUpdateNewProduct;