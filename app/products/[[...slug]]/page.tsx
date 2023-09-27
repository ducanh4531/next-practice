import ProductCard from "@/app/components/ProductCard";

interface ProductPageProps {
	params: { slug: string[] };
	searchParams: { sortOrder: string };
}

const ProductPage = ({
	params: { slug },
	searchParams: { sortOrder },
}: ProductPageProps) => {
	return (
		<div>
			ProductPage {slug} {sortOrder}
			<ProductCard />
		</div>
	);
};

export default ProductPage;
