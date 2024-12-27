export let currentLanguage = 'sv';

export const toggleLanguage = (button) =>
{
    currentLanguage = currentLanguage === 'sv' ? 'en' : 'sv';
    button.textContent= currentLanguage==='sv'?'In English':'Till Svenska'
    
}

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
