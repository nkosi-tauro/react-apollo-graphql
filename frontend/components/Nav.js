import Link from 'next/link'
const Nav = () => {
    return(
        <div>
            <Link href="/index"><a>Home</a></Link>
            <Link href="/Sell"><a>Sell</a></Link>
        </div>
    )
}

export default Nav;
