//Tabs
function tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabcontent() {
        tabsContent.forEach(item => {
            // item.classList.add('hide');
            // item.classList.remove('show','import');
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].classList.add('show', 'import');
        // tabsContent[i].classList.remove('hide');
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabcontent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i ) =>{
                if(target == item){
                    hideTabcontent();
                    showTabContent(i);
                }
            })
        }
    });
}

module.exports = tabs;