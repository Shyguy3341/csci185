const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks(term) {
    const url = `${baseURL}?q=${term}&type=track&limit=5`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    console.log(data[0].name);
    console.log(data[0].image_url);
    console.log(data[0].spotify_url);
   
   
    
    const container = document.querySelector('#tracks');
    for(let i=0;i<data.length;i+=1){
        const snippet = `
        <section class="track-item preview" onclick="playTrack('${data[i].id}')">
            <img src="${data[i].album.image_url}" alt="image of ${data[i].album.name}">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
            <div class="label">
                <h2> ${data[i].name}</h2>
                <p>
                   ${data[i].artist.name} 
                </p>
            </div>
        </section>`;
    
       
        container.innerHTML += snippet;
    }
    }

async function getAlbums(term) {
    const url = `${baseURL}?q=${term}&type=album&limit=5`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    console.log(data[0].id);
    console.log(data[0].name);
    console.log(data[0].image_url);
    console.log(data[0].spotify_url);
    const container = document.querySelector('#albums');
    for(let i=0;i<data.length;i+=1){
        const snippet = ` 
<section class="album-card" id="${data[i].id}">
    <div>
        <img src="${data[i].image_url}" alt="image of ${data[i].name}">
        <h2>"${data[i].name}"</h2>
        <div class="footer">
            <a href="${data[i].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`;
container.innerHTML += snippet;
    }



    
}

async function getArtist(term) {
    const url = `${baseURL}?q=${term}&type=artist&limit=1`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    console.log(data[0].name);
    console.log(data[0].image_url);
    console.log(data[0].spotify_url);

    const snippet = `
<section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
<div>
 <img src="${data[0].image_url}" alt="images of ${data[0].name}">
    <h2>${data[0].name}</h2>
    <div class="footer">
        <a href="${data[0].spotify_url}" target="_blank">
            view on spotify
        </a>
    </div>
</div>
</section>`;

    const container = document.querySelector('#artist');
    container.innerHTML = snippet;
}

async function playTrack(trackid){
    const container = document.querySelector('#artist');
    
    
const snippet =`<iframe style="border-radius:12px" 
src="https://open.spotify.com/embed/track/${trackid}?utm_source=generator" 
width="100%" 
height="152" 
frameBorder="0" 
allowfullscreen="" 
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
loading="lazy"></iframe>`


    
    container.innerHTML = snippet;
    
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}