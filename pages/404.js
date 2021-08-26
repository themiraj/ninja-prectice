import Link from 'next/link';
import { useEffect,useState } from 'react';
import router, { useRouter  } from 'next/router';
const NotFouns = () => {
  
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[])
    return ( 
        <div className="not-found">
            <p>Page redirect to Home in 3 Sec...</p>
            <h1>Ooooop...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>

        </div>
     );
}
 
export default NotFouns;