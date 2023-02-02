import Client from 'pocketbase';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Record } from 'pocketbase';
import convertCatNameToLegibleString from '../util/convertCatNameToLegibleString';
import { Nav, Spinner, Table } from 'react-bootstrap';

type MenuProps = {
    data: Client
    categories: string[]
}

const Menu = ({ data, categories }: MenuProps) => {
    const { kategoria } = useParams();
    const [food, setFood] = useState<Record[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getFood = async() => {
        setIsLoading(true);
        if (kategoria) {
            const getFoodByCat = await data.collection(kategoria).getFullList();
            setFood(getFoodByCat);
        } else {
            const getAllFood = categories.map(async(category: string) => {
                return await data.collection(category).getFullList();
            })
            setFood((await Promise.all(getAllFood)).flat());
        }
        setIsLoading(false);
    }

    useEffect(() => {
        const apiCall = async() => {
            await getFood();
        }
        apiCall();
    }, [kategoria]);

    return (
        <>
            <Nav variant='tabs' className="justify-content-center mt-3">
                <Nav.Link
                    to='/ruokalista'
                    as={Link}
                    active={!kategoria}
                >Kaikki</Nav.Link>
                {categories.map((category) => {
                    return (
                        <Nav.Link
                            to={`/ruokalista/${category}`}
                            as={Link}
                            active={kategoria === category}
                        >
                            {convertCatNameToLegibleString(category)}
                        </Nav.Link>)
                })}
            </Nav>
            <h1 className='mt-4'>Ruokalista</h1>
            {kategoria ? <p>{convertCatNameToLegibleString(kategoria)}</p> : <p>Kaikki ruoat</p>}
            {!isLoading ?
                <Table>
                    <tbody>
                    {food?.sort((a: Record, b: Record) => {
                        return a.numero - b.numero;
                    }).map((foodItem: Record) => {
                        return (
                            <tr key={foodItem.id}>
                                <td>{foodItem.numero}.</td>
                                <td>{foodItem.nimi}</td>
                                <td>{foodItem.hinta}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table> :
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading....</span>
                </Spinner>
            }
        </>
    )
}

export default Menu;