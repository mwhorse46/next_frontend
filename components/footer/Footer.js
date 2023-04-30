import Link from "next/link";
import { Text14, Text18 } from "../typegraphy";
import data from "@/components/footer/footer.item";
import facebookSvg from "@/public/images/facebook.svg";
import linkedinSVg from "@/public/images/linkedin.svg";
import whatsappSvg from "@/public/images/contact/whatsapp.svg";
import phoneSvg from "@/public/images/contact/phone-solid.svg"
import Image from "next/image";
import { roboto } from "../font/font";
const Footer = () => {

    return (
        <footer className="flex flex-col">
            <div className="flex items-start flex-col gap-6 lg:flex-row justify-between px-6 md:px-[40px] py-[80px] sm:py-[105px]">
                <div className="flex flex-col gap-5 w-full lg:max-w-[323px]">
                    <span className="text-2xl leading-6 text-white font-bold uppercase font-CormorantGaramond">
                        Delattio
                    </span>
                    <Text14
                        color="gray-600"
                        text="DELATTIO® is a registered trademark. DELATTIO.AE is operated by LXT Real Estate Brokers LLC as a platform for the publication of real estate properties from DELATTIO Real Estate LLC (ORN 12521)"
                        weight="300"
                    />
                    <div className="flex items-center gap-2">
                        <a
                            href="#"
                            target="_blank"
                        >
                            <Image alt="logo" src={facebookSvg} width={25} height={25} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                        >
                            <Image alt="logo" src={linkedinSVg} width={25} height={25} />
                        </a>
                    </div>
                </div>
                <div>
                    {
                        data.map((item, index) => (
                            <div className="flex flex-col gap-[22px]" key={index}>
                                <div className={`text-sm xl:text-base 2xl:text-lg leading-6 text-gray-600 font-normal ${roboto.className} underline`}>
                                    {item.label}
                                </div>
                                <div className="flex flex-col gap-4">
                                    {
                                        item.children.map((items, index) => (
                                            <Link href={items.path} key={index}>
                                                <Text14 color="gray-600" text={items.label} weight="300" />
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-[26px] w-[196px]">
                        <Text18 color="gray-600" text={"ADDRESS:"} weight="400" />
                        <Text14
                            color="gray-600"
                            text={"A108 Adam Street New York,NY 535022 United States"}
                            weight="300"
                            position=""
                        />
                    </div>
                    <div className="flex flex-col gap-[26px]">
                        <Text18 color="gray-600" text={"PHONE:"} weight="400" />
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2.5">
                                <Image alt="icon" src={phoneSvg} width={15} height={15} />
                                <span className={`text-gray-600 text-sm font-light ${roboto.className}`}>
                                    +155 89554 8855
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Image alt="icon" src={whatsappSvg} width={15} height={15} />
                                <span className={`text-gray-600 text-sm font-light ${roboto.className}`}>
                                    +0123 4567 8910
                                </span>
                            </div>
                            <Link href="/contact" className="flex items-center gap-2.5 no-underline">
                                <Image alt="icon" src={phoneSvg} width={15} height={15} />
                                <span className={`text-gray-600 text-sm font-light ${roboto.className} underline`}>
                                Request Call Back
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>

        </footer>
    );
}

export default Footer;