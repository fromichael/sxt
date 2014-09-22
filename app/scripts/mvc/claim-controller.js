/**
 * Created by Michael on 22.09.14.
 */
function renderClaim() {
    $.getJSON("data/claims.json", function(data) {$('#xclaimbody').append(template({'my_content':data}));});
}