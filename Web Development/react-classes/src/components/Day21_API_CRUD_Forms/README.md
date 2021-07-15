## >>>>> APIs <<<<<
```js
import { useEffect } from 'react';

const Api = () =>{
    useEffact(()=>{
        fetchItems();
    })

    const fetchItems = async() =>{
        const response = await fetch('https://api.com/data');
        const data_json = await response.json();
        // const data_text = await response.text();
        console.log(data_json);
    }
    return (
        <h1>API Data </h1>
    )
}
```
> Debugging related to networks can be done on network tab <br>
> we create a usestate() and pass the response of API to it

```js
// inside API call function
const [data, setData] = useState([]);
//calling API data
setData(data_json);
```
<br><br>