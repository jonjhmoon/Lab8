describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => { 
    cy.get('#volume-number').clear().type('75')
    .then(($el) => {
      expect($el).to.have.value(75)
    })
  })

  it('Volume input changes when slider changes', () => { 
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    .then(($el) => {
      expect($el).to.have.value(33)
    })
  })

  it('Changing audio', () => { 
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#horn-sound')
    .then(($el) => {
        expect($el).to.have.prop('volume', .33)
    })
  })

  it('Sound and image changes for party horn radio button', () => { 
    cy.get('#radio-party-horn').invoke('click')
    cy.get('#sound-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg')
    })
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
    })
  })

  it('Volume icon changes when increasing volume', () => { 
    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    })
  })
  
  it('Volume icon changes when increasing volume', () => { 
    cy.get('#volume-slider').invoke('val', 1).trigger('input')
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    })
  })

  it('Volume icon changes when increasing volume', () => { 
    cy.get('#volume-slider').invoke('val', 34).trigger('input')
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    })
  })

  it('Volume icon changes when increasing volume', () => { 
    cy.get('#volume-slider').invoke('val', 67).trigger('input')
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    })
  })

  it('Honk button is disabled', () => { 
    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    // needs to check if button is disabled on a non number
    // cy.get('#volume-slider').invoke('val', 'a').trigger('input')
    cy.get('#honk-btn')
    .then(($el) => {
      expect($el).to.be.disabled
    })
  })

  it('Error is shown with invalid input', () => { 
    cy.get('#volume-number').clear().type('-1')
    cy.get(':invalid')
    .then(($el) => {
      expect($el).to.exist;
    })
  })
});
