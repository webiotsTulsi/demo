import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

const Cardd = () => {
    return (
        <div className='h-fit bg-amber-400 w-2/12'>        
            <Card className='bg-amber-300'>
                <CardImg className='' src="https://fastly.picsum.photos/id/890/300/200.jpg?hmac=0LKMOsjIqNRCSE4Iqm1C8jryvFHQKLxO2PLNzrhDCKw"></CardImg>
                <CardBody>
                    <CardTitle><h1 className='font-bold text-2xl'>Title 1</h1></CardTitle>
                    <CardText><p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, cum?</p></CardText>
                </CardBody>
            </Card>
        </div>
)
}

export default Cardd;