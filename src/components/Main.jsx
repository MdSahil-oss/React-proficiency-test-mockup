import Sidebar from './sidebar/Sidebar'
import Container from './container/Container'
let Main = () => {
    return (
        <div className="main-page">
            <Sidebar />
            <Container />
        </div>
    )
}

export default Main;