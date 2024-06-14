import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStates, deactivateState } from '../../../../redux/actions/action';
import Table from '../../../../components/tableComponents/Table';

const StateList = () => {
  const dispatch = useDispatch();
  const fetchState = useSelector((state) => state.states.states); 
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const localDate = new Date(dateObject.getTime() + dateObject.getTimezoneOffset() * 60000);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(localDate);
  };
   
  const handleEdit = (stateId) => {
    navigate(`/updateState/${stateId}`);
  };

  const handleDeactivate = (stateId) => {
    dispatch(deactivateState(stateId));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'State ID',
        accessor: 'state_id',
      },
      {
        Header: 'State Name',
        accessor: 'state_name',
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
            <button onClick={() => handleEdit(row.original.state_id)} className="font-semibold text-base px-4 py-2 mr-2 rounded-lg bg-white-500 text-black hover:bg-blue-600">
            Edit
          </button>
          <button onClick={() => handleDeactivate(row.original.state_id)} className="font-semibold text-base px-6 py-2 rounded-lg bg-white-500 text-black hover:bg-blue-600">
            Deactivate
          </button>
          </>
        ),
      },
    ],
    []
  );

  return (
    <div className="text-white">
      <Table columns={columns} data={fetchState} /> 
    </div>
  );
};

export default StateList;
