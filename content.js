const interval = setInterval(() => {
  const header = document.querySelector('header')
  if (header) {

    const button = document.createElement("button")
    button.innerHTML = "1x"
    button.classList.add("twoTimesWolf")
    
    button.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio")
      audios.forEach((audio) => {
        audio.playbackRate = 1;
      })
    })


    const button2x = document.createElement("button")
    button2x.innerHTML = "2x"
    button2x.classList.add("twoTimesWolf")

    button2x.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio")
      audios.forEach((audio) => {
        audio.playbackRate = 2;
      })
    })

    header.appendChild(button)
    header.appendChild(button2x)
    
    clearInterval(interval);

  }
}, 1000);