const headerBlocks = document.querySelectorAll('.head');

headerBlocks.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        let block = event.target.nextElementSibling;
        if(block.classList.length == 1){
            block.classList.add('hidden');
        } else {
            block.classList.remove('hidden');
        }
        
    })
})
