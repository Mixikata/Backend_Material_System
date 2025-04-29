
//侧边栏滑动
const w = document.querySelector(".w")
const main = document.querySelector(".main")
const nav = document.querySelector("nav")
w.computedStyleMap.width = document.body.offsetWidth
window.addEventListener('scroll', function () {
    const n = document.documentElement.scrollTop
    if (n >= 0) {
        nav.style.top = `${n}px`
    }
})
//侧边栏选中内容与内容切换
let SWITCH = [0, 0, 0, 0]
const triangleText = ['新建项目', '项目管理', '数据可视化', '设置']
const sideList = document.querySelector("nav")
const triangle = document.querySelector(".current .current-a i")
const VisualButton = document.querySelector(".Visual Button")
const VisualLast = document.querySelector(".Visual div:last-of-type")
sideList.addEventListener('click', function (e) {
    if (e.target.tagName === 'I' || e.target.tagName === 'A' || e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
        SWITCH[e.target.dataset.num - 1] = 1
        document.querySelector('nav .selected').classList.remove('selected')
        document.querySelector('.main .active').classList.remove('active')
        const li = document.querySelector(`nav ul li:nth-child(${e.target.dataset.num})`)
        const mainActive = document.querySelector(`.main > div:nth-child(${e.target.dataset.num})`)
        li.classList.add('selected')
        mainActive.classList.add('active')
        triangle.innerHTML = `${triangleText[e.target.dataset.num - 1]}`
        SWITCH[e.target.dataset.num - 1] = 1
        if (SWITCH[1] === 1) {
            document.querySelector("header form").style.visibility = "visible"
            render(1)
        }
        else {
            document.querySelector("header form").style.visibility = "hidden"
        }
        if (VisualButton.offsetTop - VisualLast.offsetTop < 80 && SWITCH[3] === 1) {
            VisualButton.style.position = 'relative'
            VisualButton.style.marginTop = '60px'
        }
        SWITCH[e.target.dataset.num - 1] = 0
    }
})
//多选
let ManagementBTN = document.querySelector(".Management button")
let btnRow = document.querySelector(".Management .btnRow")
const newBTN1 = document.createElement('button')
const newBTN2 = document.createElement('button')
newBTN1.innerHTML = "全选"
newBTN2.innerHTML = "删除"
newBTN1.style.display = "none"
newBTN2.style.display = "none"
btnRow.appendChild(newBTN1)
btnRow.appendChild(newBTN2)
let BTNswitch = 1
let MBTNclick = function mbtnclick() {
    const checkbox = document.querySelectorAll(".Management div li input")
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].setAttribute("type", "checkbox")
    }
    if (BTNswitch === 1) {
        ManagementBTN.innerHTML = "取消"
        newBTN1.style.display = "block"
        newBTN2.style.display = "block"
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].style.display = "block"
        }
        BTNswitch = 0
    }
    else {
        ManagementBTN.innerHTML = "批量管理"
        newBTN1.style.display = "none"
        newBTN2.style.display = "none"
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].style.display = "none"
        }
        BTNswitch = 1
    }
}
ManagementBTN.addEventListener('click', MBTNclick)
//数据提交
const NewForm = document.querySelector('.info')
const projectName = document.querySelector('.info li:nth-child(1) input')
const color = document.querySelector('.info li:nth-child(2) select')
const density = document.querySelector('.info li:nth-child(3) input')
const melting = document.querySelector('.info li:nth-child(4) input')
const boilingPoint = document.querySelector('.info li:nth-child(5) input')
const heatCap = document.querySelector('.info li:nth-child(6) input')
const resistivity = document.querySelector('.info li:nth-child(7) input')
const hard = document.querySelector('.info li:nth-child(8) input')
const expansion = document.querySelector('.info li:nth-child(9) input')
const yieldStrength = document.querySelector('.info li:nth-child(10) input')
const tensileStrength = document.querySelector('.info li:nth-child(11) input')
const elongation = document.querySelector('.info li:nth-child(12) input')
const impactToughness = document.querySelector('.info li:nth-child(13) input')
const rigidity = document.querySelector('.info li:nth-child(14) input')
const fatigueStrength = document.querySelector('.info li:nth-child(15) input')
const caloricValue = document.querySelector('.info li:nth-child(16) input')
const young = document.querySelector('.info li:last-of-type input')
const Newbtn = document.querySelector('.New button')
NewForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const obj = {
        projectName: projectName.value,
        color: color.options[color.selectedIndex].text,
        density: density.value,
        melting: melting.value,
        boilingPoint: boilingPoint.value,
        heatCap: heatCap.value,
        resistivity: resistivity.value,
        hard: hard.value,
        expansion: expansion.value,
        yieldStrength: yieldStrength.value,
        tensileStrength: tensileStrength.value,
        elongation: elongation.value,
        impactToughness: impactToughness.value,
        fatigueStrength: fatigueStrength.value,
        caloricValue: caloricValue.value,
        young: young.value
    }
    axios({
        url: 'http://localhost:8080/project/analysis',
        method: 'POST',
        data: obj
    }).then(result => {//注意添加提示框
        render(1)
        document.querySelector('nav .icon-menu').click()//注意验证
    })
    this.reset()
})
//项目管理渲染
const resultPage=document.querySelector('.Result')
const Management = document.querySelector('.Management')
async function render(judge, searchName = 0) {
    let result = {}
    if (judge === 1)
        result = await axios({
            url: 'http://localhost:8080/project/list'
        })
    else
        result = await axios({
            url: 'http://localhost:8080/project/select',
            params: { projectName: searchName }
        })
    Management.innerHTML =
        `<div class="btnRow Mitem">
            <button>批量管理</button>
        </div>
        <div class="Result">
            <button>返回</button>
        </div>`
    ManagementBTN = document.querySelector(".Management button")
    ManagementBTN.addEventListener('click', MBTNclick)
    btnRow = document.querySelector(".Management .btnRow")
    btnRow.appendChild(newBTN1)
    btnRow.appendChild(newBTN2)
    newBTN1.style.display = "none"
    newBTN2.style.display = "none"
    for (let i = 0; i < result.data.data.length; i++) {
        const div = document.createElement('div')
        div.classList.add("Mitem")
        div.innerHTML =
            `<li><input type="checkbox" data-project-id=${result.data.data[i].projectId}></li>
            <li class="projectName">${result.data.data[i].projectName}</li>
            <li class="">${result.data.data[i].createTime}</li>
            <li class="checkResult" data-project-id=${result.data.data[i].projectId}>查看结果</li>
            <li><span class="iconfont icon-shanchu" data-project-id=${result.data.data[i].projectId}></span></li>`
        Management.appendChild(div)
        if (BTNswitch === 0) {
            BTNswitch = 1
            MBTNclick()
        }
    }
    document.querySelectorAll('.checkResult').forEach(item => item.addEventListener('click', function (e) {

        axios({
            url: 'http://localhost:8080/project/check',
            params: {
                projectId: e.target.dataset.projectId
            }
        }).then(result => {
            document.querySelectorAll('.Mitem').forEach(item=>item.style.display = "none")
            document.querySelector('.Result').style.display = "block"
            document.querySelector('.Result button').style.display="block"
            document.querySelector('.Result').innerHTML =
                `<button>返回</button>
            <div>项目名称:${result.data.data.projectName}</div>
            <div>创建时间:${result.data.data.createTime}</div>
            <div>颜色:${result.data.data.color}</div>
            <div>密度:${result.data.data.density}</div>
            <div>熔点:${result.data.data.melting}</div>
            <div>沸点:${result.data.data.boilingPoint}</div>
            <div>比热容:${result.data.data.heatCap}</div>
            <div>电阻率:${result.data.data.resistivity}</div>
            <div>硬度:${result.data.data.hard}</div>
            <div>热膨胀系数:${result.data.data.expansion}</div>
            <div>屈服强度:${result.data.data.yieldStrength}</div>
            <div>抗拉强度:${result.data.data.tensileStrength}</div>
            <div>延展率:${result.data.data.elongation}</div>
            <div>冲击韧性:${result.data.data.impactToughness}</div>
            <div>疲劳强度:${result.data.data.fatigueStrength}</div>
            <div>热值:${result.data.data.caloricValue}</div>
            <div>杨氏模量:${result.data.data.young}</div>
            <div>分析结果:${result.data.data.analysisResult}</div>
            <div>结果图片:</br>
            <img src="data:image/jpg;base64,${result.data.data.resultImage}">
            </div>
            `
            //项目管理内容页返回
            document.querySelector('.Result button').addEventListener('click', function () {
                document.querySelector('.Result').style.display = "none"
                document.querySelectorAll('.Mitem').forEach(item => { item.style.display = "flex" })
            })
        })
    }))
}

