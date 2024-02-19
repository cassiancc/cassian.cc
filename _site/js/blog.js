//load packs onto page
// loadPosts()
async function loadPosts() {
    posts = ""
    //request modpacks
    try {
        let connection = await fetch("blog.json");
        posts = await connection.json();
    }
    catch (error) {
        console.log(error)
    }
    x = 0
    posts.forEach(function loadPost(post) {
        if (post.type == "gallery") {
            document.querySelector("#posts").innerHTML += `
            <div class="post post-${x}">
                <h2>${post.name}</h2>
                <span>${post.date}</span>
                <div class="img" data-page="0" data-gallerylength="${posts[x].gallery.length}"  class="post-image" id="image-${x}"style="height: ${post.height}; background-image: url(${post.gallery[0]});">
                    <button onclick="cycleGallery('${x}', '-1')" id="button-${x}"><</button>
                    <button onclick="cycleGallery('${x}', '1')" id="button-${x}">></button>
                </div>
                <p id="content-${x}">${post.content}</p>
            </div>`
        }
        else if (post.type == "image") {
            document.querySelector("#posts").innerHTML += `
            <div class="post post-${x}">
                <h2>${post.name}</h2>
                <span>${post.date}</span>
                <div class="img" data-page="0" data-gallerylength="${posts[x].gallery.length}"  class="post-image" id="image-${x}"style="height: ${post.height}; background-image: url(${post.gallery[0]});">
                </div>
                <p id="content-${x}">${post.content}</p>
            </div>`
        }
        else {
            document.querySelector("#posts").innerHTML += `
            <div class="post post-${x}">
                <h2>${post.name}</h2>
                <span>${post.date}</span>
                <p id="content-${x}">${post.content}</p>
            </div>`
        }
        
        x++
})};

function cycleGallery(x, i) {
    //math
    x = parseInt(x)
    i = parseInt(i)
    let newPage = parseInt(document.getElementById(`image-${x}`).getAttribute("data-page")) + i
    //stop at end and beginning of gallery
    if (newPage < 0) {
        newPage = 0
    }
    if (newPage >= document.getElementById(`image-${x}`).getAttribute("data-gallerylength")) {
        newPage = 0
    }
    //change image
    document.getElementById(`image-${x}`).setAttribute("data-page", newPage)
    document.getElementById(`image-${x}`).style.backgroundImage = `url(${posts[x].gallery[newPage]})`
}