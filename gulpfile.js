/**
 * Dependencies
 */

var gulp = require('gulp')
,	gutil = require('gulp-util')
,	notify = require('gulp-notify')
,	plumber = require('gulp-plumber')
,	rename = require('gulp-rename')
,	minifyCSS = require('gulp-minify-css')
,	header = require('gulp-header')
,	size = require('gulp-size')
,	connect = require('gulp-connect')
,	watch = require('gulp-watch')
,	jade = require('gulp-jade')
,	concat = require('gulp-concat')
,	uglify = require('gulp-uglify')
,	sass = require('gulp-ruby-sass')
,	imagemin = require('gulp-imagemin')
,	pkg = require('./package.json')
,   gulpif = require('gulp-if')
,   minimist = require('minimist')
;

var gulpConfig = require('./gulp_config');
var vendors = gulpConfig.vendors;
var vendorJs = vendors.vendorJs;
var vendorCss = vendors.vendorCss;

var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'local' }
};
var options = minimist(process.argv.slice(2), knownOptions);
console.log("Running gulp with options: ", options);

/**
 * Config files
 */

var banner = [
	'/*',
	' * <%= pkg.name %> - <%= pkg.description %>',
	' * @version v<%= pkg.version %>',
	' * @link <%= pkg.homepage %>',
	' * @license <%= pkg.license %>',
	' */',
	'',
].join('\n');

function onError(err) {
	gutil.beep();
	console.log(err);
	console.log('*****MESSAGE*****');
	console.log(err.message);
};

var paths = {
	webserverRoot: './public',
	index: './public/index.html',
	jadeIndex: ['./assets/index.jade'],
	jade: ['./assets/**/*.jade', './app/**/*.jade', './modules/**/*.jade'],
	app: ['./app/app.module.js','./app/**/**/*.js'],
	scripts: ['./modules/**/index.js', './app/app.module.js', './app/filters/*.js','./app/**/**/*.js', './modules/**/*.js',  './assets/js/*.js', './assets/js/**/*.js' ],
	vendorCss: vendorCss,
	sassModules: ['./modules/**/**/*.sass'],
	sass: ['./assets/css/main.sass'],
	vendorJs: vendorJs,
	images: './assets/img/**/*',
	iconFonts: './assets/icon-fonts/**'
};


/**
 * Tasks
 */


// WebServer
gulp.task('webserver', function() {
	connect.server({
		port: 4000,
		livereload: true,
		root: [paths.webserverRoot],
		host: 'hagrid-io.dev',
		fallback: paths.index

	});
});

// Compile JADE into HTML
gulp.task('index', function () {
	gulp.src(paths.jadeIndex)
	.pipe(connect.reload())
	.pipe(plumber({ errorHandler: onError }))
	.pipe(jade({pretty: false}))
	.pipe(gulp.dest('./public/'));
});

// Compile JADE into HTML
gulp.task('jade', function () {
	gulp.src(paths.jade)
	.pipe(connect.reload())
	.pipe(plumber({ errorHandler: onError }))
	.pipe(jade({pretty: false}))
	.pipe(rename({dirname: 'partials'}))
	.pipe(gulp.dest('./public/'));
});

// Concat app scripts
gulp.task('vendorJs', function () {
  gulp.src(paths.vendorJs)
	.pipe(connect.reload())
	.pipe(plumber({ errorHandler: onError }))
	.pipe(concat('vendor.js'))
	.pipe(header(banner, { pkg: pkg }))
	.pipe(size({title: 'vendor.js'}))
	.pipe(gulp.dest('./public/js/'))
	.pipe(rename('vendor.js'))
	//.pipe(uglify())
	.pipe(size({title: 'vendor.js'}))
	.pipe(gulp.dest('./public/js/'))
});

