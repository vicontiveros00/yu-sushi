import Client from 'pocketbase';
import { useParams } from 'react-router-dom';

type MenuProps = {
    data: Client
}

const Menu = ({ data }: MenuProps) => {
    const { kategoria } = useParams();
    return (
        <>
            <h1>Menu</h1>
            {kategoria ? <p>{kategoria}</p> : undefined}
        </>
    )
}

export default Menu;