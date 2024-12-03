import './about.css'
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const about = () => {

    const phoneNumber: string = '+237677553354';
    const whatsappNumber: string = '+237691061390';

    // Fonction pour ouvrir le compositeur de numéro de téléphone
    const callPhoneNumber = (phoneNumber: string): void => {
        window.location.href = `tel:${phoneNumber}`;
    };

    // Fonction pour démarrer une conversation WhatsApp
    const openWhatsApp = (phoneNumber: string): void => {
        const encodedNumber = encodeURIComponent(phoneNumber);
        window.location.href = `https://wa.me/${encodedNumber}`;
    };

    return (
        <div>
            <div className='about'>
                <div className='about-imgs'>
                    <div className='first-img'></div>
                    <div className='second-img'></div>
                    <div className='third-img'></div>
                </div>
                <div className='about-text'>
                    <h1>A propos de nous</h1>
                </div>
            </div>
            <div className='about-church'>
                <h1>Décret Nº92/172 du 27 Août 1992 </h1>
                <span>
                    <h3>Consistoire Mission de la Liberté et de la Gloire</h3>
                    <p>Glory and Liberty Mission</p>
                </span>
                <h2>Contactez le visionnaire </h2>
                <span className='pastor-contact'>
                    <Button
                        color="default"
                        variant="solid"
                        icon={<PhoneOutlined />}
                        shape="round"
                        size='large'
                        onClick={() => callPhoneNumber(phoneNumber)}
                    >
                        Par téléphone
                    </Button>
                    <Button
                        type='primary'
                        style={{ backgroundColor: '#25D366' }}
                        icon={<WhatsAppOutlined />}
                        shape="round"
                        size='large'
                        onClick={() => openWhatsApp(whatsappNumber)}
                    >
                        Par Whatsapp
                    </Button>
                </span>
            </div>
        </div>
    );
};

export default about;