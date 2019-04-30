import iconsSvg from '../sprites/icons.svg'

export default {
    install () {
        if(typeof document !== 'undefined'){
            const iconsWrapper = document.createElement('div')
            iconsWrapper.style.display = 'none'
            iconsWrapper.innerHTML = iconsSvg
            document.body.insertBefore(iconsWrapper, document.body.firstChild)
        }
    },
}