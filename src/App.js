import React, { useEffect, useState } from "react";
import "./App.css";
import DownloadButton from "./DownloadButton";
import DownloadButtonDefault from "./DownloadButtonDefault";
import DownloadButtonInvalid from "./DownloadButtonInvalid";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
    console.log(id);
    setId(id);
  }, [videoUrl]);

  return (
    <>
      <header class="header-area">
        <div class="navbar-area">
          <div class="container">
            <nav class="site-navbar">
              <a href="#home" class="site-logo">
                NebulaX{" "}
              </a>

              <ul>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>

              <button class="nav-toggler">
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </header>
      <div className="app">
        <div className="app__linkBox">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className = "utheading">NebulaX Youtube Downloader</h1>
            <input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste the YouTube URL Here!"
            />
          </form>
        </div>

        {videoUrl === "" ? (
          <DownloadButtonDefault />
        ) : (
          <div>
            {videoUrl.startsWith("https://www.youtube.com/watch?v=") ||
            videoUrl.startsWith("https://youtube.com/watch?v=") ||
            videoUrl.startsWith("www.youtube.com/watch?v=") ||
            videoUrl.startsWith("youtube.com/watch?v=") ||
            videoUrl.startsWith("https://youtu.be/") ||
            videoUrl.startsWith("https://youtube.com/shorts/") ||
            videoUrl.startsWith("https://m.youtube.com/watch?v=") ||
            videoUrl.startsWith("v=") ? (
              <div>
                <DownloadButton id={id} type="mp3" />
                <br />
                <DownloadButton id={id} type="videos" />
              </div>
            ) : (
              <DownloadButtonInvalid />
            )}
          </div>
        )}
      </div>
      <div class="main">
        <div class="head">
          <p>How to Download</p>
        </div>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://en.savefrom.net/img/articles/youtube_com/new/ss_en_1.jpg" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Copy The URL</h2>
                <p class="card_text">
                  copy the URL of the photo, video from Youtube.
                </p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://en.savefrom.net/img/articles/youtube_com/new/any_page_en.jpg" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Paste The Link</h2>
                <p class="card_text">
                  Paste link into the input field and wait sometime for the conversion
                </p>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://en.savefrom.net/img/articles/youtube_com/new/site_en.jpg" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Download Successful</h2>
                <p class="card_text">
                  NebulaX will sync your URL and creates a downloadable link
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <footer>
        <div class="wrapper">
          <small>
            &copy;2023 <strong>NebulaX</strong>, Made with ❤️
          </small>
          <nav class="footer-nav">
            <a href="https://projectnebula.webflow.io">NebulaX</a>
            <a href="https://youtube.com/@swapdev">Youtube</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
