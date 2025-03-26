import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('에러발생 : ', error);
            });
    }, []);

    return (
        <div>
            <h1>백엔드 데이터:</h1>
            <p>{data}</p>
        </div>
    );
}

export default App;


