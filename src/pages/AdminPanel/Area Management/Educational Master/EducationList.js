import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchHigherEducation, deactivateEducation } from '../../../../redux/actions/action';
import Table from '../../../../components/tableComponents/Table';

const EducationList = () => {
  const dispatch = useDispatch();
  const higherEducation = useSelector((state) => state.higherEducation.higherEducation);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchHigherEducation());
  }, [dispatch]);

  /*const formatDate = (date) => {
    const dateObject = new Date(date);
    const localDate = new Date(dateObject.getTime() + dateObject.getTimezoneOffset() * 60000);
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(localDate);
  };*/
  const formatDate = (date) => {
    const dateObject = new Date(date);
    const utcDate = new Date(dateObject.getUTCFullYear(), dateObject.getUTCMonth(), dateObject.getUTCDate(), dateObject.getUTCHours(), dateObject.getUTCMinutes(), dateObject.getUTCSeconds());
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(utcDate);
  };
  
  const handleEdit = (degreeId) => {
    navigate(`/updateEducation/${degreeId}`);
  };

  const handleDeactivate = (degreeId) => {
    dispatch(deactivateEducation(degreeId));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Education ID',
        accessor: 'degree_id',
      },
      {
        Header: 'Higher Education',
        accessor: 'degree_name',
      },
      {
        Header: 'Creation Date',
        accessor: 'creation_date',
        Cell: ({ value }) => formatDate(value),
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <>
            <button onClick={() => handleEdit(row.original.degree_id)} className="font-semibold text-base px-4 py-2 mr-2 rounded-lg bg-white-500 text-black hover:bg-blue-600">
            Edit
          </button>
          <button onClick={() => handleDeactivate(row.original.degree_id)} className="font-semibold text-base px-6 py-2 rounded-lg bg-white-500 text-black hover:bg-blue-600">
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
      <Table columns={columns} data={higherEducation} /> 
    </div>
  );
};

export default EducationList;
