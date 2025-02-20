// Form items
const ccNumberInput = document.querySelector('#cc-number')
const ccNameInput = document.querySelector('#cc-name')
const ccExpMonth = document.querySelector('#cc-exp-month')
const ccExpYear = document.querySelector('#cc-exp-year')
const ccCVV = document.querySelector('#cc-cvv')

// Card items
const cardNumber = document.querySelector('.card-number')
const cardName = document.querySelector('.card-name')
const cardExpMonth = document.querySelector('.card-exp-month')
const cardExpYear = document.querySelector('.card-exp-year')
const cardCVV = document.querySelector('.card-cvv')

const backCard = document.querySelector('.back-card')
const frontCard = document.querySelector('.front-card')

ccNumberInput.addEventListener('input', e => {
  // console.log(e.currentTarget.value)
  cardNumber.textContent =
    formatCardNumber(e.currentTarget.value) || 'XXXX XXXX XXXX XXXX'

  ccNumberInput.value = formatCardNumber(e.currentTarget.value)
})

const formatCardNumber = string => {
  const sanitizedString = string.replace(/[^0-9]/g, '')

  if (sanitizedString) {
    const fourNumbers = sanitizedString.replaceAll(' ', '').match(/.{1,4}/g)
    return fourNumbers.join(' ')
  }

  return ''
}

ccNameInput.addEventListener('input', e => {
  cardName.textContent = e.currentTarget.value || 'Seu nome'
})

ccExpMonth.addEventListener('input', e => {
  cardExpMonth.textContent = e.currentTarget.value || 'MM'
})

ccExpYear.addEventListener('input', e => {
  cardExpYear.textContent = e.currentTarget.value || 'AA'
})

ccCVV.addEventListener('input', e => {
  cardCVV.textContent = e.currentTarget.value || 'CVV'
})

ccCVV.addEventListener('focus', e => {
  frontCard.classList.remove('flip-car', 'flip-card-2')
  backCard.classList.remove('flip-car', 'flip-card-2')

  frontCard.classList.add('flip-card')
  
  setTimeout(() => {
    frontCard.classList.remove('flip-card')
    backCard.style = 'display: flex';
    frontCard.style = 'display: none'
    backCard.classList.add('flip-card-2')

  }, 250)

})

// Blur - contrátrio do focus

ccCVV.addEventListener('blur', e => {
  frontCard.classList.remove('flip-car', 'flip-card-2')
  backCard.classList.remove('flip-car', 'flip-card-2')

  backCard.classList.add('flip-card')

  setTimeout(() => {
    backCard.classList.remove('flip-card')
    backCard.style = 'display: none'
    frontCard.style = 'display: flex';
    frontCard.classList.add('flip-card-2')

  }, 250)

})