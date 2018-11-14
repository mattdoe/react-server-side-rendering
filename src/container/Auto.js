import { React, Container } from 'react';
import LoremIpsum from "../component/LoremIpsum";

class Auto extends Container {
    render() {
        return (
            <div>
                <h1>This is Auto</h1>
                <LoremIpsum />
            </div>
        )
    }
}

export default Auto;