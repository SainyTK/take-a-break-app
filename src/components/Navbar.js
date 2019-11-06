import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon, Popover, Button, Menu } from 'antd';

const StyledWrapper = styled.div`
    height: 30px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.15);

    h3 {
        margin: 0;
    }

`;

const PopoverContent = props => {
    return (
        <Menu>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Manage</Menu.Item>
        </Menu>
    )
}

const Navbar = props => {

    const [visible, setVisible] = useState(false);

    return (
        <StyledWrapper>
            <h3 className='logo'>Take a Break</h3>
            <div>
                <Popover
                    content={<PopoverContent />}
                    trigger='click'
                    placement='bottomRight'
                    arrowPointAtCenter
                    onVisibleChange={(v) => setVisible(v)}
                >
                    <Icon type='menu' />
                </Popover>
            </div>
        </StyledWrapper>
    )
}

export default Navbar;