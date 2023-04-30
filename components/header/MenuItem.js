import downSvg from "@/public/images/angle-down-solid.svg"
import Image from 'next/image';
import { useRouter } from "next/router";
const MenuItems = ({ item, close, handleShowChildren
}) => {
  const router = useRouter();
  const handleRoute = (path) => {
    router.push(path);
    close()
  }
  return (
    <div className={`flex flex-col  gap-4`}>
      {
        item.map((items, index) => (
          <div
            key={index}
            className="cursor-pointer flex items-center justify-between w-full px-6"
            onClick={items.children ? () => handleShowChildren(items.children) : () => handleRoute(items.path)}
          >
            <div className="flex flex-col items-start gap-3 pt-2">
              <span className={`text-xl text-white font-semibold font-sans`} >
                {items.label}
              </span>

            </div>
            {items.children &&
              <Image
                alt="arrow"
                src={downSvg}
                width={15}
                height={15}
                className={`-rotate-90`} />}
          </div>
        ))
      }
     
    </div>
  );
}

export default MenuItems;