var lnx = lnx ||
{
	init_page: function()
	{
		var x = new Date(document.lastModified);
		document.getElementById("last_modified").innerHTML = "Last Modified: " + x;
	}
}
