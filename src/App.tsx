import React, {useState, useEffect} from 'react';

const GRAPHQL_URL = 'http://localhost:9000/'

function App() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({greeting: ''})

    useEffect(() => {
        fetchGreeting();
    },[])

    const fetchGreeting = async () => {
        const response = await fetch(GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                    query {
                        greeting
                    }
                `
            })
        })

        const {data} = await response.json();
        setData(data);
        setLoading(false)
        console.log(data)
    }

    return (
        <div>
            {loading ? 'loading..' : data.greeting}
        </div>
    );
}

export default App;
