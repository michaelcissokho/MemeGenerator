let memeGenerator = document.querySelector('#generator')
let display = document.querySelector('#Display')



memeGenerator.addEventListener('submit', function(event){
    //source of all input values
    event.preventDefault()
    let topLine = document.querySelector('#topLine').value
    let bottomLine = document.querySelector('#bottomLine').value
    let photo = document.getElementById('image').value

    //creating the image
    let meme = document.createElement('div')
    meme.classList.add('container')
    let memePhoto = document.createElement('img')
    memePhoto.src = photo
    meme.appendChild(memePhoto)

    //establisihing the top line of meme
    let topBlock = document.createElement('div')
    topBlock.classList.add('topBlock')
    topBlock.innerText = topLine
    meme.appendChild(topBlock)

    //establisihing the bottom line of meme
    let bottomBlock = document.createElement('div')
    bottomBlock.classList.add('bottomBlock')
    bottomBlock.innerText = bottomLine
    meme.appendChild(bottomBlock)

    //adding remove button
    let removeButton = document.createElement('button')
    removeButton.innerText = 'X'
    meme.append(removeButton)
    removeButton.addEventListener('click',function (event){
        event.target.parentElement.remove()
    })
    
    //adding div element to display
    display.append(meme)
    memeGenerator.reset()
})








