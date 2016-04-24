
Router.route('/google', {where: 'server'}).get(function() {
this.response.writeHead(302, {
'Location': "https://google.com/"
});
this.response.end();
});
