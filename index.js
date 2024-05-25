const btnLikes1 = document.getElementbyId("BtnLikes1")
const countLikes1 = document.getElementbyId("countLikes1")

function clickLike1(){
    let totalLikes = parseInt(countLikes1.value) + 1
    countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",clickLike1)
