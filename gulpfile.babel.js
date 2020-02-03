'use strict';

import gulp from 'gulp';
import cssminify from 'gulp-minify-css';
import htmlminify from 'gulp-minify-html';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import uglify from 'gulp-uglify-es';

//HTML 파일을 minify
gulp.task('brominifyhtml', () =>{
    return gulp.src('public/htmlfile/*.html') //src 폴더 아래의 모든 html 파일을
        .pipe(htmlminify()) //minify(경령화) 해서
        .pipe(gulp.dest('dist/html')) //dist 폴더에 저장
        .pipe(browserSync.reload({stream:true})); //broserSync로 브라우저에 반영
});

//javascript 파일을 minify
gulp.task('brouglify', () =>{
    return gulp.src('public/javascripts/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}));
});

//CSS 파일을 minify
gulp.task('brominifycss', () =>{
    return gulp.src('public/stylesheets/*.css') //src 폴더 아래의 모든 css 파일을
        .pipe(concat('main.css')) //병합하고
        .pipe(cssminify()) //minify(경량화) 해서
        .pipe(gulp.dest('dist/css')) //dist 폴더에 저장
        .pipe(browserSync.reload({stream:true})); //browserSync 로 브라우저에 반영
});

//gulp.watch는 Gulp에게 특정 folder를 바라보게 하고 어떤 엑션을 재시작하게 한다.
gulp.task('browatch', () =>{
    gulp.watch('public/htmlfile/*.html', gulp.series('brominifyhtml'));
    gulp.watch('public/javascripts/*.js', gulp.series('brouglify'));
    gulp.watch('public/css/*.css', gulp.series('brominifycss'));
});

gulp.task('server', gulp.series(gulp.parallel('brominifyhtml','brouglify','brominifycss'), () =>{
    return browserSync.init({
        server: {
            baseDir: './'
        }
    });
}));

gulp.task('start', gulp.series(gulp.parallel('server', 'browatch')));