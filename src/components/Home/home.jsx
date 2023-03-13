import { Featured } from '../Featured/featured';
import { Posts } from '../Posts/posts';
import './home.css';

export function Home() {
    return (
        <div className='container p-2'>
            <Featured></Featured>
            <Posts></Posts>
        </div>
    )
}
