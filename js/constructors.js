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

function merch(pic, price, description){
    this.pic = pic;
    this.price = price;
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

    main.appendChild(div);
};

document.getElementById('make-podcast').addEventListener('click', createPodcast);


