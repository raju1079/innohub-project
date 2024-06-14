import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCityList, deactivateCity, fetchStates } from '../../../../redux/actions/action';
import Table from '../../../../components/tableComponents/Table';

const CityList = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.fetchCity.city);
  const states = useSelector((state) => state.states.states);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCityList());
    dispatch(fetchStates());
  }, [dispatch]);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const utcDate = new Date(dateObject.getUTCFullYear(), dateObject.getUTCMonth(), dateObject.getUTCDate(), dateObject.getUTCHours(), dateObject.getUTCMinutes(), dateObject.getUTCSeconds());
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(utcDate);
  };
  
  const handleEdit = (cityId) => {
    navigate(`/updateCity/${cityId}`);
  };

  const handleDeactivate = (cityId) => {
    dispatch(deactivateCity(cityId));
  };

  const mapStateName = (stateId) => {
    const state = states.find(state => state.state_id === stateId);
    return state ? state.state_name : '';
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'City ID',
        accessor: 'city_id',
      },
      {
        Header: 'City Name',
        accessor: 'city_name',
      },
      {
        Header: 'State Name',
        accessor: 'state_id',
        Cell: ({ value }) => mapStateName(value),
      },
      {
        Header: 'Creation Date',
        accessor: 'creation_date',
        Cell: ({ value }) => {
          if (!value) {
            return ''; 
          }
          const date = new Date(value);
          return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        },
        //Cell: ({ value }) => formatDate(value),
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <>
            <button onClick={() => handleEdit(row.original.city_id)} className="font-semibold text-base px-4 py-2 mr-2 rounded-lg bg-white-500 text-black hover:bg-blue-600">
              Edit
            </button>
            <button onClick={() => handleDeactivate(row.original.city_id)} className="font-semibold text-base px-6 py-2 rounded-lg bg-white-500 text-black hover:bg-blue-600">
              Deactivate
            </button>
          </>
        ),
      },
    ],
    [states] 
  );

  return (
    <div className="text-white">
      <Table columns={columns} data={cities} /> 
    </div>
  );
};

export default CityList;
