var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename = require('gulp-rename');
var cp = require('child_process');
var minimist = require('minimist');

var PathLayaAir = '../../..';

gulp.task('copyas', function (cb) {
    let i = 0;
    function add() {
        console.log('last: ' + (13 - i));
        if (14 === ++i) {
            cb();
        }
    }

    gulp.src(PathLayaAir + '/ani/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/core/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/core/jsc/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/filter/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/html/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/particle/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/tiledmap/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/wx/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/bd/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/mi/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/qg/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/vv/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/bili/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/Alipay/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/qq/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/tt/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/hw/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/tb/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/tbplugin/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/tbgame/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/tbgame/src/**')
    .pipe(gulp.dest('../bin/as/libs/src'))
    .on('end', add);

    // gulp.src(PathLayaAir + '/plugins/youku/src/**')
    // .pipe(gulp.dest('../bin/as/libs/src'))
    // .on('end', add);

    gulp.src(PathLayaAir + '/plugins/debugtool/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/device/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/plugins/pathfinding/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/ui/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/webGL/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src([PathLayaAir + '/d3/src/**',
    '!' + PathLayaAir + '/d3/src/laya/d3/extension/**'])
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);

    gulp.src(PathLayaAir + '/d3Plugin/src/**')
        .pipe(gulp.dest('../bin/as/libs/src'))
        .on('end', add);
});

gulp.task('compile', ["copyas"], function (cb) {
    cp.execFile('compile.bat', function () { cb(); });
});

gulp.task('minify', ["compile"], function () {
    var stream = gulp.src('publish/bin/h5/js/*.js')//筛选要处理的文件
        .pipe(gulp.dest('../bin/js/libs'))//copy到发布目录
        .pipe(gulp.dest('../bin/ts/libs'))
        .pipe(uglify())//使用uglify进行压缩。更多配置可参考
        .pipe(rename({ extname: ".min.js" }))//重命名
        .pipe(gulp.dest('../bin/js/libs/min'))//保存压缩后的文件
        .pipe(gulp.dest('../bin/ts/libs/min'));
    return stream;
});

gulp.task('default', ["minify"], function (cb) {
    let i = 0;
    function add() {
        console.log('last: ' + (1 - i));
        if (2 === ++i) {
            cb();
        }
    }

    gulp.src('laya.js.exe')
        .pipe(gulp.dest('../bin/as'))
        .on('end', add);

    gulp.src('LayaJSMac')
        .pipe(gulp.dest('../bin/as'))
        .on('end', add);
});

