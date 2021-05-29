import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  Theme,
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';

import routes from './config/routes';
import Layout from './components/Layout';

const queryClient = new QueryClient();

function App() {
  const theme: Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#03989E',
      },
    },
  });

  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Router>
                <Switch>
                  <Layout>
                    {routes.map(route =>
                      route.subRoutes ? (
                        route.subRoutes.map(subRoute =>
                          subRoute.subRoutes ? (
                            subRoute.subRoutes.map(subRoute2 => (
                              <Route
                                key={subRoute2.key}
                                path={subRoute2.path}
                                exact
                                component={subRoute2.component}
                              />
                            ))
                          ) : (
                            <Route
                              key={subRoute.key}
                              path={subRoute.path}
                              exact
                            />
                          )
                        )
                      ) : (
                        <Route key={route.key} path={route.path} exact />
                      )
                    )}
                    <Route path="/" />
                  </Layout>
                </Switch>
              </Router>
            </QueryClientProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
}

export default App;
