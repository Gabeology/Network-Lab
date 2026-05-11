alert("You have Now Connected to Network Lab")

document.getElementById("HNet1").alert = "Welcome To Network-1"

function updateClock() {
    const now = new Date()

    document.getElementById("clock").innerText = now.toLocaleString()
}

setInterval(updateClock, 1000)
updateClock()

const messages =[
    "System Online",
    "Welcome Back User",
    "Connected!"
]

const randomMessage = messages[Math.floor(Math.random() * messages.length)]
document.getElementById("messages").innerText = randomMessage