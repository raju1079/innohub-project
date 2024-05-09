import React, { useState } from 'react';

const AddMark = ({ student, onClose, onSubmit }) => {
  const [testScore, setTestScore] = useState('');
  const [interviewScore, setInterviewScore] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!testScore ||!interviewScore) {
        setError('Test score and interview score are required.');
        return;
      }
      const markData = {
        student_id: student.student_id,
        test_score: testScore,
        interview_score: interviewScore,
      };
      onSubmit(markData);
      console.log("Submitting marks:", markData);
      onClose();
    } catch (error) {
      console.error('Error submitting marks:', error);
      setError('Error submitting marks. Please try again.');
    }
  };
  
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">Add Marks for {student.student_id}</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Test Score (0-40):
            <input
              type="number"
              value={testScore}
              onChange={(event) => setTestScore(event.target.value)}
              min={0}
              max={40}
              className="w-20 p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Interview Score (0-10):
            <input
              type="number"
              value={interviewScore}
              onChange={(event) => setInterviewScore(event.target.value)}
              min={0}
              max={10}
              className="w-20 p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded"
            />
          </label>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 p-2 rounded mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 p-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMark;