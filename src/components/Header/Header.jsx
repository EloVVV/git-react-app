// export function Header() {
//     return(
//         <header><h1>Шапка</h1></header>
//     );
// }

import Avatar from "../Avatar/Avatar";

const MENU = [
    {
        name: "Home",
        path: "/home",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Donate",
        path: "/donate",
    }
]

const UserData = [
    {
        key: "name",
        name: "Сержантов"
    },
    {
        key: "name",
        name: "Павел"
    },
    {
        key: "name",
        name: "Андреевич"
    },
];

const Header = () => {
    return (
        <header>
            
           <nav>
            <ul>
                {
                    MENU.map((item) => {
                        return (
                            <li key={item.name}>
                                <a href={item.path}>{item.name}</a>
                            </li>
                        );
                    })
                }
               
            </ul>
           </nav>
           <Avatar path="https://i.pinimg.com/originals/b1/02/dc/b102dcda56577ee8b860b89dadf0f4c0.jpg"/>
           {
                UserData.map((item) => {
                    return (
                        <div key={item.name}>
                            <p>{item.name}</p>
                        </div>
                    );
                })
            }
        </header>
    );
}

export default Header;