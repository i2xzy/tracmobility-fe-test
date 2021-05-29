import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';

export const NestedListItem = styled(ListItem)`
  padding-left: ${({ theme }) => theme.spacing(4)}px;
`;
