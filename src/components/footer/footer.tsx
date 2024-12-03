import { useState } from 'react';
import './footer.css'
import { NavLink } from 'react-router-dom';
import { Button, Input, Space } from 'antd';
import { EnvironmentOutlined, FacebookFilled, SendOutlined, YoutubeOutlined } from '@ant-design/icons';



const footer = () => {
    const [date] = useState(new Date().getFullYear());
    const facebookUrl: string = 'https://www.facebook.com/pasteur.kueme';

    return (
        <div className='footer'>
            <div className='items'>
                <div className='item'>
                    <span>Église principale</span>
                    <p>B.P : 611 Yaoundê</p>
                    <p><EnvironmentOutlined style={{ color: '#FF0000' }} /> Nkolbisson immeuble pizzeria Yaoundé</p>
                </div>
                <div className='item'>
                    <span>Suivez-nous</span>
                    <ul style={{ paddingLeft: '0' }}>
                        <li><NavLink to={facebookUrl} target="_blank" rel="noopener noreferrer"><FacebookFilled style={{ color: '#1877F2' }} /> Facebook</NavLink></li>
                        <li><NavLink to='/'><YoutubeOutlined style={{ color: '#FF0000' }} /> Youtube</NavLink></li>
                    </ul>
                </div>
                <div className='item'>
                    <span>Newsletter</span>
                    <p>Abonnez-vous à la newsletter MLG pour rester informé des nouveautés</p>
                    <Space.Compact style={{ width: '220px' }}>
                        <Input placeholder="Entrez votre email" />
                        <Button type="primary"><SendOutlined /></Button>
                    </Space.Compact>
                </div>
                <div className='item'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.707194733362!2d11.452228474094683!3d3.8728418961009394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfbc25e6840d%3A0x336e4eb24403b529!2sRapha%C3%ABlo%20Pizza%20Nkolbisson!5e0!3m2!1sfr!2scm!4v1729176696119!5m2!1sfr!2scm"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        loading="lazy">
                    </iframe>
                </div>
            </div>
            <div className='copyright'>
                © Mission de la Liberté et de la Gloire | {date} - Tous les droits sont réservés
            </div>
        </div>
    );
};

export default footer;