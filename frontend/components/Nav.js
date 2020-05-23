import Link from 'next/link'
import NavStyles from './styles/NavStyles';
const Nav = () => {
    return(
        <NavStyles>
            <Link href="/Items"><a>Items</a></Link>
            <Link href="/Sell"><a>Sell</a></Link>
            <Link href="/Signup"><a>Signup</a></Link>
            <Link href="/Orders"><a>Orders</a></Link>
            <Link href="/Account"><a>Account</a></Link>
        </NavStyles>
    )
}

export default Nav;
