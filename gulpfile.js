const gulp = require('gulp');
const browserSync = require('browser-sync');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const { webpack } = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require ("./webpack.config.js");




// Move the fontawesome files into css folder
gulp.task('webIconsFonts', function (){
    return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*'])
        .pipe(gulp.dest('css/webfonts'))
        .pipe(browserSync.stream());
});



// Create /css folder

gulp.task('css', () =>{

    const plugins = [
        cssnano
    ];


    return gulp.src(['src/scss/main.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream())
});

gulp.task('cssdefault', () =>{

    const plugins = [
        autoprefixer(),
        cssnano
    ];


    return gulp.src(['src/scss/default.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream())
});


// Move the javascript files into our /src/js folder
gulp.task('js', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/@popperjs/core/dist/umd/popper.js'])
        .pipe(gulp.dest("js"))
        .pipe(browserSync.stream());
});


// MIN JS
gulp.task('min-js', function (){
    return gulp.src(['src/js/*.js'])
        .pipe(minify({
            ext: { min: '.min.js' },
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.stream());
});


// Move the php's files
gulp.task('phpFiles', function () {
    return gulp.src([
            'src/*.php',
            'src/*.html'
        ])
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

// WEBPACK
gulp.task('webpack', function(){
    return gulp
        .src([
            'src/js/plugins/main.js',
        ])
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest('./js/plugins'));
});


//  watching scss/html files
gulp.task('watching', gulp.series(['cssdefault', 'min-js','phpFiles'], function (){
    gulp.watch(['src/scss/*.scss'], gulp.series('cssdefault'));
    gulp.watch(['src/js/*.js'], gulp.series('min-js'));
    gulp.watch(['src/js/plugins/*.js'], gulp.series('webpack'));
    gulp.watch(['src/*.php'], gulp.series('phpFiles'));
    gulp.watch(['src/*.php']).on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('css', 'js', 'webIconsFonts', 'phpFiles', 'webpack', 'watching'));