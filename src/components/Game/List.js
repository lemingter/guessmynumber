import React from 'react';

function List(props) {
    const {tries} = props;

    return (
        <ul>
            {
                tries.map((item) => (
                    <li>
                        {item}
                    </li>
                ))
            }
        </ul>
    );
}

export default List;