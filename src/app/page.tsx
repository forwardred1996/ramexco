"use client";

import React, {ReactNode, useState} from "react";
import PulsatingButton from "@/components/ui/pulsating-button";
import {DrawerBody, DrawerContent, DrawerRoot, DrawerTrigger} from "@/components/ui/drawer";

export default function Page() {
    return (
        <div className={'leading-loose'}>
            <Nav/>
            <Home/>
            <About/>
            <Banner src={'/banners-1.png'}/>
            <Services/>
            <Banner src={'/banners-2.jpg'}/>
            <GlobalNetwork/>
            <ContactUs/>
        </div>
    );
}

const Banner = ({src}: { src: string }) => {
    return <div>
        <img className={'hidden lg:block object-cover w-full aspect-[4]'} src={src} alt=""/>
        <Container>
            <img className={'block lg:hidden object-cover w-full aspect-[3] rounded-lg'} src={src} alt=""/>
        </Container>
    </div>
}


const ContactUs = () => {
    return <div id={'contact-us'} className={'py-32  bg-blue-50'}>
        <Container className={'gap-20 items-center'}>
            <div className={'col-span-2'}>
                <h2 className={"text-7xl font-light uppercase"}>
                    Contact Us
                </h2>
                <div className={'font-medium text-2xl my-10'}>
                    <p>Get in touch with us today!</p>
                    <p>
                        You can reach us via email at <b className={'font-bold inline-block bg-blue-300 rounded px-2 py-1'}>info@ramexco.com</b>
                    </p>
                    <p className={'mt-4'}>
                        For any inquiries or issues related to our mail server, including abuse, technical support, or other concerns, please contact us at <b className={'font-bold inline-block bg-rose-400 rounded px-2 py-1'}>postmaster@ramexco.com</b>.
                    </p>
                </div>
            </div>
        </Container>
    </div>
}

const Services = () => {
    return <div id={'services'} className={'py-32'}>
        <Container>
            <h2 className={"text-7xl font-light uppercase"}>
                Our Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-5 my-20 bg-slate-300 border gap-[1px] border-slate-300">
                <ServiceItem className={'aspect-[2] lg:aspect-square lg:col-span-2 xl:col-span-1'} title={'Sea Freight'} icon={<SeaIcon/>}/>
                <ServiceItem className={'aspect-[2] lg:aspect-square lg:col-span-2 xl:col-span-1'} title={'Air Cargo'} icon={<SkyIcon/>}/>
                <ServiceItem className={'aspect-[2] lg:aspect-square lg:col-span-2 xl:col-span-1'} title={'Land Transport'} icon={<LandIcon/>}/>
                <ServiceItem className={'aspect-[2] lg:aspect-[2] xl:aspect-square lg:col-span-3 xl:col-span-1'} title={'customs brokerage'} icon={<CalcIcon/>}/>
                <ServiceItem className={'aspect-[2] lg:aspect-[2] xl:aspect-square lg:col-span-3 xl:col-span-1'} title={'logistics consultancy'} icon={<ShakeIcon/>}/>
            </div>
            <div className={'font-medium text-2xl my-10'}>
                Our diverse range of services includes sea freight, land transport, air cargo, customs brokerage, and
                logistics consultancy. Each service is tailored to meet the unique demands of our clients, ensuring
                optimal efficiency and reliability.
            </div>
        </Container>
    </div>
}

const GlobalNetwork = () => {
    return <div id={'network'} className={'py-32'}>
        <Container>
            <h2 className={"text-7xl font-light uppercase"}>
                Global Network
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 my-20">
                <NetworkItem title={'Middle East'} icon={<img src={'/middle-east.png'}/>}/>
                <NetworkItem title={'China'} icon={<img src={'/china.png'}/>}/>
                <NetworkItem title={'SE Asia'} icon={<img src={'/sea.png'}/>}/>
            </div>
            <div className={'font-medium text-2xl my-10'}>
                With key hubs in strategic locations in Middle East, China and SE Asia, RamexCo Global Logistics ensures
                your cargo reaches its destination smoothly and on time. Explore our global network and see how we
                connect the world through seamless logistics solutions.
            </div>
        </Container>
    </div>
}

