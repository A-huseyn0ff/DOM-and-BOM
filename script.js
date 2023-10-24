let body=document.querySelector('body')

let btn=document.createElement('button')
btn.className='openModal'


    body.append(btn)
    
btn.textContent='Info'
let div=document.createElement('div')

let h1=document.createElement('h1')
let p=document.createElement('p')
h1.textContent='Hərkəsə Salam!'
p.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus blandit dignissim. Donec vehicula vestibulum lacus, id aliquet est malesuada non. Duis in justo nibh. Nunc convallis elementum tortor vitae cursus. In sit amet mattis ante. Aenean a purus ac ante ullamcorper interdum. Morbi laoreet dictum orci ac imperdiet. Ut lacus nisi, dictum faucibus lorem vitae, tempus suscipit lectus. Aenean sem mi, semper eget bibendum ut, venenatis in enim. Mauris venenatis pulvinar dui, ultrices tincidunt ex pulvinar ut. Sed tempus dictum leo sit amet dictum. Ut ut egestas orci, sit amet imperdiet lacus.'
div.className='Modal'

let ClickBack=document.createElement('button')
ClickBack.className='closeModal'
ClickBack.textContent='X'



    div.appendChild(ClickBack)
    div.appendChild(h1)
    div.appendChild(p)


div.style.display='none'
    body.append(div)

// btn.style.width='100px'
// btn.style.height='100px'
btn.onclick=()=>{
    body.style.backgroundColor='rgba(0, 0, 0, 0.4)'
    btn.style.backgroundColor='rgba(0, 0, 0, 0.4)'
    div.style.backgroundColor='white'
    div.style.display='block'
}
ClickBack.onclick=()=>{
    btn.style.backgroundColor=''
    div.style.display='none'
    body.style.backgroundColor='white'
    div.style.backgroundColor='white'
}
console.log(body);
