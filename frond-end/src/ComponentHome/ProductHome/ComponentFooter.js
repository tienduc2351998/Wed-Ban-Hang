import React from 'react';
import footer from '../../../src/Asset/Image_Banner/footer_img.png'

function ComponentFooter(props) {
    let footerEnd = footer
    return (
        <div>
            <img src={footerEnd} alt='' style={{ margin: 50 }} />
        </div>
    );
}

export default ComponentFooter;