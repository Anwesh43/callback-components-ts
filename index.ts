interface DivProps {
    style: Object, 
    onclick: Function
}

interface SpanProps {
    style : Object,
    text : string 
}

interface InputProps {
    style: Object, 
    type: string,
    onKeyUp: Function, 
    onFocus: Function, 
    onKeyDown: Function
}

interface ButtonProps {
    style: Object, 
    onclick: Function, 
    text: string 
}

const div : Function = (props: DivProps, cb : Function) => {
    const divElement : HTMLDivElement = document.createElement('div')
    const {style, onclick} = props
    Object.keys(style).forEach((styleKey) => {
        divElement.style[styleKey] = style[styleKey]
    })
    divElement.onclick = (e) => {
        onclick(e);
    };
    divElement.append(cb());
    return divElement
}

const span : Function = (props : SpanProps) => {
    const {style, text} = props  
    const spanElement : HTMLSpanElement = document.createElement('span')
    spanElement.innerHTML = text 
    Object.keys(style).forEach((styleKey) => {
        spanElement.style[styleKey] = style[styleKey]
    })
    return spanElement
}

const input : Function = (props : InputProps) => {
    const {style, type, onKeyDown, onFocus, onKeyUp} = props  
    const inputElement : HTMLInputElement = document.createElement('input')
    inputElement.type = type
    inputElement.onkeydown = () => {
        onKeyUp()
    } 
    inputElement.onkeyup = () => {
        onKeyUp()
    }
    inputElement.onfocus = () => {
        onFocus()
    }
    Object.keys(style).forEach((styleKey) => {
        inputElement.style[styleKey] = style[styleKey]
    })
    return inputElement
}

const button : Function = (props : ButtonProps) => {
    const {style, text, onclick} = props 
    const buttonElement : HTMLButtonElement = document.createElement('button')
    buttonElement.onclick = () => {
        onclick()
    }
    buttonElement.innerHTML = text 
    Object.keys(style).forEach((styleKey) => {
        buttonElement.style[styleKey] = style[styleKey]
    })
    return buttonElement
}

const body : Function = (cb : Function) => {
    const bodyElement : HTMLElement = document.body
    bodyElement.append(cb())
    return bodyElement
}
const div1Style  = {
    width : "500px",
    height: "500px",
    background: 'indigo',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const div2Style  = {
    width : "400px",
    height: "400px",
    background: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const div3Style  = {
    width : "300px",
    height: "300px",
    background: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const div4Style  = {
    width : "200px",
    height: "200px",
    background: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const spanStyle =  {
    fontSize: '30px',
    color : 'white'
}
const onClick1 = (e : MouseEvent) => {
    alert('clicked1')
    e.stopImmediatePropagation()
}
const onClick2 = (e : MouseEvent) => {
    alert('clicked2')
    e.stopImmediatePropagation()
}
const onClick3 = (e : MouseEvent) => {
    alert('clicked3')
    e.stopImmediatePropagation()
}
const onClick4 = (e : MouseEvent) => {
    alert('clicked4')
    e.stopImmediatePropagation()
}
const div1Props : DivProps = {
    onclick: onClick1,
    style: div1Style
}

const div2Props : DivProps = {
    onclick: onClick2,
    style: div2Style
}

const div3Props : DivProps = {
    onclick: onClick3,
    style: div3Style
}

const div4Props : DivProps = {
    onclick: onClick4,
    style: div4Style
}

body(() => (
    div(div1Props, () => (
        div(div2Props, () => (
            div(div3Props, () => (
                div(div4Props, () => (
                    span({style: spanStyle, text: "hello"})
                ))
            ))
        ))
    ))
))
