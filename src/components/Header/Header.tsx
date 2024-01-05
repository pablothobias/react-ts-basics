import { type FC } from 'react';
import { HeaderContainerCss, ImageHeaderCss } from './Header.style.ts';

interface HeaderProps {
    img: {
        src: string;
        alt: string;
    };
    children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ img, children }) => {
    return (
        <HeaderContainerCss>
            <ImageHeaderCss src={img.src} alt={img.alt} />
            {children}
        </HeaderContainerCss>
    );
};

export default Header;