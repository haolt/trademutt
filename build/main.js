jQuery(document).ready(function () {
    
    jQuery(window).scroll(startCounter);
    function startCounter() {
        var hT = jQuery('.h-statistics').offset().top,
            hH = jQuery('.h-statistics').outerHeight(),
            wH = jQuery(window).height();
        if (jQuery(window).scrollTop() > hT+hH-wH) {
            jQuery(window).off("scroll", startCounter);
            jQuery('.h-statistics__item__number').each(function () {
                var $this = jQuery(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    };
    // Tabs
    const tabs = document.querySelector('.h-social-impact__tabs');
    const tabButtons = tabs.querySelectorAll('.h-social-impact__tab-navigation-item');
    const tabPanels = Array.from(tabs.querySelectorAll('.h-social-impact__tab-navigation-content'));

    function handleTabButtonClick(event) {

        tabButtons.forEach(button => {
            button.setAttribute('aria-selected', false);
        });

        event.currentTarget.setAttribute('aria-selected', true);
        tabPanels.forEach(panel => {
            panel.hidden = true;
        });

        const {id} = event.currentTarget;
        const correspondingTabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
        correspondingTabPanel.hidden = false;
    }

    tabButtons.forEach(button => button.addEventListener('click', handleTabButtonClick));

});
    