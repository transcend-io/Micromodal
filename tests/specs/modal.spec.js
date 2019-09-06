context('Modal 1', () => {
  before(() => {
    cy.visit('/')
  })

  const openModal = () => {
    cy.get('#modal-1-trigger').click()
  }

  const closeModal = () => {
    cy.get('#modal-1-overlay').click('left')
  }

  it('should see the trigger button', () => {
    cy.contains('Modal 1').as('#modal-1-trigger')
  })

  it('should not see the modal by default', () => {
    cy.get('#modal-1').and('not.be.visible')
    cy.get('#modal-1-overlay').and('not.be.visible')
  })

  /**
   * Checking overlay because the height of
   * .modal is zero and cypress treats that
   * as hidden
   */
  it('should fire modal on clicking button', () => {
    openModal()
    cy.contains('Modal 1').as('#modal-1-title')
    cy.get('#modal-1-overlay').and('be.visible')
    closeModal()
  })

  it('should close modal on overlay click', () => {
    openModal()
    cy.get('#modal-1-overlay').click('left')
    cy.get('#modal-1-overlay').and('not.be.visible')
  })

  it('should close modal on button click', () => {
    openModal()
    cy.get('#modal-1 .modal__btn:last').click()
    cy.get('#modal-1-overlay').and('not.be.visible')
  })

  it('should close modal on escape button press', () => {
    openModal()
    cy.get('body').type('{esc}')
    cy.get('#modal-1-overlay').and('not.be.visible')
  })

  it('should toggle aria-hidden class', () => {
    cy.get('#modal-1').should('have.attr', 'aria-hidden', 'true')
    openModal()
    cy.get('#modal-1').should('have.attr', 'aria-hidden', 'false')
    closeModal()
    cy.get('#modal-1').should('have.attr', 'aria-hidden', 'true')
  })

  it('fires onShow callback', () => {
    openModal()
    cy.get('#modal-1-callback').and('be.visible')
    closeModal()
  })

  it('fires onClose callback', () => {
    openModal()
    cy.get('#modal-1-callback').and('be.visible')
    closeModal()
    cy.get('#modal-1-callback').and('not.be.visible')
  })

  it('opens modal ny id', () => {
    cy.get('#modal-2-trigger').click()
    cy.contains('Modal 2').as('#modal-2-title')
    cy.get('#modal-2-close').click()
  })

  it('closes modal by id', () => {
    cy.get('#modal-2-trigger').click()
    cy.contains('Modal 2').as('#modal-2-title')
    cy.get('#modal-2-close').click()
  })
})
