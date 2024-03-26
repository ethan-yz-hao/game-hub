import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms, {PlatForm} from "../hooks/usePlatForm";

interface Props {
    selectedPlatform: PlatForm | null;
    onSelectPlatform: (platform: PlatForm) => void;
}

const PlatformSelector = ({selectedPlatform, onSelectPlatform}: Props) => {
    const {data, error} = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;