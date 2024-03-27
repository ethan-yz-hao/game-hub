import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAppStoreIos, FaAndroid} from 'react-icons/fa'
import {SiNintendo, SiAtari, SiSega, SiCommodore} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {PlatForm} from "../hooks/usePlatForm";
import {ThreeDOIcon, NeoGeoIcon} from "../data/customIcons";
import {FunctionComponent} from "react";

interface Props {
    platforms: PlatForm[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key:string]: IconType | FunctionComponent} = {
        "pc": FaWindows,
        "playstation": FaPlaystation,
        "xbox": FaXbox,
        "ios": FaAppStoreIos,
        "android": FaAndroid,
        "mac": FaApple,
        "linux": FaLinux,
        "nintendo": SiNintendo,
        "atari": SiAtari,
        "commodore-amiga": SiCommodore,
        "sega": SiSega,
        "3do": ThreeDOIcon,
        "neo-geo":NeoGeoIcon,
        "web": BsGlobe,
    }

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
            ))}
        </HStack>
    );
};

export default PlatformIconList;