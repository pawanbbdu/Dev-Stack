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
        <div className="col-md-3 mb-3">
          <div className="card">
            <img className="card-img-top" src={item.avatar_url} alt="" />
            <div className="card-body">
              <h4>{item.login}</h4>
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
    <div>
      <select className="form-control" onChange={e => (
        setSelHistory(historyList.find(item => item._id === e.target.value))
      )}>
        {historyList.map((item) => (
          <option value={item._id}>
            {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}
          </option>
        ))}
      </select>
      <div className="row mt-4">{displayHistory()}</div>
    </div>
  );
};

export default History;