const NetworkItem = ({title, icon}: { title: string, icon: ReactNode }) => {
    return <div className={'p-6 flex flex-col items-center justify-center space-y-6'}>
        {icon}
        <div className={'uppercase text-3xl text-center'}>{title}</div>
    </div>
}


const ServiceItem = ({className= '', title, icon}: {className?: string, title: string, icon: ReactNode }) => {
    return <div
        className={`relative bg-white p-6 flex flex-col items-center justify-center space-y-6 ${className}`}>
        {icon}
        <div className={'uppercase text-2xl text-center'}>
            {title}</div>
    </div>
}


const About = () => {
    return <div className={'py-32'} id={'about'}><Container
        className={'grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-20 items-center'}>
        <div className={'col-span-2 space-y-10'}>
            <h2 className={"text-7xl font-light uppercase"}>
                About RamexCo
            </h2>
            <p className={"font-medium text-2xl my-10"}>
                Established with a vision to transform the transportation industry, RamexCo Global Logistics offers
                unparalleled expertise and a commitment to excellence. Our mission is to provide transparent, dynamic,
                and efficient logistics solutions, ensuring our clients needs are met with utmost precision.
            </p>
        </div>
        <div className={'grid grid-cols-1 col-span-2 md:col-span-1 gap-5'}>
            <img src="/about-1.jpg" alt="" className={'rounded object-cover w-full'}/>
            <img src="/about-2.jpg" alt="" className={'rounded object-cover w-full'}/>
        </div>
    </Container>
    </div>
}

const Home = () => {
    return (
        <div id={'home'} className={"w-full overflow-hidden relative"}>
            <Container className={"text-center py-20 z-10 relative"}>
                <h2 className={"text-center text-6xl font-bold my-20"}>
                    Welcome to RamexCo Global Logistics!
                </h2>
                <p className={"font-medium text-2xl md:px-10 xl:px-32 leading-loose my-10"}>
                    We provide seamless and reliable transportation solutions across sea, land, and air. Discover
                    our
                    comprehensive services and see how we can help your business thrive.
                </p>
                <div className="flex items-center justify-center my-10">
                    <PulsatingButton duration={"5s"} href={'#contact-us'}
                                     className={"px-20 py-3 font-bold text-2xl bg-blue-500 !text-white rounded-lg"}>Contact
                        Us</PulsatingButton>
                </div>
            </Container>
            <img className={"w-full h-full scale-[1.2] object-cover blur absolute left-0 top-0"} src={"/banner.jpg"}/>

        </div>
    )
}

const Container = ({children, className = ''}: { children: ReactNode, className?: string }) => {
    return <div className={`max-w-[1200px] px-4  md:px-10 mx-auto ${className}`}>{children}</div>
}

const NavItem = (props: { children: ReactNode, href: string }) => {
    return (
        <a href={props.href} className={"font-medium text-xl"}>{props.children}</a>
    )
}

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    // const btnRef = useRef()

    return (
        <div className={'lg:hidden'}>
            <DrawerRoot placement={'end'} open={open} onOpenChange={(e) => setOpen(e.open)}>
                <DrawerTrigger>
                    <MenuIcon/>
                </DrawerTrigger>
                <DrawerContent portalled={false}>
                    <DrawerBody>
                        <div className="grid grid-cols-1 gap-3 text-xl leading-loose py-10">
                            <a href={'#home'}>Home</a>
                            <a href={'#about'}>About</a>
                            <a href={'#services'}>Services</a>
                            <a href={'#network'}>Global Network</a>
                            <a href={'#contact-us'}>Contact Us</a>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </DrawerRoot>
        </div>
    )
}
const Nav = () => (
    <div>
        <Container className='flex items-center justify-between h-[154px]'>
            <div className="flex items-center space-x-2">
                <img src="/remaxco-logo.jpg" alt="" className={'h-16 object-cover'}/>
            </div>
            <div className={"hidden lg:flex items-center space-x-10"}>
                <NavItem href={'#home'}>Home</NavItem>
                <NavItem href={'#about'}>About</NavItem>
                <NavItem href={'#services'}>Services</NavItem>
                <NavItem href={'#network'}>Global Network</NavItem>
                <NavItem href={'#contact-us'}>Contact Us</NavItem>
            </div>
            <MobileNav/>
        </Container>
    </div>
)

