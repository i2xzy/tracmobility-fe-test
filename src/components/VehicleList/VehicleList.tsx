import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { DataGrid, GridColDef, GridRowsProp } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ProgressBar from '../ProgressBar';
import { Wrapper, Buttons } from './VehicleList.styled';

const fetchVehicles = (page = 0) =>
  fetch(
    `https://console-api.tracmobility.com/test/vehicles?page=${page}&size=9`
  ).then(res => res.json());

const VehicleList = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);

  const { isLoading, data } = useQuery(
    ['vehicles', page],
    () => fetchVehicles(page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (!data?.last) {
      queryClient.prefetchQuery(['vehicles', page + 1], () =>
        fetchVehicles(page + 1)
      );
    }
  }, [data, page, queryClient]);

  const rows: GridRowsProp =
    data?.content?.map((item: any) => ({
      ...item,
      id: item.uuid,
    })) || [];

  const renderBatteryLevel = (params: any) => (
    <ProgressBar value={Number(params.value)!} />
  );

  const renderOperation = (params: any) => (
    <Buttons>
      <Button size="small" variant="contained" color="primary">
        Edit
      </Button>
      <Button size="small" variant="contained">
        Order
      </Button>
      <Button size="small" variant="contained">
        Change City/Region
      </Button>
      <Button size="small" variant="contained" color="secondary">
        Change Status
      </Button>
    </Buttons>
  );

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Vehicle ID', width: 125 },
    { field: 'qrCode', headerName: 'QR Code', width: 115 },
    { field: 'status', headerName: 'Status', width: 102 },
    { field: 'lockStatus', headerName: 'Lock Status', width: 132 },
    {
      field: 'batteryLevel',
      headerName: 'Battery Level',
      width: 140,
      renderCell: renderBatteryLevel,
    },
    {
      field: 'category',
      headerName: 'Operation',
      flex: 1,
      renderCell: renderOperation,
    },
  ];

  return (
    <Wrapper>
      <Typography variant="h6">Vehicle List</Typography>
      <DataGrid
        density="compact"
        rowHeight={70}
        autoHeight
        paginationMode="server"
        rowCount={data?.totalElements}
        loading={isLoading}
        rows={rows}
        columns={columns}
        disableColumnMenu
        onPageChange={params => setPage(params.page)}
        rowsPerPageOptions={[10]}
        pageSize={10}
      />
    </Wrapper>
  );
};

export default VehicleList;
