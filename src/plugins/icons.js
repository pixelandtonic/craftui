import iconsRegularSvg from '../sprites/regular.svg'
import iconsLightSvg from '../sprites/light.svg'

export default {
    install () {
        if(typeof document !== 'undefined'){
            const iconsWrapper = document.createElement('div')
            iconsWrapper.style.display = 'none'
            iconsWrapper.innerHTML = iconsRegularSvg + iconsLightSvg
            document.body.insertBefore(iconsWrapper, document.body.firstChild)
        }
    },
}