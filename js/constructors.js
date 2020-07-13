function podcast (title, url, description){
    this.title = title;
    this.url = url;
    this.description = description;
};

function podcastFeature(title, url, pic){
    this.title = title;
    this.url = url;
    this.pic = pic;
};

function merch(title, price, pic, description){
    this.title = title;
    this.price = price;
    this.pic = pic;
    this.description = description;
};

function createPodcast(){
    const main = document.getElementById('main');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    // let iframe = main.insertAdjacentHTML(url);
    const paragraph = document.createElement('p');
    const sponsors = document.getElementById('sponsors');
    let clone = sponsors.cloneNode(true);

    let title = prompt("What's the title?",'nothing');
    let url = prompt("Please enter embed code", "nothing");
    let description = prompt("What's the description?", "nothing");

    let newPodcast = new podcast(title,url, description);

    div.setAttribute('class', 'podcast');
    h2.setAttribute('class', 'podcast-title')
    h2.innerHTML = newPodcast.title;

    // iframe.setAttribute('frameborder', '0');
    // iframe.setAttribute('scrolling', 'no');
    // iframe.setAttribute('url', newPodcast.url);
    
    paragraph.innerHTML = newPodcast.description;
    
    div.appendChild(h2);
    div.insertAdjacentHTML('beforeend', newPodcast.url);
    // div.lastChild
    div.lastChild.setAttribute('align', 'center');
    div.lastChild.setAttribute('height', '100%')
    div.lastChild.setAttribute('width', '370px')
    div.lastChild.setAttribute('class', 'podcast-embed')
    // div.appendChild(iframe);
    div.appendChild(paragraph);
    div.appendChild(clone);

    console.table(div);

    // main.appendChild(div);
    document.getElementById('podcast-container').appendChild(div);
};

function createMerch(){
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const paragraph = document.createElement('p');

    let title = prompt("What's the naem of the item?",'nothing');
    let cost = prompt('How much will it cost?', '$');
    let url = prompt("What's the img url?", "nothing");
    let description = prompt("What's the description?", "nothing");

    let newMerch = new merch(title, cost, url , description);

    div.setAttribute('class', 'merch');
    h2.setAttribute('class', 'merch-title')
    h2.innerHTML = newMerch.title;
    h3.innerHTML = "$" + newMerch.price;
    img.setAttribute('src', newMerch.pic);
    paragraph.innerHTML = newMerch.description;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(paragraph);

    document.getElementById('merch-container').appendChild(div);
}

document.getElementById('make-podcast').addEventListener('click', createPodcast);
document.getElementById('make-merch').addEventListener('click', createMerch);


