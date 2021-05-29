import { ComponentType } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/ListAlt';
import AddIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';

import VehicleList from '../components/VehicleList';
import VehicleMap from '../components/VehicleMap';

type RouteType = {
  key: string;
  title: string;
  icon?: ComponentType;
  subRoutes?: RouteType[];
  disabled?: boolean;
  path?: string;
  component?: ComponentType;
};

const routes: RouteType[] = [
  {
    key: 'kpi-dashboard',
    title: 'KPI Dashboard',
    icon: DashboardIcon,
    disabled: true,
  },
  {
    key: 'task-management',
    title: 'Task Management',
    subRoutes: [
      {
        key: 'task-map',
        title: 'Task Map',
        icon: MapIcon,
        disabled: true,
      },
      {
        key: 'task-list',
        title: 'Task List',
        icon: ListIcon,
        disabled: true,
      },
      {
        key: 'task-creation',
        title: 'Task Creation',
        icon: AddIcon,
        disabled: true,
      },
    ],
  },
  {
    key: 'operation-center',
    title: 'Operation Center',
    subRoutes: [
      {
        key: 'vehicle-operation',
        title: 'Vehicle Operation',
        icon: DashboardIcon,
        subRoutes: [
          {
            key: 'vehicle-list',
            title: 'Vehicle List',
            icon: ListIcon,
            path: '/vehicle-list',
            component: VehicleList,
          },
          {
            key: 'vehicle-map',
            title: 'Vehicle Map',
            icon: MapIcon,
            path: '/vehicle-map',
            component: VehicleMap,
          },
          {
            key: 'vehicle-search',
            title: 'Vehicle Search',
            icon: SearchIcon,
            disabled: true,
          },
        ],
      },
    ],
  },
];

export default routes;
