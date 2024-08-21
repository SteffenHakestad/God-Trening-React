import React, { useEffect, useState } from "react";
import HeroImageComponent from "../components/HeroImageComponent";
import ServicesComponent from "../components/ServicesComponent";
import MediaPostPreviewComponent from "../components/MediaPostPreviewComponent";
import Footer from "../components/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);

  useEffect(() => {
    // Fetch data from the backend
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const NextPost = () => {
    setCurrentPost((prevPostNumber) => (prevPostNumber + 1) % posts.length);
  };
  return (
    <>
      <HeroImageComponent />
      <ServicesComponent />
      <div className="about-outer-container">
        <div className="about-inner-container">
          <div className="about-text-container">
            <h1>Guri Brekke</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              varius luctus dignissim. Mauris vehicula erat id orci faucibus, ac
              porttitor mauris accumsan. Quisque tellus est, pellentesque ut
              ornare quis, posuere ornare massa. Suspendisse quis orci
              hendrerit."
            </p>
          </div>
          <div className="about-image-container">
            <div className="image-shell">
              <img src="/assets/images/StockPhoto.jpg" alt="about me" />
            </div>
          </div>
        </div>
      </div>

      <div id="mediapost-preview-home-container">
        <div className="h-media-divider"></div>
        <h1 id="preview-header-text">Nyeste Media Innlegg:</h1>
        <div id="mediapost-preview-home-inner-container">
          {posts.length > 0 && (
            <MediaPostPreviewComponent
              key={posts[currentPost]._id}
              MediaTitle={posts[currentPost].headline}
              MediaText={posts[currentPost].mediaText}
              ImagePath={`${posts[currentPost].image}`}
            />
          )}

          {/* {posts.length > 0 && (
            <MediaPostPreviewComponent
              key={posts[0]._id}
              MediaTitle={posts[0].headline}
              MediaText={posts[0].mediaText}
              ImagePath={`${posts[0].image}`}
            />
          )}
          <div className="v-services-divider"></div>

          {posts.length > 1 && (
            <MediaPostPreviewComponent
              key={posts[1]._id}
              MediaTitle={posts[1].headline}
              MediaText={posts[1].mediaText}
              ImagePath={`${posts[1].image}`}
            />
          )}
          <div className="v-services-divider"></div>

          {posts.length > 2 && (
            <MediaPostPreviewComponent
              key={posts[2]._id}
              MediaTitle={posts[2].headline}
              MediaText={posts[2].mediaText}
              ImagePath={`${posts[2].image}`}
            />
          )} */}
        </div>
        <button className="std-btn" onClick={() => NextPost()}>
          NextPost
        </button>

        <div className="h-media-divider-small"></div>
      </div>

      <Footer />
    </>
  );
}
// background: url(http://localhost:3000/static/media/StockPhoto.9a78d0ada57723114d66.jpg) no-repeat;
