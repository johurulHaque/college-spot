import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function CollegeDetails() {
    const colleges = useLoaderData();
    const { id } = useParams();
    // const [colleges, setCollege] = useState([]);
    const singleCollege = colleges.find( college => college.id == id)

    // useEffect(() => {
    //     fetch('./college.json')
    //         .then(res => res.json())
    //         .then(data => setCollege(data))
    //         .catch(error=> console.log(error))
    // }, [])

    console.log(singleCollege)
    return (
        <div>
            <h1>This is view details</h1>

        </div>
    )
}

export default CollegeDetails
