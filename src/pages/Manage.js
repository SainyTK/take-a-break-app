import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Checkbox } from 'antd';
import useFormInput from '../hook/useFormInput';

const StyledWrapper = styled.div`
    padding: 0 10px;
    .mb {
        margin-bottom: 10px;
    }
`;

const initMenus = [
    {
        name: 'Chicken Fried',
        price: 29
    },
    {
        name: 'Smoothy',
        price: 30
    }
]

const ManagePage = props => {

    const [menus, setMenus] = useState(initMenus);
    const name = useFormInput('');
    const price = useFormInput('0');

    const addMenu = () => {
        if (name.value.length > 0 && price.value.length > 0) {
            setMenus([...menus, { name: name.value, price: +price.value }]);
        }
    }

    return (
        <StyledWrapper>
            <h3>Add Menu</h3>
            <label>
                <div>Name</div>
                <Input className='mb' type='text' placeholder='Menu Name' {...name} />
            </label>
            <label>
                <div>Price</div>
                <Input className='mb' type='number' placeholder='Menu Price' {...price} />
            </label>
            <Button className='mb' type='primary' onClick={addMenu}>Add</Button>
            <h3>Menu List</h3>
            <table>
                <tbody>
                    {
                        menus.map((menu, index) => (
                            <tr key={index}>
                                <td><Checkbox /></td>
                                <td>{menu.name}</td>
                                <td>{menu.price} Baht</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </StyledWrapper>
    )
}

export default ManagePage;