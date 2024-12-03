import './navbar.css'
import LOGO from '../../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { Button, Dropdown, MenuProps, Select } from 'antd';
import { CloseOutlined, DownOutlined, FileImageOutlined, MenuOutlined, TranslationOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useState } from 'react';


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const translateIcon: any = <TranslationOutlined />;

const navbar = () => {

    // State pour gérer la visibilité du menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <NavLink to='/phototheque' onClick={!menuOpen}>Photothèque</NavLink>
            ),
            icon: <FileImageOutlined />,
        },
        {
            key: '2',
            label: (
                <NavLink to='/videotheque' onClick={!menuOpen}>Vidéothèque</NavLink>
            ),
            icon: <VideoCameraOutlined />,
        }
    ]

    return (
        <div className='header'>
            <div className="navbar">
                <div className='content'>
                    <div className='logo'>
                        <Link to={'/'} > <img src={LOGO} width={'70px'} alt="Logo" /></Link>
                    </div>
                    <div className="btn-menu">
                        <Button shape="circle" icon={!menuOpen ? <MenuOutlined /> : <CloseOutlined />} onClick={toggleMenu} />
                    </div>
                </div>
                <ul className={`items ${menuOpen ? 'open' : ''}`}>
                    <li className="item"><NavLink to='/' onClick={!menuOpen}>Accueil</NavLink></li>
                    <li className="item">
                        <Dropdown menu={{ items }}>
                            <NavLink onClick={(e: { preventDefault: () => any; }) => e.preventDefault()}>
                                Espace Média <DownOutlined style={{ width: '10px', height: '10px' }} />
                            </NavLink>
                        </Dropdown>
                    </li>
                    <li className="item"><NavLink to='/about' onClick={!menuOpen}>A propos</NavLink></li>
                    <li>
                        <Select
                            onChange={handleChange}
                            defaultValue='fr'
                            suffixIcon={translateIcon}
                            style={{ width: 60 }}
                            options={[
                                { value: 'fr', label: 'FR' },
                                { value: 'en', label: 'EN' },
                            ]}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default navbar;