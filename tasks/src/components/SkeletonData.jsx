import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonData = ()=> {
    const [data, setData] = useState(false);
    
    const actualData = [
        1,"Load balancer 1", "Dal05", "Group 01"
    ];

    setTimeout(()=>{
        setData(true);
    }, 2000);

    return (
        // <td className='p-2'><Skeleton height={20} width={`90%`}></Skeleton> </td>
        <tr className=''>
            {
                data === true ? actualData.map(data => (
                            <td className='p-2 text-center'>{data}</td>
                ))  :actualData.map(data => (
                    <td className='p-2'><Skeleton height={20} width={`90%`}></Skeleton> </td>                ))
            }
        </tr>

    )
}

export default SkeletonData;