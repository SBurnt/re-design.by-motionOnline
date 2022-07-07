import gulp from 'gulp';

import PATHS from '../paths';

export default function files() {
	return gulp.src(PATHS.src.files).pipe(gulp.dest(PATHS.build.files));
}
