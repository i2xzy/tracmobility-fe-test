import styled from 'styled-components';
import { styled as styledMUI } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';

const DRAWER_WIDTH = 240;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledAppBar = styled(AppBar)`
  width: calc(100% - ${DRAWER_WIDTH}px);
  margin-left: ${DRAWER_WIDTH}px;
  background: ${({ theme }) => theme.palette.background.paper};
`;

export const StyledDrawer = styled(Drawer).attrs({
  classes: { paper: 'paper' },
  variant: 'permanent',
  anchor: 'left',
  color: 'primary',
})`
  width: ${DRAWER_WIDTH}px;
  flex-shrink: 0;

  & .paper {
    width: ${DRAWER_WIDTH}px;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ToolbarOffest = styledMUI('div')(({ theme }) => ({
  padding: theme.spacing(0),
  ...theme.mixins.toolbar,
}));

export const Content = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.background.default};
  margin-left: ${DRAWER_WIDTH}px;
`;
