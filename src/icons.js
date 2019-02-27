import regularSvg from './sprites/solid.svg'

export default {
    install (Vue) {
        if(typeof document !== 'undefined'){
            const iconsWrapper = document.createElement('div')
            iconsWrapper.style.display = 'none'
            iconsWrapper.innerHTML = regularSvg
            document.body.insertBefore(iconsWrapper, document.body.firstChild)
        }
    },
}