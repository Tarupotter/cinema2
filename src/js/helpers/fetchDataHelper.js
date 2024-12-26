
export const fetchData = async ( filePath ) =>
{
    try {
        const res = await fetch( filePath );
        if ( !res.ok )
        {
            throw new Error( `HTTP error! status:${res.status}` );   
        }
        const data = await res.json();
        return data
        
    } catch ( error ){
       console.error('error in fetching from aboutUs.json', error) 
        
    }
}
