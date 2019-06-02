const sh = require('shelljs');
sh.rm('-rf', 'dist');
sh.exec('babel src --out-dir dist');