// Concat app scripts
gulp.task('vendorCss', function () {
  gulp.src(paths.vendorCss)
	.pipe(connect.reload())
	.pipe(plumber({ errorHandler: onError }))
	.pipe(concat('vendor.css'))
	.pipe(header(banner, { pkg: pkg }))
	.pipe(size({title: 'vendor.css'}))
	.pipe(gulp.dest('./public/css/'))
});

// Concat app scripts
gulp.task('scripts', function () {
  gulp.src(paths.scripts)
	.pipe(connect.reload())
	.pipe(plumber({ errorHandler: onError }))
	.pipe(concat('app.js'))
	.pipe(header(banner, { pkg: pkg }))
	.pipe(size({title: 'app.js'}))
	//.pipe(rename('app.min.js'))
	.pipe(gulpif(options.env === 'production', uglify()))
	.pipe(size({title: 'app.js'}))
	.pipe(gulp.dest('./public/js/'))
});


/*// Concat app scripts
gulp.task('appjs', function () {
  gulp.src(paths.appjs)
	.pipe(connect.reload())
	.pipe(plumber({ errorHandler: onError }))
	.pipe(concat('app.js'))
	.pipe(header(banner, { pkg: pkg }))
	.pipe(size({title: 'app.js'}))
	//.pipe(rename('built.min.js'))
	//.pipe(uglify())
	//.pipe(size({title: 'app.js'}))
	.pipe(gulp.dest('./public/js/'))
});*/


// Concat SASS files
gulp.task('sassModules', function () {
	gulp.src(paths.sassModules)
		.pipe(connect.reload())
		.pipe(plumber({ errorHandler: onError }))
		.pipe(concat('_all.sass'))
		.pipe(gulp.dest('./assets/css/modules/'))
});

// Compile SASS files
gulp.task('sass', function () {
	gulp.src(paths.sass)
		.pipe(connect.reload())
		.pipe(plumber({ errorHandler: onError }))
		//.pipe(sass())
		.pipe(sass({
			quiet: true,
			lineNumbers: true,
			bundleExec: false,
			loadPath: require('node-neat').includePaths
		}))
		//.pipe(header(banner, { pkg: pkg }))
		//.pipe(rename('main.css'))
		.pipe(gulp.dest('./public/css/'))
});


// Minify and copy images
gulp.task('images', function(){
	gulp.src(paths.images)
	.pipe(imagemin())
	.pipe(gulp.dest('./public/img/'));
});

// Minify and copy images
gulp.task('icon-fonts', function(){
	gulp.src(paths.iconFonts)
	.pipe(gulp.dest('./public/icon-fonts/'));
});

/**
 * Watch files
 */
gulp.task('watch:jade', function () {
  gulp.watch(paths.jade, ['jade']);
});
gulp.task('watch:index', function () {
  gulp.watch(paths.jadeIndex, ['index']);
});
gulp.task('watch:scripts', function () {
  gulp.watch(paths.scripts, ['scripts']);
});
gulp.task('watch:vendorCss', function () {
  gulp.watch(paths.vendorCss, ['vendorCss']);
});
gulp.task('watch:vendorJs', function () {
  gulp.watch(paths.vendorJs, ['vendorJs']);
});
gulp.task('watch:sassModules', function () {
	gulp.watch(paths.sassModules, ['sassModules']);
});
gulp.task('watch:sass', function () {
  gulp.watch(paths.sass, ['sass']);
});
gulp.task('watch:images', function () {
  gulp.watch(paths.sass, ['images']);
});
gulp.task('watch:icon-fonts', function () {
  gulp.watch(paths.iconFonts, ['icon-fonts']);
});
gulp.task('watch', ['watch:icon-fonts', 'watch:index', 'watch:jade', 'watch:scripts', 'watch:sassModules', 'watch:sass']);



/**
 * Default task
 */
gulp.task('buildAssets', ['images', 'icon-fonts', 'index', 'jade', 'vendorJs', 'vendorCss', 'scripts', 'sassModules', 'sass']);
gulp.task('default', ['buildAssets', 'webserver', 'watch']);
