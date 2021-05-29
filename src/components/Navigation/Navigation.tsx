import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DefaultIcon from '@material-ui/icons/FileCopy';

import routes from '../../config/routes';
import { NestedListItem } from './Navigation.styled';

const Navigation = () => {
  const [open, setOpen] = useState(true);

  const history = useHistory();

  return (
    <>
      {routes.map(route =>
        route.subRoutes ? (
          <React.Fragment key={route.key}>
            <Divider />
            <List
              subheader={
                route.title ? (
                  <ListSubheader>{route.title}</ListSubheader>
                ) : undefined
              }
            >
              {route.subRoutes.map(subRoute => (
                <React.Fragment key={subRoute.key}>
                  <ListItem
                    dense
                    button
                    onClick={
                      subRoute.subRoutes ? () => setOpen(!open) : undefined
                    }
                    disabled={subRoute.disabled}
                  >
                    <ListItemIcon>
                      <Icon component={subRoute.icon || DefaultIcon} />
                    </ListItemIcon>
                    <ListItemText primary={subRoute.title} />
                    {subRoute.subRoutes && open && <ExpandLess />}
                    {subRoute.subRoutes && !open && <ExpandMore />}
                  </ListItem>
                  {subRoute.subRoutes && (
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List>
                        {subRoute.subRoutes.map(subRoute2 => (
                          <NestedListItem
                            key={subRoute2.key}
                            dense
                            button
                            disabled={subRoute2.disabled}
                            onClick={() => history.push(`${subRoute2.path}`)}
                          >
                            <ListItemIcon>
                              <Icon component={subRoute2.icon || DefaultIcon} />
                            </ListItemIcon>
                            <ListItemText primary={subRoute2.title} />
                          </NestedListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </React.Fragment>
        ) : (
          <React.Fragment key={route.key}>
            <Divider />
            <ListItem button disabled={route.disabled}>
              <ListItemIcon>
                <Icon component={route.icon || DefaultIcon} />
              </ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItem>
          </React.Fragment>
        )
      )}
    </>
  );
};

export default Navigation;
