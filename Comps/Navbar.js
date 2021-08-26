import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={120} />
            </div> 
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninjas Listing</a></Link>
        </nav>
    )
}
export default Navbar;