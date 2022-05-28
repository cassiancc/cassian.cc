function dropdown() {
    document.getElementById("hamburger").setAttribute("class", "hidden")
    document.getElementById("index").setAttribute("id", "steve")
    document.getElementById("dropdown").setAttribute("class", "shown")
    document.getElementById("nothamburger").setAttribute("class", "shown")
}
function closedropdown() {
    document.getElementById("nothamburger").setAttribute("class", "hidden")
    document.getElementById("steve").setAttribute("id", "index")
    document.getElementById("dropdown").setAttribute("class", "hidden")
    document.getElementById("hamburger").setAttribute("class", "shown")
}