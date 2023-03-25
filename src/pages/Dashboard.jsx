// React-Router-Dom exports
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

// components
import Intro from '../components/Intro';

// helper functions
import { fetchData } from '../helpers';

// loader
export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

// action
export async function dashboardAction({ request }) {
    const data = await request.formData();
    const formData = Object.fromEntries(data)
    try {
        // throw new Error(' Ya done')
        localStorage.setItem("userName",
            JSON.stringify(formData.userName))
        return toast.success(`Welcome, ${formData.userName}`)
    } catch (e) {
        throw new Error("There is a problem creating your account!")
    }
}

const Dashboard = () => {
    // hook
    const { userName } = useLoaderData()

    return (
        <>
            {userName ? (<p>{userName}</p>) : <Intro />}
        </>
    )
}

export default Dashboard