//Tabs
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabcontent() {
        tabsContent.forEach(item => {
            // item.classList.add('hide');
            // item.classList.remove('show','import');
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].classList.add('show', 'import');
        // tabsContent[i].classList.remove('hide');
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabcontent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i ) =>{
                if(target == item) {
                    hideTabcontent();
                    showTabContent(i);
                }
            })
        }
    });
}

export default tabs;