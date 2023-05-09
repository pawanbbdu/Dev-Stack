import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const DevDetails = () => {

    const {username} = useParams();

    const [devData, setDevData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchDevData = async () => {

    }

  return (
    <div>
        
    </div>
  )
}

export default DevDetails