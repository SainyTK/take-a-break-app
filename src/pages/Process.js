import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

const StyledWrapepr = styled.div`
    padding: 10px;
`;

const initOrders = [
    {
        customerName: 'Tanakorn Karode',
        createdAt: new Date(),
        status: 'pending',
        menus: [
            {
                name: 'Chicken Fried',
                amount: 1
            },
            {
                name: 'Smoothy',
                amount: 1
            }
        ]
    },
    {
        customerName: 'TK KR',
        createdAt: new Date(),
        status: 'finished',
        menus: [
            {
                name: 'Chicken Fried',
                amount: 2
            },
            {
                name: 'Smoothy',
                amount: 1
            }
        ]
    },
    {
        customerName: 'TK KR',
        createdAt: new Date(),
        status: 'finished',
        menus: [
            {
                name: 'Chicken Fried',
                amount: 2
            },
            {
                name: 'Smoothy',
                amount: 1
            }
        ]
    },
    {
        customerName: 'TK KR',
        createdAt: new Date(),
        status: 'finished',
        menus: [
            {
                name: 'Chicken Fried',
                amount: 2
            },
            {
                name: 'Smoothy',
                amount: 1
            }
        ]
    },
    {
        customerName: 'TK KR',
        createdAt: new Date(),
        status: 'finished',
        menus: [
            {
                name: 'Chicken Fried',
                amount: 2
            },
            {
                name: 'Smoothy',
                amount: 1
            }
        ]
    },
    {
        customerName: 'TK KR',
        createdAt: new Date(),
        status: 'finished',
        menus: [
            {
                name: 'Chicken Fried',
                amount: 2
            },
            {
                name: 'Smoothy',
                amount: 1
            }
        ]
    },
    {
        customerName: 'TK KR',
        createdAt: new Date(),
        status: 'finished',
        menus: [
            {
                name: 'Chicken Fried',
                amount: 2
            },
            {
                name: 'Smoothy',
                amount: 1
            }
        ]
    },
    {
        customerName: 'TK KR',
        createdAt: new Date(),
        status: 'finished',
        menus: [
            {
                name: 'Chicken Fried',
                amount: 2
            },
            {
                name: 'Smoothy',
                amount: 1
            }
        ]
    }
];

const Order = props => {
    const { customerName, menus } = props.order;
    return (
        <div>
            <div>{customerName}</div>
            {
                menus.map((menu, index) => (
                    <ul key={index}>
                        <li>{menu.name} {menu.amount}</li>
                    </ul>
                ))
            }

        </div>
    )
}

const ProcessPage = props => {

    const [activatedKey, setActivatedKey] = useState('pending');
    const [orders, setOrders] = useState(initOrders);

    const pendingOrders = [];
    const finishedOrders = [];
    orders.filter((order) => {
        if (order.status === 'pending') pendingOrders.push(order);
        else finishedOrders.push(order);
    });

    return (
        <StyledWrapepr>
            <Tabs defaultActiveKey="pending" activeKey={activatedKey} onChange={(activatedKey) => setActivatedKey(activatedKey)}>
                <TabPane tab="Pending Order" key="pending">
                    {
                        pendingOrders.map((order, index) => (
                            <div key={index}>
                                <Order order={order} />
                                <Button type='primary'>Finish</Button>
                                <Button type='danger'>Cancel</Button>
                            </div>
                        ))
                    }
                </TabPane>
                <TabPane tab="Finished Order" key="finished">
                    {
                        finishedOrders.map((order, index) => (
                            <Order key={index} order={order} />
                        ))
                    }
                </TabPane>
            </Tabs>
        </StyledWrapepr>
    )
}

export default ProcessPage;