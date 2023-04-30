import StayBiling from "@/components/staybil/StaylBiling";
import { Text14, Text36 } from "@/components/typegraphy";
import Image from "next/image";
import { useState } from "react";
import facebookSvg from "@/public/images/facebook.svg";
import linkedinSVg from "@/public/images/linkedin.svg";
import { roboto } from "@/components/font/font";
const ContactPage = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const formData = [
        {
            id: 1,
            name: "What's your name?",
            placeholder: "Type your full name",
            value: Name,
            set: setName
        },
        {
            id: 2,
            name: "What's your email address?",
            placeholder: "yourname@email.com",
            value: Email,
            set: setEmail
        },
        {
            id: 3,
            name: "What's your phone number?",
            placeholder: "+0123 4567 8910",
            value: phoneNumber,
            set: setPhoneNumber
        },
        {
            id: 4,
            name: "Tell us what you think",
            placeholder: "Type your message",
            value: message,
            set: setMessage
        }
    ]
    const social =[
        {
            icon:"/images/contact/facebook.svg",
            link:"/"
        },
        {
            icon:"/images/contact/twitter.svg",
            link:"/"
        },
        {
            icon:"/images/contact/instagram.svg",
            link:"/"
        }
    ]
    return (
        <div className="flex flex-col bg-black z-10 relative h-full lg:h-screen">
            <div className="grid grid-cols-12 mt-32 mb-10 px-6 md:px-[70px] xl:gap-10">
                <div className="col-span-12 xl:col-span-7 2xl:col-span-8 flex flex-col gap-4">
                    <span className="font-normal text-3xl md:text-4xl lg:text-5xl 2xl:text-[72px] text-white font-CormorantGaramond">
                        Lets Collaborate!
                    </span>
                    <span className={`text-xs lg:text-base xl:text-lg text-white font-normal ${roboto.className}`}>
                        Let us help you to find you the most luxurious property in town.<br />Fill out the form and we will get back to you in less than an hour on working days.
                    </span>
                    <div className="flex flex-col gap-8 mt-2.5 w-full">
                        {
                            formData.map((item, index) => (
                                <div className="flex items-start gap-5 w-full" key={index}>
                                    <span className="text-white text-sm border-x border-y border-solid border-white rounded-full px-5 py-1">
                                        0{item.id}
                                        </span>
                                    <div className="flex flex-col  gap-2.5 w-full">
                                        <span className="text-white text-base">
                                            {item.name}
                                        </span>
                                        <input 
                                            className={`border-none bg-transparent outline-none text-sm text-[#b1b1b1] ${roboto.className}`}
                                            type="text" 
                                            placeholder={item.placeholder} 
                                            value={item.value} 
                                            onChange={(e)=>item.set(e.target.value)} />
                                        <div className="bg-[#b1b1b1] flex h-px w-full"></div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <button className="mt-6 explore flex items-center justify-center relative ml-auto">
                        Submit
                        <span className="icon-right">
                            
                        </span>
                        <span className="icon-right after"></span>
                    </button>
                </div>
                <div className="col-span-12 xl:col-span-5 2xl:col-span-4 flex flex-col items-start gap-4 mt-10 xl:px-24">
                    <div className="flex flex-col gap-2.5">
                        <span className="uppercase text-sm text-white">
                            call us
                        </span>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2.5">
                                <Image alt="icon" src="/images/contact/phone-solid.svg" width={15} height={15} />
                                <span className={`text-white text-base font-normal ${roboto.className}`}>+0123 4567 8910</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Image alt="icon" src="/images/contact/whatsapp.svg" width={15} height={15} />
                                <span className={`text-white font-normal ${roboto.className}`}>+0123 4567 8910</span>
                            </div>
                        </div>
                    </div>
                   
                    <div className="flex flex-col gap-2.5">
                        <span className="uppercase text-sm text-white">
                            SEND US A MESSAGE
                        </span>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2.5">
                                <Image alt="email-icon" src="/images/contact/envelope-solid.svg" width={15} height={15} />
                                <span className={`text-white text-base font-normal ${roboto.className}`}>
                                    hello@delattio.com
                                </span>
                            </div>
                           
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <span className="uppercase text-sm text-white">
                            ADDRESS
                        </span>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2.5">
                                <Image alt="location" src="/images/contact/location-dot-solid.svg" width={15} height={15} />
                                <span className={`text-white text-base font-normal ${roboto.className}`}>
                                    102 Street, Dubai
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {
                            social.map((item,index)=>(
                                <a href={item.link} target="_blank" key={index}>
                                    <Image src={item.icon} alt="social-icon" width={index===0?8:15} height={15} />
                                </a>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden">
                <StayBiling />
            </div>
            <div className="flex lg:hidden flex-col gap-5 w-full lg:max-w-[376px] px-6 md:pl-[70px] xl:gap-10 py-20">
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
        </div>
    );
}

export default ContactPage;