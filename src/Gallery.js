import React, { useState } from "react";
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close'; // Updated import for MUI v5
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { Captions, Counter, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Img1 from './adityesh/img1.jpg';
import Img2 from './adityesh/img2.jpg';
import Img3 from './adityesh/img3.jpg';
import Img4 from './adityesh/img4.jpg';
import Img5 from './adityesh/img5.jpg';
import Img6 from './adityesh/img6.jpg';
import Img7 from './adityesh/img7.jpg';
import Img8 from './adityesh/img8.jpg';
import Img9 from './adityesh/img9.jpg';
import Img10 from './adityesh/img10.jpg';
import Img11 from './adityesh/img11.jpg';
import Img12 from './adityesh/img12.jpg';
import Img13 from './adityesh/img13.jpg';
import Img14 from './adityesh/img14.jpg';
import Img15 from './adityesh/img15.jpg';
import Img16 from './adityesh/img16.jpg';
import Img17 from './adityesh/img17.jpg';
import Img18 from './adityesh/img18.jpg';
import Img19 from './adityesh/img19.jpg';
import Img20 from './adityesh/img20.jpg';
import Img21 from './adityesh/img21.jpg';
import Img22 from './adityesh/img22.jpg';
import Img23 from './adityesh/img23.jpg';
import Img24 from './adityesh/img24.jpg';
import Img25 from './adityesh/img25.jpg';
import Img26 from './adityesh/img26.jpg';
import Img27 from './adityesh/img27.jpg';
import Img28 from './adityesh/img28.jpg';
import Img29 from './adityesh/img29.jpg';
import Img30 from './adityesh/img30.jpg';
import Img31 from './adityesh/img31.jpg';
import Img32 from './adityesh/img32.jpg';
import Img33 from './adityesh/img33.jpg';

const data = [
    { id: 1, imgSrc: Img1, description: 'Photo 1' },
    { id: 2, imgSrc: Img2, description: 'Photo 2' },
    { id: 3, imgSrc: Img3, description: 'Photo 3' },
    { id: 4, imgSrc: Img4, description: 'Photo 4' },
    { id: 5, imgSrc: Img5, description: 'Photo 5' },
    { id: 6, imgSrc: Img6, description: 'Photo 6' },
    { id: 7, imgSrc: Img7, description: 'Photo 7' },
    { id: 8, imgSrc: Img8, description: 'Photo 8' },
    { id: 9, imgSrc: Img9, description: 'Photo 9' },
    { id: 10, imgSrc: Img10, description: 'Photo 10' },
    { id: 11, imgSrc: Img11, description: 'Photo 11' },
    { id: 12, imgSrc: Img12, description: 'Photo 12' },
    { id: 13, imgSrc: Img13, description: 'Photo 13' },
    { id: 14, imgSrc: Img14, description: 'Photo 14' },
    { id: 15, imgSrc: Img15, description: 'Photo 15' },
    { id: 16, imgSrc: Img16, description: 'Photo 16' },
    { id: 17, imgSrc: Img17, description: 'Photo 17' },
    { id: 18, imgSrc: Img18, description: 'Photo 18' },
    { id: 19, imgSrc: Img19, description: 'Photo 19' },
    { id: 20, imgSrc: Img20, description: 'Photo 20' },
    { id: 21, imgSrc: Img21, description: 'Photo 21' },
    { id: 22, imgSrc: Img22, description: 'Photo 22' },
    { id: 23, imgSrc: Img23, description: 'Photo 23' },
    { id: 24, imgSrc: Img24, description: 'Photo 24' },
    { id: 25, imgSrc: Img25, description: 'Photo 25' },
    { id: 26, imgSrc: Img26, description: 'Photo 26' },
    { id: 27, imgSrc: Img27, description: 'Photo 27' },
    { id: 28, imgSrc: Img28, description: 'Photo 28' },
    { id: 29, imgSrc: Img29, description: 'Photo 29' },
    { id: 30, imgSrc: Img30, description: 'Photo 30' },
    { id: 31, imgSrc: Img31, description: 'Photo 31' },
    { id: 32, imgSrc: Img32, description: 'Photo 32' },
    { id: 33, imgSrc: Img33, description: 'Photo 33' },
];

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    const handleClick = (currentIndex) => {
        setIndex(currentIndex);
        console.log("Image clicked: ", currentIndex); // Debug log
    }

    return (
        <>
            <div className="Gallery">
                {data.map((item, idx) => (
                    <div className="pics" key={idx} onClick={() => handleClick(idx)}>
                        <img src={item.imgSrc} alt={item.description} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>

            <Lightbox
                plugins={[Captions, Counter, Fullscreen, Zoom, Thumbnails]}
                captions={{ showToggle: true, descriptionTextAlign: 'start' }}
                counter={{ container: { style: { top: 0, bottom: 'unset', left: 0, right: 'unset' } } }}
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={data.map(({ imgSrc, description }) => ({ src: imgSrc, description }))}
            />
        </>
    );
}

export default Gallery;
