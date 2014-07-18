/**
* Default $.serialize() does not pass unchecked checkboxes to the datastring.
* with this plugin and $.serialize({ checkboxesAsBools: true}) it's possible.
* Based on jQuery code: http://james.padolsey.com/jquery/#v=1.11.1&fn=serializeArray
*/

(function ($) {

    $.fn.serialize = function (options) {
        return $.param(this.serializeArray(options));
    };

    $.fn.serializeArray = function (options) {
        var o = $.extend({
            checkboxesAsBools: false
        }, options || {});

        var regSelectTextarea = /select|textarea/i;
        var regInput = /text|hidden|password|search/i;

        return this.map(function () {
            return this.elements ? $.makeArray(this.elements) : this;
        }).filter(function () {
            return this.name && !this.disabled &&
                (this.checked
                    || (o.checkboxesAsBools && this.type === 'checkbox')
                    || regSelectTextarea.test(this.nodeName)
                    || regInput.test(this.type));
        }).map(function (i, elem) {

            var val = $(this).val();

            if (val === null) {
                return null;
            } else {
                if ($.isArray(val)) {
                    $.map(val, function (val, i) {
                        return {
                            name: elem.name,
                            value: val
                        };
                    });
                } else {
                    return {
                        name: elem.name,
                        value: (o.checkboxesAsBools && this.type === 'checkbox') ? (this.checked ? 'true' : 'false') : val
                    };
                }
            }
        }).get();
    };

}(jQuery));