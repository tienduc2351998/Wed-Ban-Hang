import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ComponentProduct_List_Item_Star_Light(props) {
    return (
        <FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />
    );
}

export default ComponentProduct_List_Item_Star_Light;