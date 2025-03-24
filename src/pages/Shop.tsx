import t1 from "@/assets/images/t1.jpg";
import t2 from "@/assets/images/t2.jpg";
import t3 from "@/assets/images/t3.jpg";
import t4 from "@/assets/images/t4.jpg";
import t5 from "@/assets/images/t5.jpg";
import t6 from "@/assets/images/t6.jpg";
import t7 from "@/assets/images/t7.jpg";
import t8 from "@/assets/images/t8.jpg";

import ProductCart from "@/components/ProductCart";

const products = [
  { id: 1, name: "#116  Inked Heart", price: 20, image: t1 },
  { id: 2, name: "#909  Smoked Rose", price: 20, image: t2 },
  { id: 7, name: "3CE Blur Water Tint ", price: 20, image: t7 },
  { id: 4, name: "3ce Velvet Lip Tint ", price: 20, image: t4 },
  { id: 5, name: "3ce Soft Matte Lipstick", price: 20, image: t5 },
  { id: 6, name: "3CE Deep limited edition ", price: 20, image: t6 },
  { id: 3, name: "Simple Stay Soft Matte", price: 20, image: t3 },
  { id: 8, name: "Son Kem Lì 3CE Cloud Lip ", price: 20, image: t8 },
];
function Shop() {
  return (
    <section className="flex grow bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <ProductCart {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Shop;