//项目管理删除
Management.addEventListener('click', function (e) {
    if (e.target.classList.contains('iconfont icon-shanchu')) {
        axios({
            url: 'http://localhost:8080/project/delete',
            method: 'DELETE',
            params: {
                projectId: e.target.dataset.projectId
            }
        }).then(result => {
            render(1)
        })
    }
})
newBTN1.addEventListener('click', function () {
    const Mchecked = document.querySelectorAll('.Management div input')
    let isCheckedAll = true
    for (let i = 0; i < Mchecked.length; i++) {
        if (Mchecked[i].checked === false)
            isCheckedAll = false
    }
    if (isCheckedAll === true)
        for (let i = 0; i < Mchecked.length; i++) {
            Mchecked[i].checked = false
        }
    else {
        for (let i = 0; i < Mchecked.length; i++) {
            Mchecked[i].checked = true
        }
    }
})
newBTN2.addEventListener('click', function (e) {
    const Mchecked = document.querySelectorAll('.Management div input')
    let MCarr = []
    for (let i = 0; i < Mchecked.length; i++) {
        if (Mchecked[i].checked === true) {
            MCarr.push(Mchecked[i].dataset.projectId)
        }
    }
    axios({
        url: 'http://localhost:8080/project/delete',
        method: 'DELETE',
        params: {
            projectId: MCarr.join(',')
        }
    }).then(result => {
        render(1)
    })
})
//项目管理搜索
document.querySelector('.search-bar').addEventListener('change', function (e) {
    e.preventDefault()
    document.querySelector('header button').style.visibility = "visible"
    render(2, e.target.value)
})
document.querySelector('.search label').addEventListener('click', function () {
    console.log(456)
    const query = document.querySelector('.search-bar').value
    render(2, query)
})
//搜索返回按钮
document.querySelector('header button').addEventListener('click', function (e) {
    document.querySelector('.search-bar').value = ""
    e.target.style.visibility = "hidden"
    render(1)
})
