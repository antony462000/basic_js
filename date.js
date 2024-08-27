let new_date= new Date()

console.log(new_date.toLocaleString()+"++++++++")
console.log(new_date.getMonth())
function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long', month: 'short', day:'2-digit',year: 'numeric' });        
}

var dateStr = new_date;
var day = getDayName(dateStr, "en-us");
console.log(day)