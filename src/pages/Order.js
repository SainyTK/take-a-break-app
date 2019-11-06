import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';

const StyledWrapper = styled.div`
    padding: 10px;

    .mb {
        margin-bottom: 10px;
    }

    .item-input {
        display: flex;
        .qty, .btn-add {
            margin-right: 5px;
        }
    }

    .button {
        width: 100%;
    }
`;

const availableMenus = [
    {
        name: 'Chicken Fried',
        price: 29
    },
    {
        name: 'Smoothy',
        price: 30
    }
]


const OrderPage = props => {
    return (
        <StyledWrapper>
            <label className='mb'>
                <div>Name</div>
                <Input type='text' placeholder='Customer name' />
            </label>
            {
                availableMenus.map((menu, index) => (
                    <div key={index} className='mb'>
                        <div>{menu.name} ({menu.price} Baht / piece)</div>
                        <div className='item-input'>
                            <Input type='number' value={0} className='qty'/>
                            <Button className='btn-add' type='primary'>+</Button>
                            <Button className='btn-sub' type='danger'>-</Button>
                        </div>
                    </div>
                ))
            }
            <Button type='primary' size='large' className='button'>Create Order</Button>
        </StyledWrapper>
    )
}

export default OrderPage;