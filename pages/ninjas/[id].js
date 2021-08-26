export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await res.json();
   
    const paths = data.map(ninja => {
        return {
            params : {id: ninja.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { ninja: data }
    }
  }

const Details = ({ninja}) => {
    console.log(ninja);
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.phone }</p>
            <p>{ninja.username}</p>
            <p>{ninja.website}</p>
            <p><code>{ninja.address.city}, {ninja.address.geo.lat}: {ninja.address.geo.lng}, {ninja.address.street}, {ninja.address.suite}, {ninja.address.zipcode}</code></p>
        </div>
     );
}
 
export default Details;