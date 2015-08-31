function initBubble(){
    jQuery('.bubbleInfo').each(function () {
        var distance = 15;
        var time = 250;
        var hideDelay = 500;

        var hideDelayTimer = null;

        var beingShown = false;
        var shown = false;
        var trigger = jQuery('#giftRegistryLink');
        var info = jQuery('.popup', this).css('opacity', 0);
        var main = jQuery('#webtexgiftregistrybox');


        jQuery([trigger.get(0), info.get(0)]).mouseover(function () {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);
            if (beingShown || shown) {
                return;
            } else {
                beingShown = true;

                main.css('display', 'block');

                info.css({
                    top: 0,
                    left: -33,
                    display: 'block'
                }).animate({
                    top: '+=' + distance + 'px',
                    opacity: 1
                }, time, 'swing', function() {
                    beingShown = false;
                    shown = true;
                });
            }

            return false;
        }).mouseout(function () {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);
            hideDelayTimer = setTimeout(function () {
                hideDelayTimer = null;
                info.animate({
                    top: '-=' + distance + 'px',
                    opacity: 0
                }, time, 'swing', function () {
                    shown = false;
                    info.css('display', 'none');
                });

            }, hideDelay);

            return false;
        });
    });}jQuery(function () {	initBubble();});