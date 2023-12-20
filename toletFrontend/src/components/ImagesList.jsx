import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImagesList() {
  return (
    <ImageList
      // sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img data-aos="flip-up" data-aos-duration='1500'
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/assets/galary (1).jpg',

    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/galary (2).jpg',
  },
  {
    img: '/assets/galary (3).jpg',
  },
  {
    img: '/assets/galary (4).jpg',
    cols: 2,
  },
  {
    img: '/assets/galary (5).jpg',
    cols: 2,
  },
  {
    img: '/assets/galary (6).jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/galary.jpg',
  },
  {
    img: '/assets/galary (7).jpg',
    title: 'Fern',
  },
  {
    img: '/assets/galary (8).jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',

  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',

  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    cols: 2,
  },
];
