import React from 'react';
import ProductHomeContainer from '../Container/ProductHomeContainer';
import ProductPageContainer from '../Container/ProductPageContainer';
import { Route, Routes } from "react-router-dom";
import ProductAboutContainer from '../Container/ProductAboutContainer';
import ProductContactContainer from '../Container/ProductContactContainer';
import ComponentRegister from '../Component_Login_Register/ComponentRegister';
import ComponentLogin from '../Component_Login_Register/ComponentLogin';
import ComponentNews from '../ComponentNews/ComponentNews';
import ComponentHome_Detail from '../ComponentHome/ProductHome/ComponentHome_Detail';
import ComponentCart from '../ComponentCart/ComponentCart';

function ProductPage(props) {
    return (
        <>
            <Routes>
                <Route path='/' element={<ProductHomeContainer />}></Route>
                <Route path='/:id' element={<ComponentHome_Detail />}></Route>
                <Route path='/about' element={<ProductAboutContainer />}></Route>
                <Route path='/contact' element={<ProductContactContainer />}></Route>
                <Route path='/product' element={<ProductPageContainer />}></Route>
                <Route path='/register' element={<ComponentRegister />}></Route>
                <Route path='/login' element={<ComponentLogin />}></Route>
                <Route path='/news' element={<ComponentNews />}></Route>
                <Route path='/cart' element={<ComponentCart />}></Route>
            </Routes>
        </>
    );
}

export default ProductPage;