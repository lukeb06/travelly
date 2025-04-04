import { useModal } from '../../context/modal';

function OpenModalButton({
    modalComponent, // component to render inside the modal
    buttonText, // text of the button that opens the modal
    onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
    onModalClose, // optional: callback function that will be called once the modal is closed
    className,
    disabled,
}) {
    const { setModalContent, setOnModalClose } = useModal();

    const onClick = e => {
        e.preventDefault();
        if (onModalClose) setOnModalClose(onModalClose);
        setModalContent(modalComponent);
        if (typeof onButtonClick === 'function') onButtonClick();
    };

    return (
        <button
            className={className ? className : ''}
            disabled={disabled || false}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}

export default OpenModalButton;