const SeaIcon = () => {
    return <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M36.1086 69.3113V22.239M36.1086 69.3113C27.1912 69.3113 18.639 65.769 12.3335 59.4634C6.0279 53.1579 2.48547 44.6057 2.48547 35.6883H12.5724M36.1086 69.3113C45.026 69.3113 53.5782 65.769 59.8837 59.4634C66.1893 53.1579 69.7317 44.6057 69.7317 35.6883H59.6448M36.1086 22.239C41.6795 22.239 46.1955 17.723 46.1955 12.1521C46.1955 6.58126 41.6795 2.06519 36.1086 2.06519C30.5378 2.06519 26.0217 6.58126 26.0217 12.1521C26.0217 17.723 30.5377 22.239 36.1086 22.239Z"
            stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}

const SkyIcon = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M67.9047 74.528L59.9184 38.1457L75.4474 22.6166C82.1027 15.9614 84.3211 7.08762 82.1027 2.65076C77.6658 0.432328 68.7921 2.65076 62.1368 9.30606L46.6078 24.8351L10.2255 16.8487C8.00706 16.405 6.23231 17.2924 5.34494 19.0672L4.01388 21.2856C3.12651 23.504 3.5702 25.7225 5.34494 27.0535L28.8603 42.5825L19.9866 55.8931H6.676L2.23914 60.33L15.5497 69.2037L24.4235 82.5143L28.8603 78.0775V64.7669L42.1709 55.8931L57.6999 79.4085C59.031 81.1833 61.2494 81.6269 63.4679 80.7396L65.6863 79.8522C67.461 78.5211 68.3484 76.7464 67.9047 74.528Z"
            stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}

const LandIcon = () => {
    return <svg width="80" height="65" viewBox="0 0 80 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M47.4008 55.0183V9.57405C47.4008 7.56529 46.6028 5.6388 45.1824 4.21839C43.762 2.79798 41.8355 2 39.8268 2H9.53058C7.52181 2 5.59532 2.79798 4.17492 4.21839C2.75451 5.6388 1.95653 7.56529 1.95653 9.57405V51.2313C1.95653 52.2357 2.35552 53.1989 3.06572 53.9092C3.77593 54.6194 4.73917 55.0183 5.74355 55.0183H13.3176M13.3176 55.0183C13.3176 59.2014 16.7086 62.5924 20.8917 62.5924C25.0747 62.5924 28.4657 59.2014 28.4657 55.0184M13.3176 55.0183C13.3176 50.8353 16.7086 47.4443 20.8917 47.4443C25.0747 47.4443 28.4657 50.8353 28.4657 55.0184M51.1879 55.0184H28.4657M51.1879 55.0184C51.1879 59.2014 54.5789 62.5924 58.7619 62.5924C62.9449 62.5924 66.336 59.2013 66.336 55.0183M51.1879 55.0184C51.1879 50.8353 54.5789 47.4443 58.7619 47.4443C62.9449 47.4443 66.336 50.8352 66.336 55.0183M66.336 55.0183H73.91C74.9144 55.0183 75.8777 54.6193 76.5879 53.9091C77.2981 53.1989 77.6971 52.2356 77.6971 51.2312V37.4086C77.6955 36.5492 77.4017 35.7158 76.8639 35.0455L63.6851 18.5719C63.3309 18.1284 62.8815 17.7702 62.3702 17.5237C61.859 17.2772 61.2988 17.1488 60.7312 17.148H47.4009"
            stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}

