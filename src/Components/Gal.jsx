import { useState } from 'react'

// pang import sa mga image in the images folder
const imageModules = import.meta.glob('../assets/images/*.jpg', { eager: true })

const getImage = (filename) => {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith(filename))
  return match ? match[1].default : null
}

const galleryItems = [
  { file: 'bedroom.jpg', label: 'Bedroom' },
  { file: 'window.jpg', label: 'The Window' },
  { file: 'lobby.jpg', label: 'Building Lobby Area' },
  { file: 'tv.jpg', label: 'Entertainment' },
  { file: 'kitchen.jpg', label: 'Kitchen Area' },
  { file: 'bil.jpg', label: 'Billiard' },
  { file: 'dine.jpg', label: 'Dine Table' },
  { file: 'sofa.jpg', label: 'Bed sized Sofa' },
  { file: 'hpool.jpg', label: 'Hot Pool' },
  { file: 'opool.jpg', label: 'Outside Pool' },
  { file: 'bm1.jpg', label: 'Bathroom' },
  { file: 'bm2.jpg', label: 'Bathroom' },
]

export default function Gal() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [zoom, setZoom] = useState(1)

  const openLightbox = (item) => {
    setSelectedItem(item)
    setZoom(1)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    setZoom(1)
  }

  const zoomIn = () => setZoom((z) => Math.min(z + 0.5, 3))
  const zoomOut = () => setZoom((z) => Math.max(z - 0.5, 1))

  return (
    <div className="bg-[#6B7F55]">
      <div className="max-w-5xl mx-auto px-4 py-12 md:px-8">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Gallery
        </h2>
        <p className="text-white/70 text-center mb-8 text-sm">
          Click a photo to view it up close
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <button
              key={item.file}
              onClick={() => openLightbox(item)}
              className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <img
                src={getImage(item.file)}
                alt={item.label}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm text-center py-2">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

   
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-white/70 transition-colors cursor-pointer"
            aria-label="Close"
          >
            &times;
          </button>

          <div
            className="absolute top-4 left-4 flex gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={zoomOut}
              disabled={zoom <= 1}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white w-10 h-10 rounded-full text-xl transition-colors cursor-pointer"
              aria-label="Zoom out"
            >
              −
            </button>
            <button
              onClick={zoomIn}
              disabled={zoom >= 3}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white w-10 h-10 rounded-full text-xl transition-colors cursor-pointer"
              aria-label="Zoom in"
            >
              +
            </button>
          </div>

        <div
  className="overflow-auto max-w-full max-h-[80vh] flex items-center justify-center"
  onClick={(e) => e.stopPropagation()}
>
  <img
    src={getImage(selectedItem.file)}
    alt={selectedItem.label}
    className="max-w-full max-h-[80vh] w-auto h-auto object-contain transition-transform duration-200 select-none cursor-pointer"
    style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
    draggable={false}
  />
</div>
          <p className="text-white text-center mt-4 text-sm">
            {selectedItem.label}
          </p>
        </div>
      )}
    </div>
  )
}