
    function navFunction() {
        var navDropdownContent = document.querySelector("#nav .nav-dropdown-content");
        var navDropdownIcon = document.querySelector('#nav .angle-down .fa-angle-down');
        if (navDropdownContent.style.display === "block") {
            navDropdownContent.style.display = "none";
            navDropdownIcon.style.transform = "rotate(360deg)";
        }
        else{
            navDropdownContent.style.display = "block";
            navDropdownIcon.style.transform = "rotate(180deg)";
        }
    }
    
    function showNav() {
        var nav = document.getElementById("nav");
        nav.style.transform = "translateX(0)";
    }
    
    function closeNav() {
        var nav = document.getElementById("nav");
        nav.style.transform = "translateX(-100%)";
    }
    
    
    function showShoppingCart() {
        var shoppingCart = document.getElementById("shopping-cart")
        shoppingCart.style.transform = "translateX(0)";
    }
    
    function closeShoppingCart() {
        var shoppingCart = document.getElementById("shopping-cart");
        shoppingCart.style.transform = "translateX(100%)";
    }
    
    
    
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            console.log(target);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    });
    
    
    function sideBar() {
        var idBar = document.getElementById('mySidenav');
        var idFilter = document.getElementById('animation-sidebar');
        var idClose = document.getElementById('closeNav');
        var backgoundBar = document.querySelector('#barClose');
    
        if(idFilter){
            idFilter.addEventListener('click', openNav);
        }
        
        if (idClose) {
            idClose.addEventListener('click', closeSidebar);
        }

        function openNav() {
            idFilter.style.opacity = "0";
            idClose.style.display = "block";
            backgoundBar.classList.add('close-background');
            idBar.style.transform = "translateX(0px)";
        }
    
        function closeSidebar() {
            idFilter.style.opacity = "1";
            idClose.style.display = "none";
            backgoundBar.classList.remove('close-background');
            idBar.style.transform = "translateX(-600px)";
        }
        window.onclick = function(event) {
            if (event.target == backgoundBar)
                closeSidebar();
        }
    }
    sideBar();
       





