import Client from 'pocketbase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pocketbase , { Record } from 'pocketbase';
import convertCatNameToLegibleString from '../util/convertCatNameToLegibleString';
import { Spinner } from 'react-bootstrap';

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
            const getAllFood = categories.map(async(category) => {
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
            <h1 className='mt-4'>Ruokalista</h1>
            {kategoria ? <p>{convertCatNameToLegibleString(kategoria)}</p> : <p>All food</p>}
            {!isLoading ?
                <>
                    {food?.sort((a: Record, b: Record) => {
                        return a.numero - b.numero;
                    }).map((foodItem: Record) => {
                        return (
                            <p key={foodItem.id}>{foodItem.numero}. {foodItem.nimi} {foodItem.hinta}</p>
                        )
                    })}
                </> :
                    <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading....</span>
                    </Spinner>
            }
        </>
    )
}

export default Menu;