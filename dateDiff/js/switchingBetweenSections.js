const headerBlocks = document.querySelectorAll('.head');

headerBlocks.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        let block = event.target.nextElementSibling;
        block.classList.length == 1 ?  block.classList.add('hidden') : block.classList.remove('hidden');    
    })
})
