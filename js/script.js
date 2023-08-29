
//add references
const elContainerAudios = document.getElementById("container-audios")

const audios = [
    {"id": "a", "url": "sounds/boom.wav"},
    {"id": "s", "url": "sounds/clap.wav"},
    {"id": "d", "url": "sounds/hithat.wav"},
    {"id": "f", "url": "sounds/kick.wav"},
    {"id": "g", "url": "sounds/openhat.wav"},
    {"id": "h", "url": "sounds/ride.wav"},
    {"id": "j", "url": "sounds/snare.wav"},
    {"id": "k", "url": "sounds/tink.wav"},
    {"id": "l", "url": "sounds/tom.wav"},
]

const createAudio = (id, url)=> {
    const newAudio = document.createElement("div")
    newAudio.setAttribute("class", "audio")
    newAudio.setAttribute("id", id)
    newAudio.innerHTML = id
    elContainerAudios.appendChild(newAudio)
}

const loadAudios = ()=> {
    audios.map(audio => {
        createAudio(audio.id, audio.url)
    })
}

//load audios
loadAudios()

