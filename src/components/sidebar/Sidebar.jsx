import './Sidebar.css'

let Sidebar = () => {
    let setNav = (e) => {
        let buttons = document.getElementsByClassName('bar-buttons')
        Array.from(buttons).forEach((element) => {
            element.classList.remove('bar-focussed-color')
        })
        e.target.classList.add('bar-focussed-color')
    }
    return (
        <div className='sidebar'>
            <div>
                <div id="bar-line-1"></div>
                <div id="bar-line-2"></div>
                <div id="bar-line-3"></div>
            </div>
            <i onClick={(e) => {setNav(e)}} class="bar-home bar-buttons fa-solid fa-house fa-2xl bar-focussed-color"></i>
            <i onClick={(e) => {setNav(e)}} class="bar-mail bar-buttons fa-solid fa-envelope fa-2xl"></i>
        </div>
    )
}

export default Sidebar;