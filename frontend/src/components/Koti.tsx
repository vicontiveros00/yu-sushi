import { Carousel } from "react-bootstrap";
import pic1 from '../media/yusushi1.jpg';
import pic3 from '../media/yusushi3.jpg';
import pic4 from '../media/yusushi4.jpg';
import pic5 from '../media/yusushi5.jpg';
import pic6 from '../media/yusushi6.jpg';
import pic7 from '../media/yusushi7.jpg';

//https://react-bootstrap.github.io/components/carousel/
const Koti = () => {
    const images = [pic1, pic3, pic4, pic5, pic6, pic7];
    //import images then add to this array
    return (
        <>
            <h1 className="mt-3">Welcome to Yu Sushi Nokia!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quasi doloremque! Eveniet cupiditate error fuga eum ad culpa nostrum consectetur repellat omnis, distinctio libero dolores deleniti iusto aperiam, voluptatem tempora.</p>
            <Carousel className='carousel' interval={4000} controls={false} indicators={false}>
                {images.map((pic) => {
                    return (
                        <Carousel.Item key={pic}>
                            <img
                                src={pic}
                                className='d-block w-100'
                                style={{
                                    maxWidth: 800
                                }}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </>
    )
}

export default Koti;