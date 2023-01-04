import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'

function Navbar() {
    const {data: session, status} = useSession()
    const loading = status === "loading"
    // console.log(session, loading, status)
    return (
        <nav className='header'>
            <h1 className='logo'>
                <a href='#'>NextAuth</a>
            </h1>
            <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </li>

                {!loading && !session && (
                    <li>

                        <button onClick={() => signIn('github')}>Sign In</button>

                    </li>
                )}
                {session && (
                    <li>
                        <button onClick={() => signOut()}>Sign Out</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar