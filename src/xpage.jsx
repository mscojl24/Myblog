import React from 'react';
import {faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Xpage () {

return(


        <div>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <span>이 페이지는 공사중 입니다.</span>
        </div>

    );
}

export default Xpage;