import React from 'react';
import styled from 'styled-components';

// Theme
import { theme } from '../../config/theme';



const TaskCategory = () => {
    return (
        <StyledTaskCategory>
            Category
        </StyledTaskCategory>
    );
};

const StyledTaskCategory = styled.div`
	background: ${theme.colors.blue.dark};
	border-radius: 4px;
	box-shadow: ${theme.boxShadow.lighter};
	color: ${theme.colors.white};
	opacity: 0.8;
	padding: 8px 20px;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	
	&:hover{
		box-shadow: ${theme.boxShadow.normal};
		cursor: pointer;
		opacity: 1;
	}
`;

export default TaskCategory;
