import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    
    .link {
        color: #000;
    }

    .link.selected {
        color: var(--selected-color);
    }
    
`

const BottomMenuItem = props => {
    return (
        <StyledWrapper  onClick={() => { props.onSelected() }}>
            <Link to={'/' + props.name} className={`${props.selected && 'selected'} link`}>
                <Icon type={props.icon} />
                <div>{props.text}</div>
            </Link>
        </StyledWrapper>
    )
}

export default BottomMenuItem;