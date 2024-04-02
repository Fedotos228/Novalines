import React from 'react';
import SectionTitle from '../elements/SectionTitle';

export default function Reviews() {
    return (
        <section>
            <div className="container mx-auto">
                <SectionTitle type="column">
                    <h2>Employee reviews</h2>
                    <p className="text-center text-[#707070]">
                        Find out what our workers think about the company
                    </p>
                </SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
