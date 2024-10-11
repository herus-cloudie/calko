import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <a onClick={() => setOpen(true)} className="lightbox-image">
                <svg width={15} height={18} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3919 7.31221C14.6269 8.09812 14.6269 9.90095 13.3919 10.6869L3.3346 17.087C2.00315 17.9343 0.260849 16.9778 0.260849 15.3997L0.26085 2.5994C0.26085 1.02122 2.00315 0.0647914 3.3346 0.912078L13.3919 7.31221Z" fill="#FFA920" />
                </svg>
                <i className="ripple" />
            </a>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}