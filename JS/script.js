const bag = []

/*main-actions*/

const tr = document.querySelectorAll('tbody tr');

function chooseItem() {
	actions.addItem()
}

tr.forEach( function (e) {
    e.addEventListener('click', chooseItem)
})

const actions = {

  addItem() {
    bag.push('item')
    console.log(bag)
  },

  removeItem() {
    bag.pop()
    console.log(bag)
  }
}

/*bag-actions*/

const bagActions = {
  showModal() {
    document.querySelector('.modal-overlay')
    .classList
    .add('active')
  },

  closeModal(){
    document.querySelector('.modal-overlay')
    .classList
    .remove('active')
  },

}


