var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/thymeleaf'); // Import the Thymeleaf rendering function

// Handle the GET request
exports.get = function(req) {

    // Get the content that is using the page
    var content = portal.getContent();

    var site = portal.getSite();

    // Extract the main region which contains component parts
    var mainRegion = content.page.regions.main;

    // Prepare the model that will be passed to the view
    var model = {
        site: site,
        mainRegion: mainRegion
    };

    // Specify the view file to use
    var view = resolve('form-page.html');

    // Render the dynamic HTML with values from the model
    var body = thymeleaf.render(view, model);

    // Return the response object
    return {
        body: body
    };
};
