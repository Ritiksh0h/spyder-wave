var homeSlider = new KeenSlider(
    "#home-slider",
    {
        loop: true,
    },
    [
        (homeSlider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
            clearTimeout(timeout)
        }
        function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
            homeSlider.next()
            }, 1500)
        }
        homeSlider.on("created", () => {
            homeSlider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
            })
            homeSlider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
            })
            nextTimeout()
        })
        homeSlider.on("dragStarted", clearNextTimeout)
        homeSlider.on("animationEnded", nextTimeout)
        homeSlider.on("updated", nextTimeout)
        },
    ]
)

// copyright year
var studentPlacementSlider = new KeenSlider("#student-placement-slider", {
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 3 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 6 },
      },
    },
    studentPlacementSlider: { perView: 1 },
  })

var cpYear = document.getElementById("cp-date");
var d = new Date();
var year = d.getFullYear()

cpYear.innerHTML = year;

