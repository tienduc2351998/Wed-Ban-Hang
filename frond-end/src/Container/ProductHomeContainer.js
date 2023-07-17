import React, { useEffect, useState } from 'react';
import ComponentHeader from '../../src/ComponentHome/ProductHome/ComponentHeader'
import ComponentBanner from '../../src/ComponentHome/ProductHome/ComponentBanner'
import ComponentProduct_List from '../../src/ComponentHome/ProductHome/ComponentProduct_List'
import ComponentFooter from '../../src/ComponentHome/ProductHome/ComponentFooter'
import { Container } from "reactstrap";
import ComponentText from '../ComponentHome/ProductHome/ComponentText';
import { useDispatch } from 'react-redux';
import { actionFetchListProductAPI } from '../Redux/Action/ActionProduct';
import ComponentFilter from '../ComponentHome/ProductHome/ComponentFilter';

function ProductHomeContainer(props) {

    //Todo khai bao ham dispatch de gui du lieu len store
    let dispatchRedux = useDispatch();

    //todo khai bao state page, totalPage
    const [page, setPage] = useState("");
    const [totalPage, setTotalPage] = useState("");

    // Todo khai bao useEffect de load du lieu listProduct
    useEffect(() => {

        dispatchRedux(actionFetchListProductAPI(page, 5))

    }, [page])

    const onPageClick = () => {
        setPage(page - 1)
    }

    return (
        <div>
            <ComponentHeader />
            <ComponentBanner />
            <ComponentFilter />
            <ComponentText />
            <Container>
                <ComponentProduct_List onPageClick={onPageClick} page={page} />
            </Container>
            <ComponentFooter />
        </div>
    );
}

export default ProductHomeContainer;