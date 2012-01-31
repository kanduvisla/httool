// In this file the functions are added:
function parseInput(id, url)
{
    switch(id)
    {
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
        case 'redirectsitemap' :
        {
            return "# REDIRECT SITEMAP.XML TO /SITEMAPXML/" + "\n" +
                "RewriteCond $1 ^sitemap.xml" + "\n" +
                "RewriteRule ^(.*)$ /sitemapxml/ [L]";
        }
        case 'forceie' :
        {
            return "# FORCE INTERNET EXPLORER TO THE LATEST RENDER ENGINE" + "\n" +
                "<IfModule mod_headers.c>" + "\n" +
                "    Header set X-UA-Compatible \"IE=Edge,chrome=1\"" + "\n" +
                "    <FilesMatch \"\\.(js|css|gif|png|jpe?g|pdf|xml|oga|ogg|m4a|ogv|mp4|m4v|webm|svg|svgz|eot|ttf|otf|woff|ico|webp|appcache|manifest|htc|crx|xpi|safariextz|vcf)$\">" + "\n" +
                "        Header unset X-UA-Compatible" + "\n" +
                "    </FilesMatch>" + "\n" +
                "</IfModule>";
        }
        case 'compress' :
        {
            return "# COMPRESS TEXT, HTML, JAVASCRIPT, CSS, XML" + "\n" +
                "<IfModule mod_deflate.c>" + "\n" +
                "    AddOutputFilterByType DEFLATE text/plain" + "\n" +
                "    AddOutputFilterByType DEFLATE text/html" + "\n" +
                "    AddOutputFilterByType DEFLATE text/xml" + "\n" +
                "    AddOutputFilterByType DEFLATE text/css" + "\n" +
                "    AddOutputFilterByType DEFLATE text/x-component" + "\n" +
                "    AddOutputFilterByType DEFLATE application/xml" + "\n" +
                "    AddOutputFilterByType DEFLATE application/xhtml+xml" + "\n" +
                "    AddOutputFilterByType DEFLATE application/rss+xml" + "\n" +
                "    AddOutputFilterByType DEFLATE application/javascript" + "\n" +
                "    AddOutputFilterByType DEFLATE application/x-javascript" + "\n" +
                "</IfModule>";
        }
        case 'cache' :
        {
            return "# CACHE FILES FOR 30 DAYS" + "\n" +
                "<filesMatch \"\\.(ico|pdf|flv|jpg|jpeg|png|gif|js|css|swf)$\">" + "\n" +
                "    Header set Cache-Control \"max-age=2592000, public\"" + "\n" +
                "</filesMatch>" + "\n" +
                "# CACHE FILES FOR 2 DAYS" + "\n" +
                "<filesMatch \"\\.(xml|txt)$\">" + "\n" +
                "    Header set Cache-Control \"max-age=172800, public, must-revalidate\"" + "\n" +
                "</filesMatch>" + "\n" +
                "# CACHE FILES FOR 2 HOURS" + "\n" +
                "<filesMatch \"\\.(html|htm)$\">" + "\n" +
                "    Header set Cache-Control \"max-age=7200, must-revalidate\"" + "\n" +
                "</filesMatch>";
        }
        case 'videomime' :
        {
            return "# ADD MIME TYPES FOR VIDEO FILES" + "\n" +
                "AddType video/ogg .ogv" + "\n" +
                "AddType video/mp4 .mp4" + "\n" +
                "AddType video/webm .webm";
        }
        case 'forcedownload' :
        {
            return "# FORCE MEDIA DOWNLOADS" + "\n" +
                "AddType application/octet-stream .pdf" + "\n" +
                "AddType application/octet-stream .doc" + "\n" +
                "AddType application/octet-stream .docx" + "\n" +
                "AddType application/octet-stream .avi" + "\n" +
                "AddType application/octet-stream .mpg" + "\n" +
                "AddType application/octet-stream .mpeg" + "\n" +
                "AddType application/octet-stream .wmv" + "\n" +
                "AddType application/octet-stream .mp3";
        }
        case 'customerror' :
        {
            return "# CUSTOM ERROR DOCUMENTS" + "\n" +
                "ErrorDocument 401 /error/401.php" + "\n" +
                "ErrorDocument 403 /error/403.php" + "\n" +
                "ErrorDocument 404 /error/404.php" + "\n" +
                "ErrorDocument 500 /error/500.php";
        }
        case 'hotlinking' :
        {
            if(url != '')
            {
            return "# PREVENT HOTLINKING" + "\n" +
                "RewriteCond %{HTTP_REFERER} !^" + "\n" +
                "RewriteCond %{HTTP_REFERER} !^http://(www\\.)?" + url.replace('www.', '').replace('.', '\\.') + "/ [nc]" + "\n" +
                "RewriteRule .*\\.(gif|jpg|png)$ http://" + url + "/img/hotlink_f_o.png [nc]";
            } else {
                return "# PREVENT HOTLINKING" + "\n" +
                    "# DISABLED: NO URL ENTERED";
            }
        }
    }
}