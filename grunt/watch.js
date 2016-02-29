module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'js/*.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    },

    styles: {
        files: [
            'less/*.less'
        ],
        tasks: [
            'less:dev'
        ]
    },
    
    jade: {
        files: [
            'jade/*.jade'
        ],
        tasks: [
            'jade'
        ]
    },
    
};