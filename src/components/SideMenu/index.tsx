import { useRouter } from 'next/router';
import { BiHomeAlt } from 'react-icons/bi/index'
import { FiAward } from 'react-icons/fi/index'
import { NavLink } from './NavLink';
import {SideMenuContainer} from './styles'

export default function SideMenu(){
    
    const router = useRouter();

    return(
        <SideMenuContainer>
            <ul>
                <NavLink Icon={BiHomeAlt} href="/home" />
                <NavLink Icon={FiAward}   href="/ranking"/>
            </ul>
        </SideMenuContainer>
    )
}