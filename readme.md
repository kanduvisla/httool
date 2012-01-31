# How to contribute

1. Fork this repo.
2. Add a `<label>` with `<input>`-element to the index.html-file.
3. Add your `.htaccess`-rules to `js/functions.js`.
4. Send me a pull request.

## Editing the index.html file

This step is fairly simple, just add a checkbox to the list of checkboxes and give it a unique ID and a little description:

    <label>
        <input type="checkbox" checked="checked" id="hotlinking" /> Prevent hotlinking
    </label>

## Editing the js/functions.js file

This step is also simple, just add your case to the switch. The name of the case is the id of the checkbox of your item.
You can also make use of the `url`-variable if your `.htaccess`-rule needs to know this:

    case 'redirectwww' :
    {
        // Redirect non-www to www:
        if(url != '')
        {
        return "# REDIRECT NON-WWW to WWW" + "\n" +
            "RewriteCond %{HTTP_HOST} ^" + url.replace('www.', '').replace('.', '\\.') + "\n" +
            "RewriteRule (.*) http://" + url + "/$1 [R=301,L]";
        } else {
            return "# REDIRECT NON-WWW to WWW" + "\n" +
                "# DISABLED: NO URL ENTERED";
        }
    }

## That's it!

Simple and easy huh?