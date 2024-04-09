export class ModalService {
    static openModal(image: HTMLImageElement, modal: HTMLElement) {
        const modalImage = modal.querySelector(".modal-image") as HTMLImageElement;
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modal.style.display = "block";
    }

    static closeModal(modal: HTMLElement) {
        modal.style.display = "none";
    }

    static closeOnKey(modal: HTMLElement) {
        const closeHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                ModalService.closeModal(modal);
                document.removeEventListener('keydown', closeHandler);
            }
        };
        document.addEventListener('keydown', closeHandler);
    }
}
