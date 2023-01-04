import {getSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {signIn} from "next-auth/react";

function Dashboard() {

    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const securePage = async () => {
            const session = await getSession()
            if (!session) {
                await signIn('github');
            } else {
                setLoading(false)
            }
        }
        securePage()
    }, []);

    if (loading) {
        return <h2>Loading.....</h2>
    }






    return (
        <div>
            <h1>Dashboard Page</h1>

        </div>
    );
}

export default Dashboard