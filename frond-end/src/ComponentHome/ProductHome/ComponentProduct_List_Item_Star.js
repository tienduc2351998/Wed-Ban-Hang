import React from 'react';
import ComponentProduct_List_Item_Star_Dark from './ComponentProduct_List_Item_Star_Dark';
import ComponentProduct_List_Item_Star_Light from './ComponentProduct_List_Item_Star_Light';

function ComponentProduct_List_Item_Star({ star }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < star) {
            stars.push(<ComponentProduct_List_Item_Star_Light key={i} />)
        } else {
            stars.push(<ComponentProduct_List_Item_Star_Dark key={i} />)
        }

    }
    return (
        <div>
            {stars}
        </div>
    );
}

export default ComponentProduct_List_Item_Star;