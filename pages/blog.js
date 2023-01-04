import {getSession, useSession} from "next-auth/react";

function Blog({data}) {
     // useSession은 getSession이 호출되어 보관되어 있는 session이 있으면 그거 활용, 없으면 다시 찾음.
    // _app.js 에서 사용되는 SessionProvider 이 있기에 client-side rendering 되는 페이지 useSession도 마찬가지.
    const {session} = useSession()
    console.log(session)

    return (
        <h1>Blog page - {data}</h1>
    )
}

export default Blog

export async function getServerSideProps(context) {
    const session = await getSession(context)
    console.log({session})

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000//blog`,
                permanent: false,
            }
        }
    }

    return {
        props: {
            session,
            data: session ? 'List of 100 personalized blogs' : 'List of free blogs'
        }
    };
}