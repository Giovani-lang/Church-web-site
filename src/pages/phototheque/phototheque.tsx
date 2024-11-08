import './phototheque.css'
import { Image, Row, Col, Pagination } from 'antd';
import { SetStateAction, useState } from 'react';

const images = [
    { src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' },
    { src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg' },
    { src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' },
    { src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg' },
    { src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' },
    { src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg' },
    { src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' },
    { src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg' },
    { src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg' },

    // Ajoutez plus d'images ici si nécessaire
];

const itemsPerPage = 6; // Nombre d'images par page

const phototheque = () => {

    const [currentPage, setCurrentPage] = useState(1);

    // Calculer le sous-ensemble des images à afficher en fonction de la page active
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedImages = images.slice(startIndex, endIndex);

    // Fonction pour gérer le changement de page
    const handlePageChange = (page: SetStateAction<number>) => {
        setCurrentPage(page);
    };


    return (
        <div>
            <div className="photos">
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <Row style={{ margin: '0', padding: '0' }} gutter={[16, 16]}>
                        {paginatedImages.map((image, index) => (
                            <Col style={{ display: 'flex', justifyContent: 'center', columnGap: '10px' }} span={6} key={index}>
                                <Image
                                    width='100%'
                                    src={image.src}
                                />
                            </Col>
                        ))}
                    </Row>
                </Image.PreviewGroup>
                <Pagination
                    align="end"
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={images.length}
                    onChange={handlePageChange}
                    style={{ margin: '10px', textAlign: 'center' }}
                />
            </div>
        </div>
    );
};

export default phototheque;