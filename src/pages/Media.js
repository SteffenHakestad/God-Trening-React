import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaPost from '../components/MediaPost';




export default function Media() {


    return (
        <>
        <Header 
            HeaderHeadline={"Media Innlegg"}
            HeaderLink={"God Trening"}
            HeaderLink2={"Media"}
            HeaderAnchor={"/"}
            HeaderAnchor2={"/media"}
            Display1={"block"}
            Display2={"none"}
        />
        <MediaPost 
            MediaTitle={"Hello"}
            MediaText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie tincidunt lectus, et ultrices est ornare euismod. Aliquam erat volutpat. Maecenas imperdiet hendrerit nisi in condimentum. In suscipit vel felis et gravida. Integer pulvinar urna orci, id suscipit diam interdum eu."}
        />
        <Footer />
        </>
    );
}
