import GetBillboard from "@/actions/GetBillboard";
import GetProducts from "@/actions/GetProducts";
import Billboard from "@/components/Billboard/BIllboard";
import ProductList from "@/components/ProductList/ProductList";
import Container from "@/components/ui/Container";


const HomePage = async () => {
  const billboard = await GetBillboard("cf77df44-2f91-43f0-b0b6-b669d5f5f531");
  const products = await GetProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
