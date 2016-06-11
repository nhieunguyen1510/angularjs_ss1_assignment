var helper = {
    name: 'helper',
    getUrlVars: function() {
        var vars = {},
            hashes;
        hashes = location.search.substring(1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
};