<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" data-no-defer></script>
<script data-no-defer>
    if (!window.jQuery) {
        document.write('<script type="text/javascript" src="http://finders-keeperz.com/js/lib/jquery/jquery.min.js?ver=4.3.5" ><\/script>');
    }
</script>

<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js" data-no-defer></script>
<script data-no-defer>
    if (!window.jQuery.ui) {
        document.write('<script type="text/javascript" src="http://finders-keeperz.com/js/lib/jqueryui/jquery-ui.custom.min.js?ver=4.3.5" ><\/script>');
    }
</script>

<script type="text/javascript" src="http://finders-keeperz.com/var/cache/misc/assets/js/tygh/scripts-40930e215430f60bf3edd12b792365d01495974426.js"></script>
<script type="text/javascript">
(function(_, $) {

    _.tr({
        cannot_buy: 'You cannot buy the product with these option variants',
        no_products_selected: 'No products selected',
        error_no_items_selected: 'No items selected! At least one check box must be selected to perform this action.',
        delete_confirmation: 'Are you sure you want to delete the selected items?',
        text_out_of_stock: 'Out of stock',
        items: 'item(s)',
        text_required_group_product: 'Please select a product for the required group [group_name]',
        save: 'Save',
        close: 'Close',
        notice: 'Notice',
        warning: 'Warning',
        error: 'Error',
        empty: 'Empty',
        text_are_you_sure_to_proceed: 'Are you sure you want to proceed?',
        text_invalid_url: 'You have entered an invalid URL',
        error_validator_email: 'The email address in the <b>[field]<\/b> field is invalid.',
        error_validator_phone: 'The phone number in the <b>[field]<\/b> field is invalid. The correct format is (555) 555-55-55 or 55 55 555 5555.',
        error_validator_integer: 'The value of the <b>[field]<\/b> field is invalid. It should be integer.',
        error_validator_multiple: 'The <b>[field]<\/b> field does not contain the selected options.',
        error_validator_password: 'The passwords in the <b>[field2]<\/b> and <b>[field]<\/b> fields do not match.',
        error_validator_required: 'The <b>[field]<\/b> field is mandatory.',
        error_validator_zipcode: 'The ZIP / Postal code in the <b>[field]<\/b> field is incorrect. The correct format is [extra].',
        error_validator_message: 'The value of the <b>[field]<\/b> field is invalid.',
        text_page_loading: 'Loading... Your request is being processed, please wait.',
        error_ajax: 'Oops, something went wrong ([error]). Please try again.',
        text_changes_not_saved: 'Your changes have not been saved.',
        text_data_changed: 'Your changes have not been saved.Press OK to continue, or Cancel to stay on the current page.',
        placing_order: 'Placing the order',
        file_browser: 'File browser',
        browse: 'Browse...',
        more: 'More',
        text_no_products_found: 'No products found',
        cookie_is_disabled: 'For a complete shopping experience, please <a href=\"http://www.wikihow.com/Enable-Cookies-in-Your-Internet-Web-Browser\" target=\"_blank\">set your browser to accept cookies<\/a>'
    });

    $.extend(_, {
        index_script: 'index.php',
        changes_warning: /*'Y'*/'N',
        currencies: {
            'primary': {
                'decimals_separator': '.',
                'thousands_separator': ',',
                'decimals': '2'
            },
            'secondary': {
                'decimals_separator': '.',
                'thousands_separator': ',',
                'decimals': '2',
                'coefficient': '1.00000'
            }
        },
        default_editor: 'redactor',
        default_previewer: 'magnific',
        current_path: '',
        current_location: 'http://finders-keeperz.com',
        images_dir: 'http://finders-keeperz.com/design/themes/finderskeeperz/media/images',
        notice_displaying_time: 5,
        cart_language: 'en',
        language_direction: 'ltr',
        default_language: 'en',
        cart_prices_w_taxes: true,
        theme_name: 'finderskeeperz',
        regexp: [],
        current_url: 'http://finders-keeperz.com/shoes/?%2Fshoes%2F=',
        current_host: 'finders-keeperz.com',
        init_context: ''
    });

    
    
        $(document).ready(function(){
            $.runCart('C');
        });

    
            // CSRF form protection key
        _.security_hash = 'b7e65b9bb9c13c90d7e393f6060806a5';
    
}(Tygh, Tygh.$));
</script>
<script type="text/javascript">
CloudZoom = {
    path: 'http://finders-keeperz.com/js/addons/image_zoom'
};
</script>
<script type="text/javascript">
//<![CDATA[
(function() {
    if (typeof window.janrain !== 'object') window.janrain = {};
    var _languages = ['ar', 'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'fi', 'fr', 'he', 'hr', 'hu', 'id', 'it', 'ja', 'lt', 'nb', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'th', 'uk', 'zh'];
    window.janrain.settings = {
        type: 'modal',
        language: fn_get_listed_lang(_languages),
        tokenUrl: 'http://finders-keeperz.com/index.php?dispatch=auth.login&amp;return_url=index.php%3F%252Fshoes%252F%3D%26dispatch%3Dcategories.view%26category_id%3D228'
    };

    function isReady() { janrain.ready = true; };
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", isReady, false);
    } else {
        window.attachEvent('onload', isReady);
    }

    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.id = 'janrainAuthWidget';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
})();
//]]>

</script>


