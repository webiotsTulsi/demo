// import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import Skeleton from 'react-loading-skeleton';
import {Link} from 'react-router-dom';
import SkeletonData from './SkeletonData';

const Skeletonn = () => {
    // npm i react-loading-skeleton
    // import 'react-loading-skeleton/dist/skeleton.css'
    
    return (
        <div className='bg-gray-700 pt-5 h-screen flex flex-col gap-4 items-center'>
            <table className='bg-white'>
                <thead>
                    <tr>
                        <th className='p-2 w-52 text-center'>No</th>
                        <th className='p-2 w-52 text-center'>Name</th>
                        <th className='p-2 w-52 text-center'>Zone</th>
                        <th className='p-2 w-52 text-center'>Groups</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <SkeletonData/>
                    <SkeletonData/>
                    <SkeletonData/>
                    <SkeletonData/>
                </tbody>
            </table>

            <div className='flex gap-5'>
                <Link className='text-white text-decoration-none' to="/cards">Card</Link>
                <Link className='text-white text-decoration-none' to="/navigate">Navigation Menu</Link>
                <Link className='text-white text-decoration-none' to="/carouselll">Carousel</Link>
            </div>
        </div>

    )
}

export default Skeletonn;