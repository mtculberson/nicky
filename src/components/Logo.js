import logo from '../logo.png';
import Image from 'react-bootstrap/Image';
import smallLogo from '../favicon.ico';
import React from 'react';

export default function Logo() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 700;
    React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    if (width > breakpoint) {
        return (
            <Image src={logo} className="App-logo" />
        );
    }

    return (
        <Image src={smallLogo} className="App-logo-small" />
    );
}