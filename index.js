const {execute} = require('katalon-cli/src/katalon-studio');
const core = require('@actions/core');

/*const user_ksVersion = core.getInput('theksVersion');
const user_ksLocation = core.getInput('theksLocation');
const user_ksProjectPath = core.getInput('theksProjectPath');
const user_ksArgs = core.getInput('theksArgs');
const user_x11Display = core.getInput('thex11Display');
const user_xvfbConfiguration = core.getInput('xvfbConfiguration');
const user_Logger = core.getInput('theLogger');*/

try
{
    execute(
        '7.4.0',
        '',
        'simple_project/simple_project/',
        '-retry=0 -testSuiteCollectionPath="Test Suites/New Test Suite Collection" -apiKey="fdb89052-b651-46fe-ac7c-b7b4b305eb55"',
        '',
        '',
        {
            info: function()
            {
                console.log(arguments);
            },
            debug: function()
            {
                console.log(arguments);
            }
        }
    )
} catch (error)
{
    core.setFailed(error.message);
}
