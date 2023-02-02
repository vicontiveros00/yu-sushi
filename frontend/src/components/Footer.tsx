import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import svg from "../util/svg";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const yuSushiIsOpen = (openingTime: string, closingTime: string) => {
        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
        return currentTime >= openingTime && currentTime <= closingTime;
    }

    type hoursTuple = [string, string];
    
    const weekdayHours: hoursTuple = ['10:30', '21:00'];
    const weekendHours: hoursTuple = ['12:00', '21:00'];

    useEffect(() => {
        const today = new Date().getDay();
        //check if using weekend hours
        today === 1 || today === 7 ? setIsOpen(yuSushiIsOpen(...weekendHours)) : setIsOpen(yuSushiIsOpen(...weekdayHours));
    }, [])

    return (
        <div className="footer bg-dark">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='8'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1905.1264359340005!2d23.50418521616001!3d61.47794308246151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ed75b2ff66981%3A0x7aecfd739f7094a!2sKiinalainen%20Ravintola%20YU%20SUSHI!5e0!3m2!1sen!2sfi!4v1675258691823!5m2!1sen!2sfi" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    <Col>
                        <p>Välikatu 8, 37100 Nokia</p>
                        <p><a href='tel:033423338'>📞 03 342 3338</a></p>
                        <p>
                            ma-pe: 10.30 - 21
                            <br />
                            la-su: 12 - 21
                        </p>
                        {isOpen? <p>🟢 Auki nyt</p> : <p className="text-muted">🔴 Suljettu</p>}
                        <div className="fb mb-2">
                            <a target='_blank' href='https://www.facebook.com/RavintolaYuSushi'>{svg.facebook} Seuraa meitä!</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className="text-muted">&#169;Yu Sushi {currentYear}</p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;