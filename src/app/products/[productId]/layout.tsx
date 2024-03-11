

const ProductsLayout = ({ 
  children 
}: Readonly<{ children: React.ReactNode }>) => (
  <>
    <h1>Featured products</h1>
    {children}
  </>
);

export default ProductsLayout;

