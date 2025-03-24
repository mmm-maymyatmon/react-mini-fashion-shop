import { useState } from 'react';
import Button from './Button';
type productType = {
  name: string;
  color: string;
  price: number;
  image: string;
};

const ProductCard: React.FC<productType> = ({ name, color, price, image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className="rounded overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r rounded-lg bg-gray-300"></div>
        )}
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={`${name} - ${color}`}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-gray-900">
            ${price.toLocaleString()}
          </div>
          <Button>Add to Cart</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#e0f7fa] text-[#00796b] rounded-full px-4 py-1 text-sm font-medium">
            {color}
          </span>
          <span className="bg-[#e0f7fa] text-[#00796b] rounded-full px-4 py-1 text-sm font-medium">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
