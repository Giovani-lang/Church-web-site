import './videotheque.css'
import { Image, Row, Col, Pagination } from 'antd';
import { SetStateAction, useState } from 'react';
import Video_One from '../../assets/videos/7048201_Animation_Motion Graphic_1280x720.mp4'
import Video_Two from '../../assets/videos/7048827_Animation_Motion Graphic_1280x720.mp4'

const videos = [
    { src: Video_One },
    { src: Video_Two },
    { src: Video_One },
    { src: Video_Two },
    { src: Video_One },
    { src: Video_Two },
    { src: Video_One },
    { src: Video_Two },
    { src: Video_Two }

    // Ajoutez plus de video ici si nécessaire
];

const itemsPerPage = 6; // Nombre de video par page

const videotheque = () => {

    const [currentPage, setCurrentPage] = useState(1);

    // Calculer le sous-ensemble des videos à afficher en fonction de la page active
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedVideos = videos.slice(startIndex, endIndex);

    // Fonction pour gérer le changement de page
    const handlePageChange = (page: SetStateAction<number>) => {
        setCurrentPage(page);
    };


    return (
        <div>
            <div className="videos">
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                    <Row style={{ margin: '0', padding: '0' }} gutter={[16, 16]}>
                        {paginatedVideos.map((video: any, index) => (
                            <Col style={{ display: 'flex', justifyContent: 'center' }} span={12} key={index}>
                                <video
                                    muted
                                    width="100%"
                                    controls
                                    src={video.src}
                                />
                            </Col>
                        ))}
                    </Row>
                </Image.PreviewGroup>
                <Pagination
                    align="end"
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={videos.length}
                    onChange={handlePageChange}
                    style={{ margin: '10px', textAlign: 'center' }}
                />
            </div>
        </div>
    );
};

export default videotheque;