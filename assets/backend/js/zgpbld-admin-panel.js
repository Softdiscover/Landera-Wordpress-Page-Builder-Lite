(function ($) {

    var zgpbld_admin_panel = function (element, options) {
        var elem = $(element);
        var obj_left = $(element).find('.zgpb-editor1-body-left');
        var obj_main = $(element).find('.zgpb-editor1-body-main');

        var obj_left_width = 302;

        var is_left_docked = 1;

        var obj = this;
        var defaults = {
            data: {
            }
        };
        var settings = $.extend(true, {}, defaults, options);
        // Public method - can be called from client code
        this.publicMethod = function () {

        };

        // Private method - can only be called from within this object
        var privateMethod = function () {

        };

        this.init = function () {
            this.calculate();


        };

        this.calculate = function () {
            var tmp_var = elem.width();
            var tmp_height = elem.height();


            if (parseFloat(tmp_var) > 0) {

                var tmp_new_width = parseFloat(tmp_var) - obj_left_width-20;
                if (parseInt(is_left_docked) === 1) {
                    obj_left.css('width', obj_left_width + 'px');
                    obj_main.css('width', tmp_new_width + 'px');


                } else {

                }
            }

        }


        this.hideLeft = function () {
            obj_left.hide();
            obj_main.css('width', '100%');
        }

        this.showLeft = function () {
            obj_left.show();
            obj_main.css('width', '100%');
            this.calculate();
        }

        this.init();

    };

    $.fn.zgpbld_admin_panel = function (options) {
        return this.each(function () {
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('zgpbld_admin_panel'))
                return;

            // pass options to plugin constructor
            var myplugin = new zgpbld_admin_panel(this, options);

            // Store plugin object in this element's data
            element.data('zgpbld_admin_panel', myplugin);
        });
    };
})($zgpb);

