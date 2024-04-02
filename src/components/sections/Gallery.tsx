import React from 'react';
import SectionTitle from '../elements/SectionTitle';
import Carousel from '../elements/Carousel';

export default function Gallery() {
    return (
        <section>
            <div className="container mx-auto">
                <SectionTitle titleOnly={true}>Gallery</SectionTitle>
                <Carousel />
            </div>
        </section>
    );
}
