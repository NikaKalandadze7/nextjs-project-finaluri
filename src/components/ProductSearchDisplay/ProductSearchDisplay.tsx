import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";
interface ProductSearchDisplayProps {
  price: number;
  category: string | undefined;
  title: string;
  image: string;
  id: string | undefined;
}

const ProductSearchDisplay: React.FC<ProductSearchDisplayProps> = ({
  price,
  title,
  image,
  id,
}) => {
  const { locale } = useParams();
  const localizedPath = (path: string) => `/${locale}${path}`;
  return (
    <Link
      href={{
        pathname: localizedPath("/products/details"),
        query: { id },
      }}
      className="relative z-[999] flex flex-row bg-white justify-between items-between p-1 m-2 border-solid border-[1px] border-[#c7c7c7] rounded-md  hover:text-tretiary hover:border-tretiary ease-in-out duration-200"
    >
      <Image src={image} width={28} height={28} alt={title} className="" />
      <h1 className="max-w-[284px] w-full max-h-24 h-full text-sm font-normal leading-6 truncate  ml-8">
        {title}
      </h1>
      <span className="text-sm font-medium leading-5 text-green-500  ml-4">
        ${price}
      </span>
    </Link>
  );
};

export default ProductSearchDisplay;
