import { useRouter } from "next/router";

export function NavLink({Icon, href}){

    const router = useRouter();

    const isSelected = href === router.asPath;
    return (
        <li>
            {
                isSelected && <span />
            }
            <Icon color={isSelected && 'blue'} fontSize='32' />
        </li>
    )
}