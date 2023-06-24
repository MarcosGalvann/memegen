const form = document.querySelector('#meme-gen');
const url = document.getElementById('img-url');
const sub = document.getElementById('sub');
const memes = document.getElementById('memes');
const meme = document.getElementById('meme')


form.addEventListener('submit', function(E){
    E.preventDefault();

    // Create Meme wrapper
    const memeWrapper = document.createElement('div');
    memeWrapper.classList.add('meme');
    memes.appendChild(memeWrapper);
 
    // Create and append Image
    const memepic = document.createElement('img');
    const deleteMeme = document.createElement('button');
    deleteMeme.innerText = 'DELETE';
    memepic.setAttribute('src', url.value); 
    url.value='';
    memeWrapper.appendChild(memepic);
    memeWrapper.appendChild(deleteMeme);

    // Create & append top text
    const topText = document.getElementById('top-text');
    const memeTopTxt = document.createElement('div');
    memeTopTxt.classList.add("tp-txt");
    memeTopTxt.innerText = topText.value;
    topText.value='';
    memeWrapper.appendChild(memeTopTxt);

    // TODO: do the same thing for bottom text
    const btmText = document.getElementById('btm-text');
    const memeBtmTxt = document.createElement('div');
    memeBtmTxt.classList.add("bm-txt");
    memeBtmTxt.innerText = btmText.value;
    btmText.value='';
    memeWrapper.appendChild(memeBtmTxt);

    // Append entire meme wrapper to #memes
    // memes.appendChild(memeWrapper);
});



memes.addEventListener('click',function(evnt){
if(evnt.target.tagName === 'BUTTON'){
evnt.target.parentElement.remove();
}
});

