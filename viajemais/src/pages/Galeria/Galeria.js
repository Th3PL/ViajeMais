import React, { useState } from 'react';
import { Dialog,DialogTitle,DialogContent,IconButton,ImageList,ImageListItem,ImageListItemBar} from '@mui/material';
import { Close, ZoomIn } from '@mui/icons-material';
import './Galeria.css'; 

import dubai from './img/img1.jpg';
import montanha from './img/img2.jpg';
import times from './img/img3.jpg';
import rio from './img/img4.jpg';
import canada from './img/img5.jpg';
import rota from './img/img6.jpg';




const travelImages = [
  {
    img: dubai,
    title: 'Jumeirah Burj Al - EAU',
  },
  {
    img: montanha,
    title: 'Cordilheira Snowy - BG',
  },
  {
    img: times,
    title: 'Times Square - NY',
  },
  {
    img: rio,
    title: 'Hooker River - NZ',
  },
  {
    img: canada,
    title: 'Banff - CA',
  },
  {
    img: rota,
    title: 'Rota Panamericana - EUA',
  },
];

const Galeria = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="galeria-container">
      <div className="galeria-content">
        <ImageList variant="masonry" cols={3} gap={16} className="image-list">
          {travelImages.map((item) => (
            <ImageListItem 
              key={item.img}
              onClick={() => handleOpen(item)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={`${item.img}?w=400&fit=crop&auto=format`}
                srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    aria-label={`zoom in ${item.title}`}
                  >
                    <ZoomIn />
                  </IconButton>
                }
                sx={{
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'visible'
            }
          }}
        >
          <DialogTitle style={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '8px'
          }}>
            <IconButton 
              onClick={handleClose}
              sx={{ 
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }
              }}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent style={{ padding: 0 }}>
            {selectedImage && (
              <img
                src={`${selectedImage.img}?auto=format`}
                alt={selectedImage.title}
                style={{
                  width: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Galeria;