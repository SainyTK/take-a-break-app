import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import OrderPage from './Order';
import BottomMenuItem from '../components/Home/BottomMenuItem';
import ProcessPage from './Process';
import ManagePage from './Manage';

const StyledWrapper = styled.div`
    position: relative;
    height: calc(100vh - 30px);
    .content-container {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 48px;
        overflow-y: auto;
    }
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

const HomePage = (props) => {

    const location = useLocation();
    const pathname = location.pathname;

    const [selected, setSelected] = useState(pathname.substr(1, pathname.length));

    return (
        <StyledWrapper>
            <div className='content-container'>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/order' />
                    </Route>
                    <Route path='/order'>
                        <OrderPage />
                    </Route>
                    <Route path='/process'>
                        <ProcessPage />
                    </Route>
                    <Route path='/manage'>
                        <ManagePage />
                    </Route>
                </Switch>
            </div>
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