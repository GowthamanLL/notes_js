
function fun1(){
    var b = document.getElementById('div2')
    var c = document.getElementById('pop')
    b.style.display = 'block'
    c.style.display = 'block'

}
var d = document.getElementById('bt1')
d.addEventListener('click',function(event){
    event.preventDefault()
    var q = document.querySelector('.container')
    var w = document.createElement('div')
    var b = document.getElementById('div2')
    var c = document.getElementById('pop')
    var name = document.getElementById('name').value
    var author = document.getElementById('author_name').value
    var description = document.getElementById('txt').value
    w.setAttribute('id','div')
    w.innerHTML = `<h2>${name}</h2>
    <h4>${author}</h4>
    <p>${description}</p>
    <button id='del' onclick="delete1(event)">delete</button>`
    q.append(w)
    b.style.display = 'none'
    c.style.display = 'none'
})
var e = document.getElementById('bt2')
e.addEventListener('click',function(event){
    event.preventDefault()
    var b = document.getElementById('div2')
    var c = document.getElementById('pop')
    b.style.display = 'none'
    c.style.display = 'none'
})

function delete1(event){
    event.target.parentElement.remove()
}
