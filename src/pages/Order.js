import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Modal } from 'antd';
import useFormInput from '../hook/useFormInput';
import _ from 'lodash';

const StyledWrapper = styled.div`
    padding: 0 10px;

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


const OrderPage = () => {

    const customerName = useFormInput('');
    const [orderCounts, setOrderCounts] = useState(_.range(0, availableMenus.length).map(() => 0));
    const [modalVisible, setModalVisible] = useState(false);

    const setOrderCount = (index, value) => {
        orderCounts[index] = +value;
        setOrderCounts([...orderCounts]);
    }

    return (
        <StyledWrapper>
            <label className='mb'>
                <div>Name</div>
                <Input type='text' placeholder='Customer name' {...customerName} />
            </label>
            {
                availableMenus.map((menu, index) => (
                    <div key={index} className='mb'>
                        <div>{menu.name} ({menu.price} Baht / piece)</div>
                        <div className='item-input'>
                            <Input type='number' className='qty' value={orderCounts[index]} onChange={(e) => setOrderCount(index, e.target.value)} />
                            <Button className='btn-add' type='primary' onClick={() => setOrderCount(index, orderCounts[index] + 1)}>+</Button>
                            <Button className='btn-sub' type='danger' onClick={() => orderCounts[index] > 0 && setOrderCount(index, orderCounts[index] - 1)}>-</Button>
                        </div>
                    </div>
                ))
            }
            <Button type='primary' size='large' className='button' onClick={() => setModalVisible(true)}>
                Create Order
            </Button>
            <Modal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                onOk={() => setModalVisible(false)}
                toggle={() => setModalVisible(false)}
            >
                <h3>Order</h3>
                <div>Name : {customerName.value}</div>
                {
                    availableMenus.map((menu, index) => (
                        orderCounts[index] > 0 && (
                            <div key={index}>{menu.name} {orderCounts[index]} {menu.price * orderCounts[index]} Baht</div>
                        )
                    ))
                }
                <div>Total {availableMenus.reduce((prev, items, index) => prev + (items.price * orderCounts[index]), 0)} Baht</div>
            </Modal>
        </StyledWrapper>
    )
}

export default OrderPage;