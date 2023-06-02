import React, { useEffect, useState } from 'react';

const History = () => {
  const [historyTime, setHistoryTime] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [historyList, setHistoryList] = useState([]);
  const [selHistory, setSelHistory] = useState(null);

  const getHistoryByUser = async () => {
    const res = await fetch(`http://localhost:5000/history/getbyuser/${currentUser._id}`);
    const data = await res.json();
    console.log(data);
    setHistoryList(data);
    setHistoryTime(data.map((item) => item.createdAt));
    setSelHistory(data[0]);
  };

  const displayHistory = () => {
    if (selHistory !== null) {
      return selHistory.data.devList.map((item) => (
        <div className="col-md-2 mb-3">
          <div className="card" >
            <img className="card-img-top" src={item.avatar_url} alt="" />
            <div className="card-body">
              <h6>{item.login}</h6>
            </div>
          </div>
        </div>
      ));
    }
  };

  useEffect(() => {
    getHistoryByUser();
  }, []);

  return (
    <div style={{ backgroundColor: '#97c9dd', minHeight: '100vh' }}>
      <header>
        <div className="">
          <div className="row">
            <div className="col-md-3">
              <div className="card" style={{ backgroundColor: '#003448', borderRadius: 0, minHeight: '100vh' }}>
                <div className='card-header'>
                  <h5 className='text-white'>Saved History</h5>
                </div>
                <div className="card-body">
                  <label className="text-white">Choose Date & Time</label>
                  {historyList.map((item) => (
                    <button onClick={(e) => setSelHistory(item)} className="btn btn-white w-100 my-2">
                      {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="container">
                <div className="row mt-4">{displayHistory()}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <select className="form-control" onChange={(e) => setSelHistory(historyList.find((item) => item._id === e.target.value))}>
        {historyList.map((item) => (
          <option value={item._id}>
            {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default History;
