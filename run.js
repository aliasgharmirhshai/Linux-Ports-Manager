var argv = require('minimist')(process.argv.slice(2));
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const port = argv.p;

if (!Number.isInteger(port)) {
    console.log("Please Enter Valid Port");
    return;
}

async function Kill(port) {
    command = `sudo kill -9 $(sudo lsof -t -i:${port})`
    const { stdout } = await exec(command);
    console.log(stdout);
}

function Cheak(port) {
    // show port : sudo netstat -tulpn | grep node | awk '{ print $4 }' | cut -b 4-
    console.log("Check");
}

function Help() {
    console.log("\nKill Port :\n-p [PORT] -r k\n-p [PORT] -r kill\n\nCheack Port Status:\n-p [PORT] -r cheak\n-p [PORT] -r c");
}

if (argv.h == true) {
    Help();
    return;
}

switch (argv.r) {
    case 'kill': case 'k': {
        Kill(port);
        break;
    }

    case 'cheak': case 'c': {
        Cheak(port);
        break;
    }

    default:
        console.log("Somthing error Please Enter Valid Command (Enter -h)");
        break;
}