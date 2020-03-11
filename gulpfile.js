const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");
//服务器
gulp.task("server",done=>{
    connect.server({
        root:"dist",
        livereload:true
    })
    done();
})
gulp.task("html",done=>{
   gulp.src("html/*.html")
   .pipe(gulp.dest("dist"))
   .pipe(connect.reload()) //让页面自动刷新
    done();
})
//js
gulp.task("js",done=>{
    gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload()) //让页面自动刷新
     done();
 })
 gulp.task("img",done=>{
    gulp.src("img/*")
    .pipe(gulp.dest("dist/img"))
    .pipe(connect.reload()) //让页面自动刷新
     done();
 })
//sass
gulp.task("sass",done=>{
   gulp.src("sass/*.scss")
   .pipe(sourcemaps.init()) //浏览器调试代码时，让浏览器展示的代码和源代码发生关联
   .pipe(sass({outputStyle:"compact"}))//转换后css的格式，有四种
   .pipe(sourcemaps.write())
   .pipe(gulp.dest("dist/css"))
   .pipe(connect.reload()) 
    done();
})
//wacth
gulp.task("wacth",done=>{
   gulp.watch("sass/*.scss",gulp.series("sass"));
   gulp.watch("html/*.html",gulp.series("html"));
   gulp.watch("js/*.js",gulp.series("js"));
   gulp.watch("img/*",gulp.series("img"));
    done();
})

gulp.task("default",gulp.series("server","wacth"));
