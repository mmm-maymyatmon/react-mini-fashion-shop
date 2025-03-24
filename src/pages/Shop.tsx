import fashionImg01 from '@/assets/images/fashion-image01.jpg';
import fashionImg02 from '@/assets/images/fashion-image02.jpg';
import fashionImg03 from '@/assets/images/fashion-image03.jpg';
import fashionImg04 from '@/assets/images/fashion-image04.jpg';
import fashionImg05 from '@/assets/images/fashion-image05.jpg';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Women Blazer',
    color: 'LeafyGreen',
    price: 1000,
    image: fashionImg01,
  },
  {
    id: 2,
    name: 'Women Suits',
    color: 'LeafyGreen',
    price: 1500,
    image: fashionImg02,
  },
  {
    id: 3,
    name: 'Women Work Outfits',
    color: 'LeafyGreen',
    price: 3000,
    image: fashionImg03,
  },
  {
    id: 4,
    name: 'Classic Blazer',
    color: 'Midnight Black',
    price: 1200,
    image: fashionImg04,
  },
  {
    id: 5,
    name: 'Modern Blazer',
    color: 'Cobalt Blue',
    price: 1800,
    image: fashionImg05,
  },
];
function Shop() {
  return (
    <section className="flex grow py-10 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
