module.exports =  {
    // Development settings
 
    autoprefixer: {
      options: {
        browsers: ['last 30 versions']
      },
      files: {
        'css/style.css': 'css/style.css'
      }
    },
    watch: {
      sass: {
        files: ['less/**/*.{less}','less/_partials/**/*.{less}'],
        tasks: ['sass:dist', 'autoprefixer']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    }

    

};