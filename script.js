bars = document.getElementsByClassName('bar')
list = document.getElementsByClassName('super-container')
sub_list = document.getElementsByClassName('sub-ul-container')
title = document.getElementsByClassName('title')
listCss = document.getElementById('cssProject')
sub_listCss = document.getElementsByClassName('sub-ul-container-css-pr')

let displaylist = () => {
    if (list[0].style.display == 'none') {
        list[0].style.display = 'block'
        sub_listCss[0].style.display = 'none'
        for(let i=0; i<3 ; i++)
        sub_list[i].style.display = 'none'
    } else {
        list[0].style.display = 'none'
    }
}

for(let i=0 ; i<3 ; i++){
    title[i].addEventListener("click",() => {
        if (sub_list[i].style.display == 'none') {
            sub_list[i].style.display = 'block'
        } else {
            sub_list[i].style.display = 'none'
        }
    })

}



bars[0].addEventListener("click",displaylist)
listCss.addEventListener("click",() => {
    if (sub_listCss[0].style.display == 'none') {
        sub_listCss[0].style.display = 'block'
    } else {
        sub_listCss[0].style.display = 'none'
    }
})