const CalcIcon = () => {
    return <svg width="55" height="64" viewBox="0 0 55 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M42.8607 10.1902H12.2901C11.9522 10.1902 11.6283 10.3244 11.3894 10.5633C11.1505 10.8022 11.0163 11.1262 11.0163 11.464V26.7493C11.0163 27.0871 11.1505 27.4111 11.3894 27.65C11.6283 27.8889 11.9522 28.0231 12.2901 28.0231H42.8607C43.1986 28.0231 43.5225 27.8889 43.7614 27.65C44.0003 27.4111 44.1345 27.0871 44.1345 26.7493V11.464C44.1345 11.1262 44.0003 10.8022 43.7614 10.5633C43.5225 10.3244 43.1986 10.1902 42.8607 10.1902ZM41.587 25.4755H13.5639V12.7378H41.587V25.4755ZM50.5034 0H4.64741C3.63393 0 2.66196 0.402604 1.94532 1.11924C1.22868 1.83588 0.82608 2.80785 0.82608 3.82133V59.8675C0.82608 60.881 1.22868 61.853 1.94532 62.5696C2.66196 63.2862 3.63393 63.6889 4.64741 63.6889H50.5034C51.5169 63.6889 52.4888 63.2862 53.2055 62.5696C53.9221 61.853 54.3247 60.881 54.3247 59.8675V3.82133C54.3247 2.80785 53.9221 1.83588 53.2055 1.11924C52.4888 0.402604 51.5169 0 50.5034 0ZM51.7772 59.8675C51.7772 60.2054 51.643 60.5293 51.4041 60.7682C51.1652 61.0071 50.8412 61.1413 50.5034 61.1413H4.64741C4.30959 61.1413 3.9856 61.0071 3.74672 60.7682C3.50784 60.5293 3.37363 60.2054 3.37363 59.8675V3.82133C3.37363 3.4835 3.50784 3.15951 3.74672 2.92064C3.9856 2.68176 4.30959 2.54755 4.64741 2.54755H50.5034C50.8412 2.54755 51.1652 2.68176 51.4041 2.92064C51.643 3.15951 51.7772 3.4835 51.7772 3.82133V59.8675ZM17.3852 38.2133C17.3852 38.7172 17.2358 39.2097 16.9558 39.6287C16.6759 40.0476 16.278 40.3741 15.8125 40.5669C15.347 40.7598 14.8348 40.8102 14.3406 40.7119C13.8464 40.6136 13.3925 40.371 13.0362 40.0147C12.68 39.6584 12.4373 39.2045 12.339 38.7103C12.2407 38.2161 12.2912 37.7039 12.484 37.2384C12.6768 36.7729 13.0033 36.375 13.4223 36.0951C13.8412 35.8152 14.3338 35.6658 14.8376 35.6658C15.5133 35.6658 16.1613 35.9342 16.639 36.4119C17.1168 36.8897 17.3852 37.5377 17.3852 38.2133ZM30.123 38.2133C30.123 38.7172 29.9735 39.2097 29.6936 39.6287C29.4137 40.0476 29.0158 40.3741 28.5503 40.5669C28.0848 40.7598 27.5726 40.8102 27.0784 40.7119C26.5842 40.6136 26.1303 40.371 25.774 40.0147C25.4177 39.6584 25.1751 39.2045 25.0768 38.7103C24.9785 38.2161 25.0289 37.7039 25.2218 37.2384C25.4146 36.7729 25.7411 36.375 26.1601 36.0951C26.579 35.8152 27.0715 35.6658 27.5754 35.6658C28.2511 35.6658 28.899 35.9342 29.3768 36.4119C29.8546 36.8897 30.123 37.5377 30.123 38.2133ZM42.8607 38.2133C42.8607 38.7172 42.7113 39.2097 42.4314 39.6287C42.1515 40.0476 41.7536 40.3741 41.2881 40.5669C40.8226 40.7598 40.3103 40.8102 39.8162 40.7119C39.322 40.6136 38.8681 40.371 38.5118 40.0147C38.1555 39.6584 37.9129 39.2045 37.8146 38.7103C37.7163 38.2161 37.7667 37.7039 37.9595 37.2384C38.1524 36.7729 38.4789 36.375 38.8978 36.0951C39.3168 35.8152 39.8093 35.6658 40.3132 35.6658C40.9888 35.6658 41.6368 35.9342 42.1146 36.4119C42.5923 36.8897 42.8607 37.5377 42.8607 38.2133ZM17.3852 50.9511C17.3852 51.4549 17.2358 51.9475 16.9558 52.3664C16.6759 52.7854 16.278 53.1119 15.8125 53.3047C15.347 53.4975 14.8348 53.548 14.3406 53.4497C13.8464 53.3514 13.3925 53.1088 13.0362 52.7525C12.68 52.3962 12.4373 51.9423 12.339 51.4481C12.2407 50.9539 12.2912 50.4417 12.484 49.9762C12.6768 49.5107 13.0033 49.1128 13.4223 48.8329C13.8412 48.5529 14.3338 48.4035 14.8376 48.4035C15.5133 48.4035 16.1613 48.6719 16.639 49.1497C17.1168 49.6274 17.3852 50.2754 17.3852 50.9511ZM30.123 50.9511C30.123 51.4549 29.9735 51.9475 29.6936 52.3664C29.4137 52.7854 29.0158 53.1119 28.5503 53.3047C28.0848 53.4975 27.5726 53.548 27.0784 53.4497C26.5842 53.3514 26.1303 53.1088 25.774 52.7525C25.4177 52.3962 25.1751 51.9423 25.0768 51.4481C24.9785 50.9539 25.0289 50.4417 25.2218 49.9762C25.4146 49.5107 25.7411 49.1128 26.1601 48.8329C26.579 48.5529 27.0715 48.4035 27.5754 48.4035C28.2511 48.4035 28.899 48.6719 29.3768 49.1497C29.8546 49.6274 30.123 50.2754 30.123 50.9511ZM42.8607 50.9511C42.8607 51.4549 42.7113 51.9475 42.4314 52.3664C42.1515 52.7854 41.7536 53.1119 41.2881 53.3047C40.8226 53.4975 40.3103 53.548 39.8162 53.4497C39.322 53.3514 38.8681 53.1088 38.5118 52.7525C38.1555 52.3962 37.9129 51.9423 37.8146 51.4481C37.7163 50.9539 37.7667 50.4417 37.9595 49.9762C38.1524 49.5107 38.4789 49.1128 38.8978 48.8329C39.3168 48.5529 39.8093 48.4035 40.3132 48.4035C40.9888 48.4035 41.6368 48.6719 42.1146 49.1497C42.5923 49.6274 42.8607 50.2754 42.8607 50.9511Z"
            fill="black"/>
    </svg>

}

