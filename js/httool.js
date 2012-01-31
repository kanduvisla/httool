// The URLBox:
var urlBox = document.getElementById('url');

// Get the options:
var elements = document.querySelectorAll('div.options input');

// The output:
var output = document.getElementById('output');

// Update function:
function update()
{
    var url             = urlBox.value;
    var htAccessData    = '';

    // Correct the URL:
    if(url != '')
    {
        if(url.indexOf('http://') != -1) { url = url.replace('http://', ''); }
        if(url.substr(0, 4) != 'www.') { url = 'www.' + url; }
        urlBox.value = url;
    }
    var checkedItems = [];
    for(var i = 0, l = elements.length; i < l; i++)
    {
        if(elements[i].checked)
        {
            checkedItems.push(elements[i].id);
            htAccessData += parseInput(elements[i].id, url) + "\n\n";
        }
    }
    var lines = htAccessData.split("\n");
    htAccessData = '';
    for(var i = 0, l = lines.length; i < l; i++)
    {
        if(lines[i].substr(0, 1) == '#')
        {
            htAccessData += '<span class="comment">' + lines[i].replace('<', '&lt;').replace('>', '&gt;') + '</span>' + "\n";
        } else {
            htAccessData += lines[i].replace('<', '&lt;').replace('>', '&gt;') + "\n";
        }
    }
    output.innerHTML = htAccessData;

    // Store settings:
    localStorage.setItem('url', url);
    localStorage.setItem('items', checkedItems.join(','));
}

// Initialisation:
if(localStorage.getItem('url'))
{
    urlBox.value = localStorage.getItem('url');
}
if(localStorage.getItem('items'))
{
    for(var i = 0, l = elements.length; i < l; i++)
    {
        elements[i].checked = false;
    }
    var items = localStorage.getItem('items').split(',');
    for(var i = 0, l = items.length; i < l; i++)
    {
        document.getElementById(items[i]).checked = true;
    }
}
update();

// Event listeners:
urlBox.addEventListener('change', update);
for(var i = 0, l = elements.length; i < l; i++)
{
    elements[i].addEventListener('change', update);
}

