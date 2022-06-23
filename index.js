async function load(url) {
  const response = await fetch(url).then((res) => res.json());
  let dataTable = document.querySelector("table").querySelector("tbody");
  //   response.media.data.map((item) => {
  //     async function loadMedia(url) {
  //       const media = await fetch(url).then((response) => response.json());
  //       console.log(media);

  //     }
  //     // dataTable.innerHTML = `dataTable + item.id`;
  //     loadMedia(
  //       `https://graph.instagram.com/${item.id}?fields=id,media_type,media_url,username,timestamp,caption&access_token=${token}`
  //     );
  //   });

  var html = response.media.data.map(function (item) {
    async function loadMedia(url) {
      const media = await fetch(url).then((response) => response.json());
      console.log(media);
      dataTable.innerHTML =
        dataTable.innerHTML +
        ` <div>
      <div>Açıklama : ${media.caption}</div>
      <img class="img-fluid" width="50" height="50" src="${media.media_url}" />
      </div>`;
    }
    // dataTable.innerHTML = `dataTable + item.id`;
    loadMedia(
      `https://graph.instagram.com/${item.id}?fields=id,media_type,media_url,username,timestamp,caption&access_token=${token}`
    );
  });
}

const token = ""; // your token

const userId = ""; // your user id

load(
  "https://graph.instagram.com/me?fields=id,username,media&access_token=" +
    token
);
