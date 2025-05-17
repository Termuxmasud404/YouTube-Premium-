document.addEventListener("DOMContentLoaded", () => {
  const videoList = document.getElementById("video-list");
  const search = document.getElementById("search");

  const videos = [
    { title: "Welcome to Masud Rana Tube", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Learn HTML in 5 Minutes", url: "https://www.youtube.com/embed/UB1O30fR-EE" }
  ];

  function displayVideos(filter = "") {
    videoList.innerHTML = "";
    videos.filter(v => v.title.toLowerCase().includes(filter.toLowerCase())).forEach(video => {
      const iframe = document.createElement("iframe");
      iframe.width = "300";
      iframe.height = "200";
      iframe.src = video.url;
      iframe.title = video.title;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      videoList.appendChild(iframe);
    });
  }

  search.addEventListener("input", e => {
    displayVideos(e.target.value);
  });

  displayVideos();
});
