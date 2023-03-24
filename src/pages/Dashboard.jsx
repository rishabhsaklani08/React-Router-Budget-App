// React-Router-Dom exports
import { useLoaderData } from 'react-router-dom';

// helper functions
import { fetchData } from '../helpers';

// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    // hook
    const { userName } = useLoaderData()

    return (
        <div>
            <h1>{userName}</h1>
            Dashboard
        </div>
    )
}

export default Dashboard