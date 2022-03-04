import './style.css';
import Header from '../Header';

export default function Main(props) {
    return (
        <>
            <Header {...props} />
            <main className="content container-fluid">
                <div className='p-3 mt-3'>
                    {props.children}
                </div>
            </main>
        </>
    );
}