import { NavLink } from 'react-router-dom';
import './about.css'
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
// import { AntDesignOutlined } from '@ant-design/icons';
// import { Button, ConfigProvider, Space } from 'antd';


// const useStyle = createStyles(({ prefixCls, css }) => ({
//     linearGradientButton: css`
//       &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
//         border-width: 0;

//         > span {
//           position: relative;
//         }

//         &::before {
//           content: '';
//           background: linear-gradient(135deg, #6253e1, #04befe);
//           position: absolute;
//           inset: 0;
//           opacity: 1;
//           transition: all 0.3s;
//           border-radius: inherit;
//         }

//         &:hover::before {
//           opacity: 0;
//         }
//       }
//     `,
// }));

const about = () => {

    // const { styles } = useStyle();

    return (
        <div>
            <div className='about'>
                <div className='about-imgs'>
                    <div className='first-img'></div>
                    <div className='second-img'></div>
                    <div className='third-img'></div>
                </div>
                <div className='about-text'>
                    <h2>A propos de nous</h2>
                </div>
            </div>
            <div className='about-church'>
                <h2>Décret Nº92/172 du 27 Août 1992 </h2>
                <span>
                    <p>Consistoire Mission de la Liberté et de la Gloire</p>
                    <small>Glory and Liberty Mission</small>
                </span>
                <h3>Contactez le visionnaire </h3>
                <span className='pastor-contact'>
                    <NavLink to='/'><PhoneOutlined style={{ color: '#000000' }} /> Par téléphone</NavLink>
                    <NavLink to='/'><WhatsAppOutlined style={{ color: '#075e54' }} /> Par Whatsapp</NavLink>
                    {/* <ConfigProvider
                        button={{
                            className: styles.linearGradientButton,
                        }}
                    >
                        <Space>
                            <Button type="primary" size="large" icon={<AntDesignOutlined />}>
                                Gradient Button
                            </Button>
                            <Button size="large">Button</Button>
                        </Space>
                    </ConfigProvider> */}
                </span>
            </div>
        </div>
    );
};

export default about;