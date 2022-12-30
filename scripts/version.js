import fs from 'fs';

const pkg = JSON.parse(
    fs.readFileSync('./package.json', 'utf-8')
);

//////////////////////////////////////////////////////////////////////

! function () {

    delete pkg.private;
    delete pkg.scripts;
    delete pkg.devDependencies;

    pkg.main = pkg.main.replace('src/', '');
    pkg.typings = pkg.typings.replace('src/', '');

    pkg.version = pkg.version.replace(/(\d+)$/, function ($0, $1) {
        return ++$1;
    });

    fs.writeFileSync('public/package.json', JSON.stringify(pkg));

}()

! function () {

    let version = pkg.version;

    let text = fs.readFileSync('package.json').toString();
    text = text.replace(/("version": ").+?(")/, `$1${version}$2`);
    fs.writeFileSync('package.json', text);

}()
