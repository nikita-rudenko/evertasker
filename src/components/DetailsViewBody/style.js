import styled from 'styled-components';

// Theme helpers
import { getStyleVariable, getCurrentThemeColor } from '../../theme/helpers';



export const DetailsViewBodySC = styled.div`
	background: ${getStyleVariable('constColors', 'taskColor1')};
	display: flex;
	flex-direction: column;
	height: calc(100% - 80px - 60px);
	overflow-y: auto;
	padding: 20px 40px;
	position: relative;
	width: 100%;

	
	&::-webkit-scrollbar-thumb {
		background: ${getCurrentThemeColor('primary')};
		border-radius: 2px;
	}
	
	&::-webkit-scrollbar {
		background: #fff;
		width: 10px;
	}
`;

export const TaskSubheadingSC = styled.div`
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 1px;
	margin: 0;
`;

// TAGS
export const TagsSC = styled.ul`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	max-width: 500px;
	padding: 0;
	& > li {
		background: ${getStyleVariable('constColors', 'accent')};
		border-radius: 4px;
		color: #fff;
		font-size: 14px;
		margin: 6px 2px;
		padding: 4px;
	}
`;

// METAINFO
export const MetaInfoSC = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 12px;
	position: absolute;
	right: 20px;
	top: 20px;
`;

export const LabelSC = styled.span`
	font-size: 14px;
	font-weight: bold;
	letter-spacing: 1px;
	margin-right: 4px;
	text-transform: capitalize;
`;

export const MetaItemSC = styled.span`
	font-size: 14px;
`;

// DESCRIPTION
export const DescriptionSC = styled.div`
	margin-top: 20px;
	max-width: 500px;
`;

export const DescriptionTextSC = styled.p`
	font-size: 14px;
`;

// TODO
export const TodoListSC = styled.ul`
	margin-left: 20px;
	padding: 0;
	& > li {
		font-size: 16px;
		margin-top: 2px;
	}
`;

// ASSIGNEES
export const AssigneesSC = styled.div`
	margin-top: auto;
`;

export const AssigneesListSC = styled.ul`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	padding-left: 0;
	& > li {
		background: ${getStyleVariable('constColors', 'accent')};
		border-radius: 4px;
		color: #fff;
		font-size: 14px;
		margin: 6px 2px;
		padding: 4px;
	}
`;
