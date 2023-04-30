import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
const ModalComponent = ({ children, className,wrapperClass, isOpen, closeModal }) => {
    return (
        <>
            <Transition appear  show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-100" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className={wrapperClass}>
                        <div className="flex min-h-full items-center justify-center w-full">
                            <Transition.Child
                                enter="ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100 w-full"
                                leave="ease-in"
                                leaveFrom="opacity-100 scale-100 w-full"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={`w-full transform overflow-hidden mx-auto shadow-xl transition-all ${className}`}>
                                    {children}
                                </Dialog.Panel>
                                <div className='flex absolute cursor-pointer right-4 top-4' onClick={closeModal}>
                                    {/* <CloseSvg /> */}
                                </div>

                            </Transition.Child>
                        </div>

                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default ModalComponent;