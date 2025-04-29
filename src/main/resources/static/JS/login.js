//登录
const username = document.querySelector('.username')
const password = document.querySelector('.password')
const passwordConfirm = document.querySelector('.password-confirm')
const login = document.querySelector('.login-btn')
const reg = document.querySelector('.reg')
const back = document.querySelector('.back')
login.addEventListener('click', function () {
    if (login.innerText === "登录") {
        axios({
            url: './project/login',
            method: 'POST',
            data: {
                username: username.value,
                password: password.value
            }
        }).then(result => {
            location.href = './index.html'
        })
    }
    else
        return
})
login.addEventListener('click', function () {
    if (login.innerText === "注册") {
        axios({
            url: './project/login',
            method: 'POST',
            data: {
                username: username.value,
                password: password.value
            }
        }).then(result => {
            location.href = './index.html'
        })
    }
    else
        return
})

//注册界面
reg.addEventListener('click', function (e) {
    username.style.marginBottom = "65px"
    password.style.marginBottom = "65px"
    passwordConfirm.style.display = "block"
    e.target.style.display = "none"
    back.style.display = "block"
    login.innerText = "注册"
})
//注册返回登录界面
back.addEventListener('click', function (e) {
    username.style.marginBottom = "72px"
    password.style.marginBottom = "108px"
    passwordConfirm.style.display = "none"
    reg.style.display = "block"
    e.target.style.display = "none"
    login.innerText = "登录"
})