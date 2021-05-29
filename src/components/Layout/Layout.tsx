import React, { ReactNode } from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Navigation from '../Navigation';

import {
  Wrapper,
  StyledAppBar,
  StyledDrawer,
  ToolbarOffest,
  Content,
} from './Layout.styled';

interface Props {
  children: ReactNode;
}

const darkTheme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <CssBaseline />
      <StyledAppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Trac Mobility
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <ThemeProvider theme={darkTheme}>
        <StyledDrawer>
          <ToolbarOffest />
          <Navigation />
        </StyledDrawer>
      </ThemeProvider>
      <Content>
        <ToolbarOffest />
        {children}
      </Content>
    </Wrapper>
  );
};

export default Layout;