const ShakeIcon = () => {
    return <svg width="96" height="66" viewBox="0 0 96 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M95.5178 22.8441L85.7271 3.32049C85.4569 2.78078 85.0829 2.29949 84.6264 1.90408C84.1699 1.50868 83.6398 1.20691 83.0665 1.01601C82.4931 0.825118 81.8877 0.748833 81.2848 0.791515C80.6819 0.834196 80.0934 0.995008 79.5527 1.26477L69.4974 6.26434L48.8345 0.813046C48.5831 0.746846 48.3189 0.746846 48.0675 0.813046L27.4046 6.26434L17.3492 1.24563C16.8086 0.975868 16.2201 0.815056 15.6172 0.772374C15.0143 0.729693 14.4089 0.805977 13.8355 0.996873C13.2622 1.18777 12.7321 1.48953 12.2756 1.88494C11.8191 2.28034 11.4451 2.76164 11.1749 3.30135L1.38419 22.8441C1.11395 23.3837 0.952848 23.9713 0.91009 24.5731C0.867332 25.1749 0.943754 25.7792 1.13499 26.3515C1.32623 26.9239 1.62853 27.453 2.02464 27.9087C2.42075 28.3644 2.90291 28.7377 3.44358 29.0074L13.9093 34.2328L35.2893 49.4765C35.4449 49.5883 35.6207 49.6689 35.807 49.7139L60.351 55.8389C60.6063 55.9057 60.8746 55.9055 61.1299 55.8385C61.3852 55.7714 61.6189 55.6397 61.8082 55.4561L83.1078 34.1945L93.4622 29.0265C94.0029 28.7569 94.4851 28.3835 94.8812 27.9278C95.2773 27.4721 95.5796 26.943 95.7708 26.3707C95.9621 25.7983 96.0385 25.194 95.9957 24.5922C95.953 23.9904 95.7919 23.4029 95.5216 22.8632L95.5178 22.8441ZM75.9594 36.9891L61.6932 25.5812C61.3978 25.3447 61.0253 25.2255 60.6472 25.2467C60.2691 25.2679 59.9123 25.428 59.6453 25.696C52.1709 33.2145 43.7915 32.246 38.4417 28.8351C38.2447 28.709 38.0787 28.5403 37.9559 28.3416C37.8331 28.1428 37.7567 27.919 37.7322 27.6867C37.706 27.4631 37.7307 27.2365 37.8044 27.0237C37.8781 26.811 37.9989 26.6175 38.1579 26.4579L55.2082 9.94702H68.9797L80.3312 32.6135L75.9594 36.9891ZM4.04567 25.3821C3.92303 25.0029 3.9533 24.591 4.13004 24.2337L13.9361 4.67183C14.0619 4.41902 14.2553 4.20586 14.4949 4.05588C14.7345 3.90591 15.0109 3.82496 15.2937 3.82198C15.5309 3.82342 15.7646 3.87976 15.9763 3.98659L25.1803 8.58037L14.0166 30.8641L4.81267 26.2703C4.63264 26.1798 4.47224 26.0548 4.34063 25.9024C4.20902 25.75 4.10879 25.5732 4.04567 25.3821ZM60.2512 52.6577L36.8348 46.8121L16.6628 32.4298L28.2981 9.18139L48.451 3.87557L59.8486 6.8845H54.587C54.1875 6.88412 53.8036 7.03932 53.517 7.31708L35.9911 24.2873C35.5034 24.7742 35.1315 25.3643 34.903 26.014C34.6746 26.6637 34.5953 27.3563 34.6712 28.0407C34.747 28.7251 34.976 29.3837 35.3412 29.9678C35.7065 30.5519 36.1986 31.0466 36.7811 31.4153C44.4051 36.2809 53.7049 35.2435 60.8111 28.8083L73.7619 39.1673L60.2512 52.6577ZM92.8486 25.3821C92.7855 25.5732 92.6853 25.75 92.5537 25.9024C92.4221 26.0548 92.2617 26.1798 92.0816 26.2703L82.8777 30.8641L71.7217 8.58037L80.9257 3.98659C81.2878 3.81059 81.7047 3.7838 82.0864 3.91201C82.4681 4.04021 82.784 4.31313 82.9659 4.67183L92.7566 24.2146C92.9436 24.5752 92.9795 24.9951 92.8563 25.3821H92.8486ZM48.428 63.924C48.3428 64.2531 48.1504 64.5446 47.881 64.7526C47.6116 64.9605 47.2805 65.073 46.94 65.0724C46.8108 65.073 46.682 65.0575 46.5565 65.0265L30.5723 61.0337C30.385 60.988 30.2081 60.9075 30.0507 60.7964L19.9494 53.588C19.6183 53.3519 19.3947 52.9943 19.3278 52.5937C19.261 52.1931 19.3562 51.7823 19.5927 51.4519C19.8292 51.1214 20.1875 50.8982 20.5888 50.8315C20.9901 50.7647 21.4016 50.8598 21.7326 51.0959L31.5962 58.1282L47.3197 62.052C47.516 62.1016 47.7006 62.1894 47.8627 62.3105C48.0249 62.4316 48.1614 62.5835 48.2645 62.7575C48.3675 62.9316 48.435 63.1243 48.4631 63.3245C48.4911 63.5247 48.4792 63.7284 48.428 63.924Z"
            fill="black"/>
    </svg>

}

const MenuIcon = () => {
    return <svg className={'w-10 h-10'} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000"
                viewBox="0 0 256 256">
        <path
            d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
    </svg>
}
