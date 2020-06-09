const {execute} = require('katalon-cli/src/katalon-studio');
const core = require('@actions/core');

const user_ksVersion = core.getInput('theksVersion');
const user_ksLocation = core.getInput('theksLocation');
const user_ksProjectPath = core.getInput('theksProjectPath');
const user_ksArgs = core.getInput('theksArgs');
const user_x11Display = core.getInput('thex11Display');
const user_xvfbConfiguration = core.getInput('xvfbConfiguration');

try
{
    execute(
        user_ksVersion,
        user_ksLocation,
        user_ksProjectPath,
        user_ksArgs,
        user_x11Display,
        user_xvfbConfiguration,
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
