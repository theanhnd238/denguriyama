import BaseName from "@/components/base/baseName";
import BasePrice from "@/components/base/basePrice";
import { Box } from "@chakra-ui/react";

interface Item {
  title: string;
  price: string;
  subTitle?: string | undefined;
  note?: string | undefined;
}
interface CategoryProps {
  data: Item[];
  name: string;
}

function Category({ data, name }: CategoryProps) {
  return (
    <Box>
      {name !== "" ? <BaseName name={name} /> : null}
      <Box>
        {data.map((item, index) => (
          <BasePrice
            key={index}
            title={item.title}
            price={item.price}
            subTitle={item.subTitle}
            note={item.note}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Category;
