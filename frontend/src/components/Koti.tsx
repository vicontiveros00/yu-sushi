import { Carousel, Container } from "react-bootstrap";
//https://react-bootstrap.github.io/components/carousel/
const Koti = () => {
    return (
        <>
            <Carousel interval={4000} controls={false} indicators={false}>
                <Carousel.Item>
                   <img 
                        className=""
                        src="#" 
                   /> 
                </Carousel.Item>
                <Carousel.Item>
                   <img 
                        className=""
                        src="#" 
                   /> 
                </Carousel.Item>
            </Carousel>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae accusamus iste sit sint ullam nisi quod, quo unde assumenda! Fugiat minima porro illo itaque vel debitis dolores voluptate voluptates.</p>
        </>
    )
}

export default Koti;