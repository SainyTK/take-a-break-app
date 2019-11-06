import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Icon } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import OrderPage from './Order';
import BottomMenuItem from '../components/Home/BottomMenuItem';

const StyledWrapper = styled.div`
    position: relative;
    height: calc(100vh - 30px);
    .bottom-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 48px;

        display: flex;
        padding: 0 10px;
        align-items: center;
        justify-content: space-around;

        box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.15);
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
];

const HomePage = props => {

    const [selected, setSelected] = useState('order');

    return (
        <StyledWrapper>
            <Switch>
                <Route path='/order'>
                    <OrderPage />
                </Route>
            </Switch>
            <div className='bottom-bar'>
                <BottomMenuItem
                    name='order'
                    icon='snippets'
                    text='Order'
                    selected={selected === 'order'}
                    onSelected={() => setSelected('order')}
                />
                <BottomMenuItem
                    name='process'
                    icon='inbox'
                    text='Process'
                    selected={selected === 'process'}
                    onSelected={() => setSelected('process')}
                />
                <BottomMenuItem
                    name='manage'
                    icon='setting'
                    text='Manage'
                    selected={selected === 'manage'}
                    onSelected={() => setSelected('manage')}
                />
            </div>
        </StyledWrapper>
    )
}

export default HomePage;