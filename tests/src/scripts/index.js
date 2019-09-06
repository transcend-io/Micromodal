import MicroModal from 'micromodal'

const onShow = () => {
  document.getElementById('modal-1-callback').style.display = 'block'
}

const onClose = () => {
  document.getElementById('modal-1-callback').style.display = 'none'
}

// Initial config for setting up modals
MicroModal.init({
  openTrigger: 'data-custom-open',
  closeTrigger: 'data-custom-close',
  onShow: onShow,
  onClose: onClose,
  disableScroll: false,
  awaitCloseAnimation: true
})

document.querySelector('#modal-2-trigger').addEventListener('click', event => {
  event.preventDefault()
  MicroModal.show('modal-2')
  // MicroModal.close('modal-2')
})

document.querySelector('#modal-2-close').addEventListener('click', event => {
  event.preventDefault()
  MicroModal.close('modal-2')
})
